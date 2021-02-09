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
                      fluid {
                        aspectRatio
                        base64
                        originalImg
                        originalName
                        presentationHeight
                        presentationWidth
                        sizes
                        src
                        srcSet
                        srcSetWebp
                        srcWebp
                      }
                    }
                }
                category
            }
        }
    }
    `,
};
