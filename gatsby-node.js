const path = require(`path`);
const _ = require('lodash');

exports.onCreateNode = require('./src/init/onCreateNode');
exports.createResolvers = require('./src/init/createResolvers');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/BlogPost.tsx`);
  const portfolioItemTemplate = path.resolve(`src/templates/PortfolioPost.tsx`);
  const categoryTemplate = path.resolve(`src/templates/blog/Category.tsx`);
  const pageTemplate = path.resolve(`src/templates/PageTemplate.tsx`);

  const portfolioCategoryTemplate = path.resolve(
    `src/templates/portfolio/Category.tsx`
  );

  // const tagTemplate = path.resolve(`src/pages/Blog/tag.js`)

  const resultArticles = await graphql(`
    {
      allBlogPost(sort: { order: DESC, fields: date }, limit: 1000) {
        nodes {
          path
          category
        }
      }
    }
  `);

  const resultsPortfolio = await graphql(`
    {
      allPortfolioItem(sort: { order: DESC, fields: date }, limit: 1000) {
        nodes {
          path
          category
        }
      }
    }
  `);
  // Handle errors
  if (resultArticles.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = resultArticles.data.allBlogPost.nodes;
  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/BlogPage.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  posts.map(node => {
    if (node.category) {
      createPage({
        path: `/blog/${_.kebabCase(node.category)}/`,
        component: categoryTemplate,
        context: {
          category: node.category,
        },
      });
    }
  });

  const portfolioPosts = resultsPortfolio.data.allPortfolioItem.nodes;
  const portfolioPostsPerPage = 9;
  const numPagesPort = Math.ceil(portfolioPosts.length / portfolioPostsPerPage);
  Array.from({ length: numPagesPort }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
      component: path.resolve('./src/templates/PortfolioPage.tsx'),
      context: {
        limit: portfolioPostsPerPage,
        skip: i * portfolioPostsPerPage,
        numPagesPort,
        currentPage: i + 1,
      },
    });
  });

  portfolioPosts.map(node => {
    if (node.category) {
      createPage({
        path: `/portfolio/${_.kebabCase(node.category)}/`,
        component: portfolioCategoryTemplate,
        context: {
          category: node.category,
        },
      });
    }
  });
};

// This fixes an issue when loading a package using npm/yarn link with two versions of react being loaded
exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: require.resolve('react'),
        'styled-components': require.resolve('styled-components'),
      },
    },
  });
};
