import React from "react";
import ArticlePreviewList from "./ArticlePreviewList";
import FeedHeader from "./FeedHeader";

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FeedHeader source={this.props.source} />
        <ArticlePreviewList articles={this.props.articles} />
        <style jsx>{`
          padding: 5% 10%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100vw;
          height: 100vh;
          overflow: auto;
        `}</style>
      </div>
    );
  }
}

export default Feed;
