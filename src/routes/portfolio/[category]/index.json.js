import { getPosts } from "../_posts.js";

let contents;

export function get(req, res) {
  if (!contents || process.env.NODE_ENV !== "production") {
    const posts = getPosts().map((post) => ({
      title: post.metadata.title,
      slug: post.slug.postSlug,
      path: post.slug.postPath,
      category: post.slug.postCategory,
      postCategoryFormatted: post.slug.postCategoryFormatted,
      image: post.metadata.image,
    }));

    contents = JSON.stringify(posts);
  }

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
