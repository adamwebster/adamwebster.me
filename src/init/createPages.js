const _ = require('lodash');
const path = require(`path`);

module.exports = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const categoryTemplate = path.resolve(`src/templates/blog/Category.tsx`);

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
