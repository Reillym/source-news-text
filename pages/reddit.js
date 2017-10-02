import React from "react";

import Layout from "../components/Layout";
import Feed from "../components/Feed";

import config from "../config.json";


const Reddit = props => {
  return (
    <Layout>
      <Feed source="Reddit" articles={props.data.articles} />
    </Layout>
  );
};

Reddit.getInitialProps = async function() {
  const res = await fetch(
    `https://newsapi.org/v1/articles?source=reddit-r-all&apiKey=${config.APIKEY}`
  );
  const data = await res.json();

  return { data };
};

export default Reddit;
