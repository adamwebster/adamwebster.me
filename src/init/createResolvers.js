const remark = require('remark');
const stripMarkdown = require('strip-markdown');
const mdx = require('remark-mdx');
const strip = require('remark-mdx-to-plain-text');
const frontmatter = require('remark-frontmatter');

// helper that grabs the mdx resolver when given a string fieldname
const markdownResolverPassthrough = fieldName => async (
  source,
  arguments_,
  context,
  info
) => {
  const type = info.schema.getType(`MarkdownRemark`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, arguments_, context, {
    fieldName,
  });

  return result;
};

const mdxResolverPassthrough = fieldName => async (
  source,
  arguments_,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, arguments_, context, {
    fieldName,
  });

  return result;
};

module.exports = ({ createResolvers }, themeOptions) => {
  let contentPath = 'content/blog';

  const resolversFusedArticle = {
    BlogPost: {
      html: {
        type: 'String',
        resolve: markdownResolverPassthrough(`html`),
      },
      timeToRead: {
        type: 'Int',
        resolve: markdownResolverPassthrough(`timeToRead`),
      },
      excerpt: {
        type: 'String',
        resolve: async (source, args, context, info) => {
          results = await context.nodeModel.runQuery({
            query: {
              filter: { id: { eq: source.parent } },
            },
            type: 'MarkdownRemark',
            firstOnly: true,
          });
          const text = remark()
            .use(stripMarkdown)
            .use(mdx)
            .use(strip)
            .processSync(results.rawMarkdownBody);
          const excerptLength = 140; // Hard coded excerpt length
          return (
            String(text)
              .replace(new RegExp('<[^>]*>', 'g'), '')
              .substring(0, excerptLength) + '...'
          );
        },
      },
    },
  };

  createResolvers(resolversFusedArticle);

  const resolversPortfolioItem = {
    PortfolioItem: {
      html: {
        type: 'String',
        resolve: markdownResolverPassthrough(`html`),
      },
      timeToRead: {
        type: 'Int',
        resolve: markdownResolverPassthrough(`timeToRead`),
      },
      excerpt: {
        type: 'String',
        resolve: async (source, args, context, info) => {
          results = await context.nodeModel.runQuery({
            query: {
              filter: { id: { eq: source.parent } },
            },
            type: 'MarkdownRemark',
            firstOnly: true,
          });
          const text = remark()
            .use(stripMarkdown)
            .use(mdx)
            .use(strip)
            .processSync(results.rawMarkdownBody);
          const excerptLength = 140; // Hard coded excerpt length
          return (
            String(text)
              .replace(new RegExp('<[^>]*>', 'g'), '')
              .substring(0, excerptLength) + '...'
          );
        },
      },
    },
  };

  createResolvers(resolversPortfolioItem);

  const resolversFusedArticleMDX = {
    BlogPostMdx: {
      body: {
        type: 'String',
        resolve: mdxResolverPassthrough(`body`),
      },
      timeToRead: {
        type: 'Int',
        resolve: mdxResolverPassthrough(`timeToRead`),
      },
      excerpt: {
        type: 'String',
        resolve: async (source, args, context, info) => {
          results = await context.nodeModel.runQuery({
            query: {
              filter: { id: { eq: source.parent } },
            },
            type: 'Mdx',
            firstOnly: true,
          });
          const text = remark()
            .use(stripMarkdown)
            .use(mdx)
            .use(frontmatter)
            .use(strip)
            .processSync(results.rawBody);
          const excerptLength = 40; // Hard coded excerpt length
          return String(text).substring(0, excerptLength) + '...';
        },
      },
    },
  };

  createResolvers(resolversFusedArticleMDX);

  const portfolioItemMDX = {
    PortfolioItemMdx: {
      body: {
        type: 'String',
        resolve: mdxResolverPassthrough(`body`),
      },
      timeToRead: {
        type: 'Int',
        resolve: mdxResolverPassthrough(`timeToRead`),
      },
      excerpt: {
        type: 'String',
        resolve: async (source, args, context, info) => {
          results = await context.nodeModel.runQuery({
            query: {
              filter: { id: { eq: source.parent } },
            },
            type: 'Mdx',
            firstOnly: true,
          });
          const text = remark()
            .use(stripMarkdown)
            .use(mdx)
            .use(frontmatter)
            .use(strip)
            .processSync(results.rawBody);
          const excerptLength = 40; // Hard coded excerpt length
          return String(text).substring(0, excerptLength) + '...';
        },
      },
    },
  };

  createResolvers(portfolioItemMDX);
};
