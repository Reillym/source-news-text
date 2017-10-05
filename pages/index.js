import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Feed from "../components/Feed";

import config from '../config.json';


const Index = props => {
  return (
    <Layout>
      <Feed source="TechCrunch" articles={props.data.articles} />
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch(
    `https://newsapi.org/v1/articles?source=techcrunch&apiKey=${config.APIKEY}`
  );
  const data = await res.json();

  return { data };
};

export default Index;
