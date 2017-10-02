import ArticlePreviewList from "./ArticlePreviewList";
import FeedHeader from "./FeedHeader";

const Feed = props => (
  <div>
    <FeedHeader source={props.source} />
    <ArticlePreviewList articles={props.articles} />
    <style jsx>{`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 3% 6%; 
      box-flex: 0;
      overflow: scroll;
      width: 100%;
    `}</style>
  </div>
);

export default Feed;
