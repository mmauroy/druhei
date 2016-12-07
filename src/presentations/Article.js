import React, { Component } from 'react';

class ArticlePresentation extends Component {
  constructor(props) {
    super(props);
  }

  renderArticle({title, body}){
    return <li>{title}-{body}</li>;
  }

  render() {
    return <ul>{this.props.fields.map(this.renderArticle)}</ul>;
  }
}

export default ArticlePresentation;
