import Link from "next/link";

const SourceLink = props => {
  const { name, id, icon } = props;
  return <div>
      <li>
        <Link prefetch href={{pathname: '/source', query: {id, name } }}>
          <a>
            {icon} {name}
          </a>
        </Link>
      </li>
      <style jsx>{`
        margin: 15px auto;
        padding: 0 5px;
        color: #4a4a4a;
        font-size: 1.15em;
        font-weight: 400;
        a {
          text-decoration: none;
        }
        li {
          list-style-type: none;
        }
        `}</style>
    </div>;
};

export default SourceLink;
