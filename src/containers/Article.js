import React, { Component } from 'react';
import request from 'superagent';
import ArticlePresentation from '../presentations/Article.js'

class ArticleContainer extends Component {
  constructor(){
    super();

    this.state = {
      fields: [],
    }
  }

  componentDidMount(){
    this.getArticles();
  }

  getArticles(){
    var th = this;
    request
    .get('http://d8.de-mauroy.fr/api-rest/articles')
    .set('Accept', 'application/json')
    .end(function(err, res){
      th.setState({
        fields: JSON.parse(res.text)
      });
    });
  }

  render() {
    return <ArticlePresentation fields={this.state.fields} />;
  }
}
 export default ArticleContainer;
