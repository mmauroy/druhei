import React from 'react';

// class ArticlePresentation extends Component {
//   renderArticle({title, body}){
//     return <li>{title}-{body}</li>;
//   }
//
//   render() {
//     return <ul>{this.props.fields.map(this.renderArticle)}</ul>;
//   }
// }

const ArticlePresentation = ({title, body}) =>{
  return(
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default ArticlePresentation;
