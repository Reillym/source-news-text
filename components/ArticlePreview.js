const ArticlePreview = props => {
  const { title, author, url } = props;
  return (
    <li>
      <h2>
        <a target="_blank" href={url}>
          {title}
        </a>
      </h2>
      { author && <p>Author: {author}</p> }
      <style jsx>{`
        color: #4a4a4a;
        text-decoration: none;
        h2 {
          font-size: 1.35em;
          font-weight: 600;
        }
        li {
          padding: 4px 0;
          list-style-type: none;
        }
        p {
          color: lightgray;
        }
      `}</style>
    </li>
  );
};

export default ArticlePreview;
