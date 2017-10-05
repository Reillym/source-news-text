import React from "react";
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

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow(e) {
    e.preventDefault();
    this.setState({ toggleShow: !this.state.toggleShow });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Source News</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/static/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:700,400"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="../static/global.css" />
        </Head>
        <LogoTitle />
        <NewsSourceList />
        <style jsx>{`
          display: flex;
          flex-direction: column;
          box-flex: 0;
          height: 100vh;
          min-width: 25%;
          overflow: auto;
          background-color: #50e3c2;
          @media (max-width: 1000px) {
            display: none;
          }
          transition: 1s all;
        `}</style>
      </div>
    );
  }
}

export default SideNav;
