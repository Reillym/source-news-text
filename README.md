# Nextjs + React News Application

This is very early version of a News reading app project to help me learn Reactjs, Nextjs, Nodejs, and other cool web tech. Lots of features to add and refactoring to be done.

SETUP:

Create a config.json file in the main directory with an APIKEY property

```JSON
{
  APIKEY: "API KEY GOES HERE"
}
```

**TODO/IDEAS**

* Add Search/Filter functionality to the News Feed.
* Make the NewsSourceList dynamic by adding sources through the API
* Add a Search Input that searches the News Sources by category or name
* Add an Article Reader (Instead of going to the external link)
* Add in the option to stream in new headliners at the top
* Add meaingful animations
* Add SVG Icons
* Find a good color scheme
* Find the perfect font
* Optimize
* Better styling solution
* Make Responsive (SideBar slide-in-out)
* Make React Native Version?
* Choose what language the source is written in
* Add Keyboard Controls

Nextjs built in features:

* Automatic transpilation and bundling (with webpack and babel)
* Hot code reloading
* Server rendering and indexing of ./pages
* Static file serving. ./static/ is mapped to /static/
* +more

Original Goal: Quickly display news headlines from a variety of sources with text only.

Info:

Font: TBD

Current Color Scheme - #50e3c2 + #4A4A4A

https://newsapi.org/

https://github.com/zeit/next.js

https://reactjs.org/

https://nodejs.org/en/docs/

News Page Component Structures (names temporary)

* Layout
  * SideBar
  * props.children ( Feed )

* SideBar
  * LogoTitle
  * NewsSourceList
    * SourceLink

* Feed
  * FeedHeader
    * SearchInput (TODO)
  * ArticlePreviewList
    * ArticlePreview

Article Page (TODO)

* SideBar

* Article
  * ArticleDetails
  * ShareButtons
  * RelatedNews

How to create a new News Source (To be refactored or automated)

* Create a page in ./pages ex. ./pages/bloomberg.js
* Copy boilerplate code and paste into new page
* Create a new SourceLink in ./Components/NewsSourceList.js

```javascript
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Feed from "../components/Feed";

const NewsSource /* <- change this */ = props => {
  return (
    <Layout>
      <Feed source="change this" articles={props.data.articles} />
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const newsSource = 'google-news'; // <- change this
  const res = await fetch(
    `https://newsapi.org/v1/articles?source=${newsSource}&sortBy=top&apiKey=a48a8946373745789ebc77766ba71e7e`
  );
  const data = await res.json();

  return { data };
};

export default NewsSource /* <- change this */;
```