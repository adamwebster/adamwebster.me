const path = require(`path`)
const _ = require("lodash")

// exports.sourceNodes = ({ actions, schema }) => {
//     const { createTypes } = actions

//     // Creates a default value for tags so that it can not be added to the frontmatter
//     const typeDefs = [
//         "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
//         schema.buildObjectType({
//             name: "Frontmatter",
//             fields: {
//                 tags: {
//                     type: "[String!]",
//                     resolve(source, args, context, info) {
//                         // For a more generic solution, we could pick the field value from
//                         // `source[info.fieldName]`
//                         const { tags } = source
//                         if (source.tags == null || (Array.isArray(tags) && !tags.length)) {
//                             return null
//                         }
//                         return tags
//                     },
//                 },
//             },
//         }),
//     ]

//     const typeDefsMdx = [
//         "type Mdx implements Node { frontmatter: Frontmatter }",
//         schema.buildObjectType({
//             name: "Frontmatter",
//             fields: {
//                 tags: {
//                     type: "[String!]",
//                     resolve(source, args, context, info) {
//                         // For a more generic solution, we could pick the field value from
//                         // `source[info.fieldName]`
//                         const { tags } = source
//                         if (source.tags == null || (Array.isArray(tags) && !tags.length)) {
//                             return null
//                         }
//                         return tags
//                     },
//                 },
//             },
//         }),
//     ]
//     createTypes(typeDefs)
//     createTypes(typeDefsMdx)

// }
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const fileNode = getNode(node.parent);
        createNodeField({
            node,
            name: 'sourceInstanceName',
            value: fileNode.sourceInstanceName
        });
    }

    if (node.internal.type === 'Mdx') {
        const fileNode = getNode(node.parent);
        createNodeField({
            node,
            name: 'sourceInstanceName',
            value: fileNode.sourceInstanceName
        });
    }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/BlogPost.tsx`)
    const portfolioItemTemplate = path.resolve(`src/templates/PortfolioPost.tsx`)
    const categoryTemplate = path.resolve(`src/templates/blog/Category.tsx`)
    // const tagTemplate = path.resolve(`src/pages/Blog/tag.js`)

    const result = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              category
              tags
            }
            fields {
              sourceInstanceName
            }
          }
        }
      }
    }
  `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const posts = result.data.allMdx.edges.filter(item => item.node.fields.sourceInstanceName === 'blog-post');
    const postsPerPage = 9;
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/BlogPage.tsx"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })

    const portfolioPosts = result.data.allMdx.edges.filter(item => item.node.fields.sourceInstanceName === 'portfolio-item');
    const portfolioPostsPerPage = 9;
    const numPagesPort = Math.ceil(portfolioPosts.length / portfolioPostsPerPage)
    Array.from({ length: numPagesPort }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
            component: path.resolve("./src/templates/PortfolioPage.tsx"),
            context: {
                limit: portfolioPostsPerPage,
                skip: i * portfolioPostsPerPage,
                numPagesPort,
                currentPage: i + 1,
            },
        })
    })

    result.data.allMdx.edges.forEach(({ node }) => {
        if (node.fields.sourceInstanceName === 'blog-post') {
            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {}, // additional data can be passed via context
            })
            if (node.frontmatter.category) {
                createPage({
                    path: `/blog/${_.kebabCase(node.frontmatter.category)}/`,
                    component: categoryTemplate,
                    context: {
                        category: node.frontmatter.category
                    }

                })

            }
            // if (node.frontmatter.tags) {
            //     node.frontmatter.tags.forEach(tag => {
            //         createPage({
            //             path: `/blog/tag/${_.kebabCase(tag)}/`,
            //             component: tagTemplate,
            //             context: {
            //                 tag: tag,
            //             },
            //         })
            //     })
            // }
        }
        if (node.fields.sourceInstanceName === 'portfolio-item') {
            createPage({
                path: node.frontmatter.path,
                component: portfolioItemTemplate,
                context: {}, // additional data can be passed via context
            })
        }
    })
}