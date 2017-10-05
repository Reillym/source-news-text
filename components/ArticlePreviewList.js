import React from "react";
import ArticlePreview from "./ArticlePreview";

const ArticlePreviewList = ({articles}) => (
  <ul>
    {articles.map(articles => (
      <ArticlePreview
        key={articles.url}
        title={articles.title}
        description={articles.description}
        author={articles.author}
        url={articles.url}
      />
    ))}
  </ul>
);

export default ArticlePreviewList;
