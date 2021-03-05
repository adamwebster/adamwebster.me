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
                    gatsbyImageData(width: 1200, height: 600, transformOptions: {cropFocus: CENTER, trim: 0})            
                  }
                }
                category
            }
        }
    }
    `,
};
