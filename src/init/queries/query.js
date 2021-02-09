module.exports.local = {
  articlesStandard: `
    {
    allBlogPost( sort: { order: DESC, fields: date } ) 
        {
            nodes {
                id
                excerpt
                title
                path
                date
                category
                tagline
                heroColor
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                category
            }
        }
    }
    `,
};
