import Link from "next/link";

const SourceLink = props => {
  const { name, id, icon } = props;
  return <div>
      <li>
        <Link href={`/source?id=${id}&name=${name}`}>
          <a>{icon} {name}</a>
        </Link>
      </li>
      <style jsx>{`
          color: #4A4A4A;
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 35px;
          a { text-decoration: none; }
          li { list-style-type: none; }
        }`}</style>
    </div>;
};

export default SourceLink;
