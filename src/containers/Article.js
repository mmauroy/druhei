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
    if(this.state.loading === false && this.state.fields.length > 0){
      return <ArticlePresentation fields={this.state.fields} />;
    }
    return <div>Loading</div>;
  }
}
 export default ArticleContainer;
