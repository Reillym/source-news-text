# Nextjs + React News Application

This is very early version of a News reading app project to help me learn Reactjs, Nextjs, Nodejs, and other cool web tech. Lots of features to add and refactoring to be done.

SETUP:

Create a config.json file in the main directory and add your NewsAPI APIKEY

```JSON
{
  APIKEY: "API KEY GOES HERE"
}
```

## TODO/IDEAS

* ~~Make the NewsSourceList dynamic by reading from sources json data~~
* ~~Make source page dynamic by making use of queries~~
* Make Responsive (add SideBar slide-in-out animation)
* Add Search functionality to the News Feed
* Compile the most common headlines to the home page.
* Add filter/sort options for NewsSourceList (category dropdown(sports, tech) , name(search), country)
* Add a text-only Article Reader (read a summary of the article or maybe whole thing directly in app) (build/use a tool to go to the news article source and extract the news text)
* Change Sidebar color to match news source brand when news source is changed
* Add in the option to stream in new headliners at the top
* Add transition animations
* Add SVG Icons
* ~~Create/Add a temporary Logo (Maybe not to keep it text only)~~
* Find a good color scheme / Add a way for user to customize color theme
* Optimize (minimize API calls)
* Better component styling solution (styled components)
* Add Keyboard Controls
* Add a way to choose your news sources (Add or Delete from list) and save to a database or local storage
* Make React Native Version?

Nextjs built in features:

* Automatic transpilation and bundling (with webpack and babel)
* Hot code reloading
* Server rendering and indexing of ./pages
* Static file serving. ./static/ is mapped to /static/
* +more

Original Goal: Quickly display news headlines from a variety of sources with text only.

Info:

Font: Roboto

Current Color Scheme - #50e3c2 + #4A4A4A

https://newsapi.org/

https://github.com/zeit/next.js

https://reactjs.org/

https://nodejs.org/en/docs/

News Page Component Structures (names temporary)

* Layout
  * SideNar
  * Feed ( Props.Children )

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
