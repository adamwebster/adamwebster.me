---
title: 'Tabini'
path: '/tabini'
---

# Tabini for Gatsby

![](/images/tabini.jpg)

<BuyMeACoffee />

## Features

- Write articles using Markdown and MDX.
- Source content from Contentful
- Create new pages using Markdown and MDX.
- Custom content areas
  - Before the featured article list
  - Before the article list
  - Before the article content
  - Before the footer
- Built in social graph support so when you share your links it will add an image and an excerpt of the content.
- Multiple author support


<figure>


![](/images/tabini01.jpg)

</figure>



## Installation

After installing the theme by adding a reference to it in your `package.json` file add the following line to you plugins of you `gatsby-config.js`.

```js
plugins: [`@adamwebster/tabini`];
```

Then run `gatsby develop` this will copy the needed files into a directory in your src directory called **tabini**. In there there is everything you need to get started.

## Structure of the theme directory

```txt
- tabini
    |- articles
    |   |- images
    |   |- articlename.md
    |- assets
    |- authors
    |   |- avatars
    |   |- author.yaml
    |- content_area
        |- BeforeArticleContent.md
        |- BeforeArticleList.md
        |- BeforeFeaturedArticles.md
        |- BeforeFooter.md
    |- pages
        |- PageName.md
    |- sidebar_widgets
        |- WidgetName.md
    settings.json
```

## Theme Settings

In the `tabini` theme directory of your `src` directory there is a file called `settings.json`. In that file there are settings that are are for the theme.

By default it looks like the following.

```json
{
  "social": [
    { "url": "http://twitter.com" },
    { "url": "http://facebook.com" },
    { "url": "http://github.com" }
  ],
  "menuLinks": [
    {
      "name": "Home",
      "link": "/"
    },
    {
      "name": "About",
      "link": "/about"
    }
  ],
  "searchBox": {
    "placeholder": "Search for articles",
    "ariaLabel": "Search the site"
  }
}
```

### social

The **social** section of the settings defines what social icons show up in the footer. If you don't want to show anything in the footer for social links just set that to be `"social": []`,

### menuLinks

The **menuLinks** section of the settings defines the links that show up in the header of the theme. If you create a new page, for example `contact.md` you would need to add it to this section for it to show up in the menu.

```json
"menuLinks": [
  {
    "name": "Home",
    "link": "/"
  },
  {
    "name": "About",
    "link": "/about"
  },
  {
    "name": "Contact",
    "link": "/contact"
  }
],
```

If you would like no menu items to show up in the header then set it to be `"menuLinks": []`.

### searchBox

The **searchBox** section of the `settings.json` file sets the placeholder and the aria label attributes of the the input.

## Theme Options

### basePath

By default the base bath is set to `/` which means that the theme would be loaded and displayed on the root of your website. You can change this by setting the option of `basePath` when defining the theme in your `gatsby-config.js`.

The example below sets the `basePath` to `path` which will cause the theme and its content to be displayed at `localhost:8000/path` when you run `gatsby develop`.

```js
{
      resolve: `@adamwebster/tabini`,
      options: {
        basePath: "/path",
      },
},
```

### contentful

The `contentful` option defines if the content should come from **Contentful** or not. It can be set to `true` or `false` by default it is set to `false`.

```js
{
      resolve: `@adamwebster/tabini`,
      options: {
        contentful: true,
      },
},
```

For more information about using **Contentful** go to the **Contentful Intergration** of **Advanced Features**.

## Authors

**If you use the Contentful Intergration of the theme the authors will come from your Contentful space**

There must be a least one featured author this author will show up on the index page of the site.

To edit the authors open the `authors.yaml` file found in the `authors` directory which is found in the `tabini` directory of your `src` folder.

```yaml
- name: Author One
  bio: |
    This is where something about yourself would go.  Make it personal and make sure to mention what you are writing about. You can also add [links](http://adamwebster.me) using **Markdown formatting** and <a href='https://adamwebster.me'>html</a>
  profilePicture: avatars/profile.jpg
  featured: true
  social:
    - url: http://twitter.com
    - url: http://facebook.com
- name: Author Two
  bio: |
    This is where something about yourself would go.  Make it personal and make sure to mention what you are writing about. You can also add [links](http://adamwebster.me) using **Markdown formatting** and <a href='https://adamwebster.me'>html</a>
  featured: false
- name: Author Three
  bio: |
    This is where something about yourself would go.  Make it personal and make sure to mention what you are writing about. You can also add [links](http://adamwebster.me) using **Markdown formatting** and <a href='https://adamwebster.me'>html</a>
  featured: false
```

There are five sections for each author they are name, bio, profilePicture, featured, and social.

### name

The name of the author.

### bio

A little bit about the author will show up in the side bar of the home page if the author is featured and on the article page for each article that is written by the author.

### profilePicture

This will show up above the articles bio and must be placed in the `avatar` directory found the `authors` directory.

### featured

Only one author should be set to be the featured author. This author will show up on the index page in the sidebar.

## social

Sets what social networks will show up for the author underneath their bio.

## Articles

To create a new article add a file new markdown file to the `articles` directory found in `src/tabini`. For example `NewArticle.md`.

