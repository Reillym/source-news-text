import SourceLink from "./SourceLink";

const NewsSourceList = props => (
  <div>
    <ul>
      <SourceLink source="Google News" href="google" />
      <SourceLink source="Hacker News" href="hacker" />
      <SourceLink source="Reddit" href="reddit" />
    </ul>
    <style jsx>{`margin: 0 auto;`}</style>
  </div>
);

export default NewsSourceList;
