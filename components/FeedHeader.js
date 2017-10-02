import SearchInput from "./SearchInput";

const FeedHeader = props => (
  <div>
    <h1>{props.source} Feed</h1>
    <SearchInput />
    <style jsx>{`
      display: flex;
      margin-bottom: 4%;
      width: 100%;
      h1 {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default FeedHeader;
