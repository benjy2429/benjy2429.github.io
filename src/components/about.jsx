import React from 'react';

export default class About extends React.Component {
  renderMarkdown(title) {
    const sectionData = this.props.data.find(
      section => section.node.frontmatter.title === title
    );

    if (sectionData) {
      const { html } = sectionData.node;
      return (
        <div className="about-item">
          <h2 id={title.toLowerCase()}>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <section className="about container">
        <div className="about-wrapper">
          {this.renderMarkdown('Work')}
          {this.renderMarkdown('Education')}
        </div>
      </section>
    );
  }
}
