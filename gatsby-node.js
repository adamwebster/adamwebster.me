
exports.onCreateNode = require('./src/init/onCreateNode');
exports.createResolvers = require('./src/init/createResolvers');
exports.createPages = require('./src/init/createPages');

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
