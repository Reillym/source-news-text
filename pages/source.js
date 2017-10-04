import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Feed from "../components/Feed";

import config from "../config.json";

const Source = props => {
  return (
    <Layout>
      <Feed source={props.url.query.name} articles={props.data.articles} />
    </Layout>
  );
};

Source.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://newsapi.org/v1/articles?source=${id}&apiKey=${config.APIKEY}`
  );
  const data = await res.json();

  return { data };
};

export default Source;