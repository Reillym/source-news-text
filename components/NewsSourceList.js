import SourceLink from "./SourceLink";
import sourcesAPI from "../sources.min.json";

const NewsSourceList = props => (
  <div>
    <ul>
      {sourcesAPI.sources.map(source => (
        <SourceLink key={source.id} name={source.name} id={source.id} />
      ))}
    </ul>
    <style jsx>{`
      margin: 0 auto;
    `}</style>
  </div>
);

export default NewsSourceList;
