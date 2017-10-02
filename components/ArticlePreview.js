
const ArticlePreview = props => {
  return <li>
      <h2>
        <a target="_blank" href={props.url}>
          {props.title}
        </a>
        <em> {props.author}</em>
      </h2>
      {/* <p>{props.description}</p> */}
      <style jsx>{`
        color: #4a4a4a;
        text-decoration: none;
        h2 {
          font-size: 1.5em;
        }
        li {
          padding: 4px 0;
          list-style-type: none;
        }
        em {
          color: lightgray;
          font-weight: 400;
        }`}</style>
    </li>;
};

export default ArticlePreview;