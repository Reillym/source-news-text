import ArticlePreviewList from "./ArticlePreviewList";
import FeedHeader from "./FeedHeader";

const Feed = props => (
  <div>
    <FeedHeader source={props.source} />
    <ArticlePreviewList articles={props.articles} />
    <style jsx>{`
      padding: 3% 5%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100vw;
      height: 100vh;
      overflow: auto;
    `}</style>
  </div>
);

export default Feed;
