import React, { Component } from 'react';
import ArticlePresentation from '../presentations/Article.js'

class ArticleContainer extends Component {
  constructor(){
    super();

    this.state = {
      fields: [],
      loading: true
    }
  }

  componentWillMount(){
    fetch('http://d8.de-mauroy.fr/api-rest/articles')
      .then(res => res.json())
      .then(fields => this.setState({
        loading: false,
        fields: fields
      }));
  }

  render() {
    let content = "Loading";
    if(this.state.loading === false && this.state.fields.length > 0){
      content = this.state.fields.map((fields,index) => {
        return <ArticlePresentation key={index} {...fields} />;
      })
    }
    return <div>{content}</div>;
  }
}
 export default ArticleContainer;