```md
---
title: Article 11
featured: false
author: Author One
featuredImage: images/denise-chan-pXmbsF70ulM-unsplash.jpg
category: Front-end Development
date: 2020-06-27
tags: Sample Tag, Another Tag
---

Lorem markdownum vitta ictibus, corpore color distentae morti, Aeas, colitur
rosave. Vim montesque gurgite quas dant levis exemploque tremulae quod si esse
non summae quid sis cumque non, genus.

> Ille laeva, quamvis: Icarus parvum crederet; variabant recanduit hanc provolvi
> dies, non per. Habet animasque reppulit patria et, volucris. Cum quidquid
> forti iubar et **anus in diros** Gyaros; nam viri Tethys, quiete quae arduus
> et a. Tuo Rhodon velantibus, terras equi eburno, en multis ambrosiae natura
> dolores per redituram, omnis dulcedine? Aequore epulis adgnovitque pinea
> fontis accipit angues in valens luminis consistere videt cum haberet turbine
> senili.
```

### Frontmatter fields

#### title

Sets the title of the article. The title is also used to generate part of the url for the article

#### featured

Sets if the article should be a featured article it will show on the top of the index page in the featured article section. There can be a maximum of five articles.

#### Author

Sets the author of the article. Must match an author that is set up in the `authors.yaml` file.

#### featuredImage

Image that will be displayed with the article content, as well as used when sharing to social networks.

#### category

The category of the article

#### date

The date the article was posted useing YYYY-MM-DD format.

#### tags

A comma seperated list of tags for the article.

The rest of the file is the content of the article written in **Markdown**.

### Setting an Article to be a draft

To set an article as a draft just put `draft:true` in the frontmatter of the **Markdown** file and it will not be visible when running the application.

## Pages

The pages are found in the `pages` directory found in the `src/tabini` directory. To create a new page just add a new file using markdown, for example `about.md`.
Then just add a title and the content. The title of your article will also generate the path for the page in kebab case.

```md
---
title: About
---

This is your about page. This page would explain what you write about and why you enjoy writing about it.

It is written in Markdown syntax show you can use the **Markdown Formatting** to update it.
```

## Changing the picture that displays when posting to social networks

In the `assets` directory of the `src/tabini` directory there is a file called `socialPic.jpg` just replace this file with your own.

The articles will choose the featured image if there is one to use as the image when sharing to social networks.

## Supported social networks/websites

The following are are list of social networks/websites the theme supports in the author's bio and the footer.

- Facebook
- Twitter
- Instagram
- Discord
- Reddit
- GitHub
- LinkedIn

If you would like to request additional social networks let [@adamwebster](https://twitter.com/adamwebster) know and he will look into adding it.

## Advanced Features

### Contentful Intergration

The first step is to set contentful option to true on the options for the theme in you `gatsby-config.js` file.

```js
{
      resolve: `@adamwebster/tabini`,
      options: {
        useContentful: true,
      },
},
```

You will also need to install the [`gatsby-source-contentful`](https://www.gatsbyjs.org/packages/gatsby-source-contentful/) plugin using **yarn** or **npm**
and set it up to point to your **Contentful** space. It is recommended for security to keep the `spaceId` and `accessToken` in your `.env` files.

```js
{
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
},
```

You will need to import the sample data and the content models from the `tabini-contentful.json` file using the `cli` tool from **Contentful**. For more information read the following article from **Contentful** about importing data: https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/.

Now that all of that is set up you can run `gatsby develop` and the theme will source the data from your **Contentful** space.

### Custom Content Areas

**DO NOT REMOVE THESE FILES**

There are four custom content areas for the theme they are found in the `content_areas` directory of the `tabini` theme directory. They are as follows:

- BeforeArticleContent.md - Shows before the main content of an article on the article pages.
- BeforeArticleList.md - Shows before the article list on the index, archive, category, and tag pages.
- BeforeFeaturedArticles.md - Shows before the featured article list on the index page.
- BeforeFooter.md - Shows on all pages before the footer.

A good use cae for these would be adding ads to your site or other content you would like to display.

If you do not want the custom area to show on your site set **enabled** to be false.

```md
---
title: 'Ad'
location: 'BeforeArticleContent'
enabled: true
---

<div style={{display:'flex', maxWidth: '100%', height: '90px', border: 'dashed 1px #666', fontSize: '2rem', justifyContent:'center', alignItems: 'center', margin: '0 auto'}}>
        Customizable Content Space
</div>
```

### Custom Widgets

You can also add custom widgets to the sidebar by creating a **Markdown** file in the `sidebar_widgets` directory of the `src/tabini` directory.

Give it a **title** and set what **order** you would like it to show up in the sidebar.

```md
---
title: 'Custom Widget'
order: 2
---

<div style={{display:'flex', maxWidth: '100%', height: '250px', border: 'dashed 1px #666', fontSize: '2rem', justifyContent:'center', alignItems: 'center', textAlign: 'center', lineHeight: '150%', margin: '0 auto'}}>
    Your own widget can go here
</div>
```

### MDX Support

The theme also supports **MDX** so you can import your own custom components in to the article, sidebar widgets, custom content areas, and pages **Markdown** files.

## Help

If you would like some help want to report an issue follow [@adamwebster](https://twitter.com/adamwebster) and send him a message and he will get back to you ASAP.
