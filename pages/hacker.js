import Layout from "../components/Layout";
import Feed from "../components/Feed";

import config from '../config.json';

const Hacker = props => {
  return (
    <Layout>
      <Feed source="Hacker News" articles={props.data.articles} />
    </Layout>
  );
};

Hacker.getInitialProps = async function() {
  const res = await fetch(
    `https://newsapi.org/v1/articles?source=hacker-news&apiKey=${config.APIKEY}`
  );
  const data = await res.json();

  return { data };
};

export default Hacker;
