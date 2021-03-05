const crypto = require(`crypto`);
const _ = require(`lodash`);
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);
module.exports = ({ node, actions, getNode, createNodeId }, themeOptions) => {
  const { createNode } = actions;
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent);
    if (fileNode.sourceInstanceName === 'blog-post') {
      const data = {
        title: node.frontmatter.title,
        author: node.frontmatter.author,
        featuredImage: node.frontmatter.featuredImage,
        date: node.frontmatter.date,
        slug: node.frontmatter.slug
          ? node.frontmatter.slug
          : _.kebabCase(node.frontmatter.title),
        path: `/blog/post/${
          node.frontmatter.slug
            ? node.frontmatter.slug
            : _.kebabCase(node.frontmatter.title)
        }`,
        category: node.frontmatter.category,
        draft: node.frontmatter.draft ? node.frontmatter.draft : false,
        layout: node.frontmatter.layout,
        defaultHeaderBorderColor: node.frontmatter.defaultHeaderBorderColor,
        heroColor: node.frontmatter.heroColor,
        showCoffeeButton: node.frontmatter.showCoffeeButton,
        tagline: node.frontmatter.tagline,
      };

      createNode({
        ...data,
        // Required fields.
        id: createNodeId(`${node.id} >>> BlogPostMDX`),
        parent: node.id,
        children: [],
        internal: {
          type: `BlogPostMdx`,
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(data))
            .digest(`hex`),
          content: JSON.stringify(data),
          description: `Blog Post Mdx`,
        },
      });
    }

    // Portfolio MDX
    if (fileNode.sourceInstanceName === 'portfolio-item') {
      const data = {
        title: node.frontmatter.title,
        author: node.frontmatter.author,
        featuredImage: node.frontmatter.featuredImage,
        date: node.frontmatter.date,
        slug: node.frontmatter.slug
          ? node.frontmatter.slug
          : _.kebabCase(node.frontmatter.title),
        path: `/portfolio/post/${
          node.frontmatter.slug
            ? node.frontmatter.slug
            : _.kebabCase(node.frontmatter.title)
        }`,
        category: node.frontmatter.category,
        draft: node.frontmatter.draft ? node.frontmatter.draft : false,
        featuredImageWidth: node.frontmatter.featuredImageWidth,
        technologyUsed: node.frontmatter.technologyUsed,
        software: node.frontmatter.software,
        description: node.frontmatter.description,
        bgImage: node.frontmatter.bgImage,
      };

      createNode({
        ...data,
        // Required fields.
        id: createNodeId(`${node.id} >>> PortFolioItemMdx`),
        parent: node.id,
        children: [],
        internal: {
          type: `PortfolioItemMdx`,
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(data))
            .digest(`hex`),
          content: JSON.stringify(data),
          description: `Portfolio Item MDX`,
        },
      });
    }
    // Service Item MDX
    if (fileNode.sourceInstanceName === 'service-item') {
      const data = {
        title: node.frontmatter.title,
        order: node.frontmatter.order,
        featuredImage: node.frontmatter.featuredImage,
      };

      createNode({
        ...data,
        // Required fields.
        id: createNodeId(`${node.id} >>> ServiceItemMDX`),
        parent: node.id,
        children: [],
        internal: {
          type: `ServiceItemMdx`,
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(data))
            .digest(`hex`),
          content: JSON.stringify(data),
          description: `Service Item MDX`,
        },
      });
    }
  }

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    if (fileNode.sourceInstanceName === 'blog-post') {
      const data = {
        title: node.frontmatter.title,
        author: node.frontmatter.author,
        featuredImage: node.frontmatter.featuredImage,
        date: node.frontmatter.date,
        slug: node.frontmatter.slug
          ? node.frontmatter.slug
          : _.kebabCase(node.frontmatter.title),
        path: `/blog/post/${
          node.frontmatter.slug
            ? node.frontmatter.slug
            : _.kebabCase(node.frontmatter.title)
        }`,
        category: node.frontmatter.category,
        draft: node.frontmatter.draft ? node.frontmatter.draft : false,
        layout: node.frontmatter.layout,
        defaultHeaderBorderColor: node.frontmatter.defaultHeaderBorderColor,
        heroColor: node.frontmatter.heroColor,
        showCoffeeButton: node.frontmatter.showCoffeeButton,
        tagline: node.frontmatter.tagline,
      };

      createNode({
        ...data,
        // Required fields.
        id: createNodeId(`${node.id} >>> BlogPost`),
        parent: node.id,
        children: [],
        internal: {
          type: `BlogPost`,
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(data))
            .digest(`hex`),
          content: JSON.stringify(data),
          description: `Blog Post`,
        },
      });
    }

    // Portfolio
    if (fileNode.sourceInstanceName === 'portfolio-item') {
      const data = {
        title: node.frontmatter.title,
        author: node.frontmatter.author,
        featuredImage: node.frontmatter.featuredImage,
        date: node.frontmatter.date,
        slug: node.frontmatter.slug
          ? node.frontmatter.slug
          : _.kebabCase(node.frontmatter.title),
        path: `/portfolio/post/${
          node.frontmatter.slug
            ? node.frontmatter.slug
            : _.kebabCase(node.frontmatter.title)
        }`,
        category: node.frontmatter.category,
        draft: node.frontmatter.draft ? node.frontmatter.draft : false,
        featuredImageWidth: node.frontmatter.featuredImageWidth,
        technologyUsed: node.frontmatter.technologyUsed,
        software: node.frontmatter.software,
        description: node.frontmatter.description,
        bgImage: node.frontmatter.bgImage,
      };

      createNode({
        ...data,
        // Required fields.
        id: createNodeId(`${node.id} >>> PortFolioItem`),
        parent: node.id,
        children: [],
        internal: {
          type: `PortfolioItem`,
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(data))
            .digest(`hex`),
          content: JSON.stringify(data),
          description: `Portfolio Item`,
        },
      });
    }

    // Service Item
    if (fileNode.sourceInstanceName === 'service-item') {
      const data = {
        title: node.frontmatter.title,
        order: node.frontmatter.order,
        featuredImage: node.frontmatter.featuredImage,
      };

      createNode({
        ...data,
        // Required fields.
        id: createNodeId(`${node.id} >>> ServiceItem`),
        parent: node.id,
        children: [],
        internal: {
          type: `ServiceItem`,
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(data))
            .digest(`hex`),
          content: JSON.stringify(data),
          description: `Service Item`,
        },
      });
    }
  }
};
