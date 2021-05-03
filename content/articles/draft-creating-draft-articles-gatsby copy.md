---
title: Creating Draft Articles in Gatsby
tagline: Including the Method I Use
date: '2020-07-05'
featured: true
slug: 'creating-draft-articles-gatsby'
category: 'Front-end development'
featuredImage: images/gatsby.jpg
tags: ['Gatsby', 'React', 'Javascript']
heroColor: '#663399'
draft: true
---

There are many methods in **Gatsby** of setting articles to be a draft. I thought I would share a few of the ways that I have done it and why I settled on the one I am currently using.

<SectionHeader>Method 1 - In the Frontmatter</SectionHeader>

The **frontmatter** of your markdown file is a place put article information such as the title and the date of the article. For this method you would add another section called *draft* that would be set to true or false if the article is a draft or not.

```md render=true
---
title: Title of the Article 
draft: false
<!-- ...rest of you Frontmatter -->
---
```

Then in your **graphql** query you would filter to only get the posts where the frontmatter value of draft is equal to false.

```jsx
graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { draft: { eq: false } }
        fields: { sourceInstanceName: { eq: "article" } }
      }
    ) {
      edges {
        node {
           // ...
        }
      }
    }
  }
`;
```

One of the issues I found with this method is I wanted the drafts to show up in the list of articles while running in development mode but not in the production build of the site. To achieve this I had to filter out the draft posts after each **graphql** query when it was being built for production, which in my mind was not the most eloquent solution to the problem. 
 
<SectionHeader>Method 2 - Part of the File Name</SectionHeader>

One way to fix the issue of method one is to prefix your markdown file with *draft-*, for example `draft-<title-of-article>.md` and excluded it in the `gatsby-source-filesystem` plugin that is found in the `gatsby-config.js` file when you build for production.


```js 
module.exports = {
  siteMetadata: {
   // ...
  },
  plugins: [
    // ...
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `article`,
          path: `${__dirname}/<directory where content is>`,
          ignore: process.env.NODE_ENV === `production` && [`**/draft-*`],
        },
    },
    // ...
  ]
}
```

This method is a better solution in my mind as I don't need to remember to filter out the drafts after each  **graphql** query for the production build.

<SectionHeader>Method 3 - In a Drafts Folder</SectionHeader>

Another way similar to method 2 is to put your drafts into folder called *drafts* and excluded it in the `gatsby-source-filesystem` plugin that is found in the `gatsby-config.js` file when you build for production. 

```js 
module.exports = {
  siteMetadata: {
   // ...
  },
  plugins: [
    // ...
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `article`,
          path: `${__dirname}/<directory where content is>`,
          ignore: process.env.NODE_ENV === `production` && [`**/drafts/*`],
        },
    },
    // ...
  ]
}
```

One of the issues I have with this method is that if you have images in your **Markdown** that have a relative path and you move the file then you have to update all of your image sources to the new path.

<SectionHeader>What I Am Using</SectionHeader>

Currently I am using **method 2** as it leads to the least amount of work I have to do. When I am ready for the article to be published and included in the build all I have to do is remove the `draft-` prefix from the name of the file.

If you use a method that is better I would be happy to learn what it is, just follow me on twitter [@adamwebster](https://twitter.com/adamwebster) and message me wih your solution.

<BuyMeACoffeeWidget />