import fs from "fs";
import path from "path";
import marked from "marked";
import glob from "glob";

export function getPosts() {
  //   const slugs = fs
  //     .readdirSync("content/BlogPosts")
  //     .filter((file) => path.extname(file) === ".md")
  //     .map((file) => file.slice(0, -3));

  const slugs = glob.sync("content/BlogPosts/**/*.md").map((file) => {
    var parts = file.split("/");
    console.log(parts[2].toLowerCase().replace(/\s+/g, "-"));
    return {
      postSlug: file.slice(0, -3).substring(file.lastIndexOf("/") + 1),
      postPath: file.slice(0, -3).substr(0, file.lastIndexOf("/")),
      postCategory: parts[2],
      postCategoryFormatted: parts[2].toLowerCase().replace(/\s+/g, "-"),
    };
  });

  // const slugs = glob("content/**/*.md", function (er, files) {
  // 	// files is an array of filenames.
  // 	// If the `nonull` option is set, and nothing
  // 	// was found, then files is ["**/*.js"]
  // 	// er is an error object or null.
  // 	const test = files.map(file => file.slice(0, -3));
  // 	console.log(test)

  //   })

  // console.log(slugs);
  return slugs.map(getPost).sort((a, b) => {
    return a.metadata.pubdate < b.metadata.pubdate ? 1 : -1;
  });
}

export function getPost(slug) {
  const file = `content/BlogPosts/${slug.postCategory}/${slug.postSlug}.md`;
  if (!fs.existsSync(file)) return null;
  // console.log(slug);

  const markdown = fs.readFileSync(file, "utf-8");

  const { content, metadata } = process_markdown(markdown);
  const date = new Date(`${metadata.pubdate} EDT`); // cheeky hack
  metadata.dateString = date.toDateString();
  const html = marked(content);
  return {
    slug,
    metadata,
    html,
  };
}

function process_markdown(markdown) {
  const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
  const frontMatter = match[1];
  const content = markdown.slice(match[0].length);

  const metadata = {};
  frontMatter.split("\n").forEach((pair) => {
    const colonIndex = pair.indexOf(":");
    metadata[pair.slice(0, colonIndex).trim()] = pair
      .slice(colonIndex + 1)
      .trim();
  });

  return { metadata, content };
}
