import Link from "next/link";

const SourceLink = props => {
  const { source, href, icon } = props;
  return <div>
      <li>
        <Link href={`/${href}`}>
          <a>{icon} {source}</a>
        </Link>
      </li>
      <style jsx>{`
          color: #4A4A4A;
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 40px;
          a { text-decoration: none; }
          li { list-style-type: none; }
        }`}</style>
    </div>;
};

export default SourceLink;
