const ArticlePreview = ({title, author, url}) => {
  return <li>
      <h2>
        <a target="_blank" href={url}>
          {title}
        </a>
      </h2>
      {author && <p>Author: {author}</p>}
      <style jsx>{`color: #4a4a4a;
        text-decoration: none;
        transition: 0.2s color;
        h2 {
          font-size: 1.5em;
          font-weight: 400;
        }
        p {
          color: lightgray;
        }
        li {
          padding: 5px 0;
          list-style-type: none;
        }
        a:hover {
          color: #50e3c2;
        }

        @media (max-width: 1200px) {h2 {
            font-size: 1.3em;
          }}`}</style>
    </li>;
};

export default ArticlePreview;
