import React from "react";
import ArticlePreview from "./ArticlePreview";

const ArticlePreviewList = props => (
  <ul>
    {props.articles.map(articles => (
      <ArticlePreview
        key={articles.title}
        title={articles.title}
        description={articles.description}
        author={articles.author}
        url={articles.url}
      />
    ))}
  </ul>
);

export default ArticlePreviewList;
