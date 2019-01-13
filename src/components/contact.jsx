import React from 'react';

const FORM_ENDPOINT = 'https://www.enformed.io/6b8u88yv';
const REDIRECT_PATH = '/thanks';
const ERROR_PATH = '/formerror';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        value: '',
        errors: []
      },
      email: {
        value: '',
        errors: []
      },
      message: {
        value: '',
        errors: []
      },
      honeypot: {
        value: '',
        errors: []
      }
    };

    this.submitForm = this.submitForm.bind(this);
    this.updateFormData = this.updateFormData.bind(this);
    this.validateFormData = this.validateFormData.bind(this);
  }

  get hasValidationErrors() {
    return Object.keys(this.state).reduce((isInvalid, key) => {
      const { errors } = this.state[key];
      return isInvalid || errors.length;
    }, false);
  }

  validateFormData() {
    const newState = this.state;
    Object.keys(newState).forEach(key => {
      newState[key].errors = [];
    });

    if (this.state.honeypot.value.length) {
      newState.honeypot.errors.push('Honeypot error');
    }

    ['name', 'email', 'message'].forEach(target => {
      if (!this.state[target].value.length) {
        newState[target].errors.push(`Please enter a valid ${target}`);
      }
    });

    if (/http/g.test(this.state.message.value)) {
      newState.message.errors.push(
        'Please do not include links in your message'
      );
    }

    this.setState(newState);
  }

  updateFormData(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: {
        ...this.state[name],
        value
      }
    });
  }

  async submitForm(event) {
    event.preventDefault();

    this.validateFormData();

    if (this.hasValidationErrors) {
      return;
    }

    const formData = {
      '*subject': 'bencarr.co.uk Contact Form',
      '*reply': this.state.email.value,
      '*honeypot': this.state.honeypot.value,
      name: this.state.name.value,
      email: this.state.email.value,
      message: this.state.message.value
    };

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const { status } = await response.json();
      window.location.assign(status === 200 ? REDIRECT_PATH : ERROR_PATH);
    } catch (e) {
      window.location.assign(ERROR_PATH);
    }
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <section className="contact">
        <div className="container">
          <h2 id="contact">Contact</h2>
          <p>
            I hope I&#8217;ve covered everything but if you have any questions
            or comments, drop me a message.
          </p>

          <form onSubmit={this.submitForm}>
            <input type="hidden" name="*reply" value="email" />
            <input
              type="hidden"
              name="honeypot"
              onChange={this.updateFormData}
            />

            <label htmlFor="contact-name">Name</label>
            <input
              type="text"
              name="name"
              id="contact-name"
              onChange={this.updateFormData}
              className={name.errors.length > 0 ? 'invalid' : ''}
              required
            />
            {name.errors.length > 0 && (
              <div className="validation-error">{name.errors[0]}</div>
            )}

            <label htmlFor="contact-email">Email</label>
            <input
              type="email"
              name="email"
              id="contact-email"
              onChange={this.updateFormData}
              className={email.errors.length > 0 ? 'invalid' : ''}
              required
            />
            {email.errors.length > 0 && (
              <div className="validation-error">{email.errors[0]}</div>
            )}

            <label htmlFor="contact-message">Message</label>
            <textarea
              name="message"
              id="contact-message"
              onChange={this.updateFormData}
              className={message.errors.length > 0 ? 'invalid' : ''}
              required
            />
            {message.errors.length > 0 && (
              <div className="validation-error">{message.errors[0]}</div>
            )}

            <input type="submit" value="Send" />
          </form>
        </div>
      </section>
    );
  }
}
