---
slug: 'rss-reader'
date: '2020-01-09'
title: 'RSS Reader'
category: 'Front-end Development'
featuredImage: 'images/RSSReader.png'
draft: false
technologyUsed: 'React, Javascript, HTML, CSS, Styled Components'
description: 'I read a lot of RSS feeds and wanted to try and created a web version of an **RSS Reader** using **React**.'
bgImage: 'images/krisztian-tabori-nZGNVOvEYio-unsplash.jpg'
demo: '[RSS Reader](https://examples.adamwebster.me/rss)'
repo: '[RSS Reader](https://github.com/adamwebster/react-tests/tree/master/src/pages/RSSReader)'
---
import SectionHeader from '../../src/components/SectionHeader/SectionHeader';

<SectionHeader>Project Information</SectionHeader>

**Technologies Used**: React, Javascript, HTML, CSS, Styled Components<br />
**Demo:** [RSS Reader Demo](https://examples.adamwebster.me/rss) <br/>
**GitHub Repo**: [RSS Reader Repo](https://github.com/adamwebster/react-tests/tree/master/src/pages/RSSReader)

<SectionHeader>Description</SectionHeader>

I read a lot of RSS feeds and wanted to try and created a web version of an **RSS Reader** using **React**.

<SectionHeader>How it Works</SectionHeader>

When the application first loads it displays the feed that is set by default. To load the feed JSON I am using the service [RSS2JSON](https://api.rss2json.com/). From the JSON that is returned from that service I receive the feed name, image, and a list of feed items which I store in the state of the component using the **useState** hook, that information is then used in the UI of the application.

To change the feed that is loaded the user would click on the hamburger menu which causes the list of RSS items to be moved to the right.  This is done with CSS transform transition animations. From that menu they would choose a new feed to read which would then send an update to the global state of the application, which uses the **Context API** from **React**, to say that it is loading and a loading screen will display until the feed is loaded.

To mark an item as read the user would either click on the article summary to read the full article which would automatically mark the article as read or they can click the blue circle beside the article's title. The list of read articles is currently being stored in the local storage of the browser, ideally this would be stored in a database such as <strong>MongoDB</strong>.

The user can also choose to mark all of the articles as read or unread by clicking the respective buttons on the top of the list.

The user can also choose to filter the list of articles by All, Read or Unread.

<SectionHeader>Images</SectionHeader>


<figure>

![Image of RSS Reader article page](/images/RSSReader2.png)

<figcaption>RSS Reader Article Page</figcaption>
</figure>

<figure>

![Image of RSS Reader menu page](/images/RSSReader3.png)
<figcaption>RSS Reader Menu Page</figcaption>

</figure>