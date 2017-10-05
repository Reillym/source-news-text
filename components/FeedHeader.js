import FilterInput from "./FilterInput";

const FeedHeader = props => (
  <div>
    <h1>{props.source} Feed</h1>
    <FilterInput />
    <style jsx>{`
      display: flex;
      margin-bottom: 80px;
      width: 100%;
      h1 {
        margin: 0 auto;
        padding: 0;
      }
      @media (max-width: 1200px) {
        h1 {
          font-size: 1.7em;
        }
      }
    `}</style>
  </div>
);

export default FeedHeader;
