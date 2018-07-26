import React from 'react';

export default () => (
  <section className="contact">
    <div className="container">
      <h2 id="contact">Contact</h2>
      <p>
        I hope I&#8217;ve covered everything but if you have any questions or
        comments, drop me a message.
      </p>

      <form action="https://www.enformed.io/6b8u88yv" method="POST">
        <input
          type="hidden"
          name="*redirect"
          value="https://www.bencarr.co.uk/thanks"
        />
        <input
          type="hidden"
          name="*subject"
          value="bencarr.co.uk Contact Form"
        />
        <input type="hidden" name="*reply" value="email" />
        <input type="text" name="*honeypot" style={{ display: 'none' }} />

        <label htmlFor="contact-name">Name</label>
        <input type="text" name="name" id="contact-name" required />

        <label htmlFor="contact-email">Email</label>
        <input type="email" name="email" id="contact-email" required />

        <label htmlFor="contact-message">Message</label>
        <textarea name="message" id="contact-message" required />

        <input type="submit" value="Send" />
      </form>
    </div>
  </section>
);
