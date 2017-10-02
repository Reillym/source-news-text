import Head from "next/head";
import LogoTitle from "../components/LogoTitle";
import NewsSourceList from "../components/NewsSourceList";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => {
  return (
    <div>
      <Head>
        <title>Source News</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
        <link rel="stylesheet" href="../static/nprogress.css" />
        <style>{`
          * {
            box-sizing: border-box;
          }
          body, ul {
            margin: 0;
            padding: 0;
          }
          body {
            min-height: 100vh;
            min-width: 100vw;
            font-family: Roboto, Arial;
            font-size: 16px;
            color: #4A4A4A;
          }
        `}</style>
      </Head>
      <LogoTitle />
      <NewsSourceList />
      <style jsx>{`
        display: flex;
        flex-direction: column;
        box-flex: 0;
        min-width: 25%;
        min-height: 100vh;
        background-color: #50e3c2;
      `}</style>
    </div>
  );
};
