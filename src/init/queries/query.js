module.exports.local = {
  articles: `
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
                draft
                heroColor
                featuredImage {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)            
                  }
                }
                category
            }
        }
    }
    `,
};
