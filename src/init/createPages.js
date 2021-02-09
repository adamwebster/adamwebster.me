const _ = require('lodash');
const path = require(`path`);
const query = require('./queries/query');

module.exports = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const categoryTemplate = path.resolve(`src/templates/blog/Category.tsx`);
  const portfolioCategoryTemplate = path.resolve(
    `src/templates/portfolio/Category.tsx`
  );

  const dataSources = {
    local: {
      allArticles: [],
    },
  };

  let allArticlesQuery = await graphql(query.local.articles);
  dataSources.local.allArticles = allArticlesQuery.data.allBlogPost.nodes;
  allArticles =
    process.env.NODE_ENV === 'production'
      ? dataSources.local.allArticles.filter(article => !article.draft)
      : dataSources.local.allArticles;

  const posts = allArticles;
  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve('../templates/BlogPage.tsx'),
      context: {
        articles: allArticles.slice(i * postsPerPage, postsPerPage * (i + 1)),
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
