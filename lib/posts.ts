import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getHeadings(content: string) {
  const headingRegex = /^(##|###)\s+(.*)$/gm;
  const headings = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1].length, // 2 or 3
      text: match[2],
      id: match[2]
        .toLowerCase()
        .replace(/[^\w]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    });
  }

  return headings;
}


const postsDirectory = path.join(process.cwd(), "app", "posts");

export function getAllPosts() {
  console.log("📁 Reading directory:", postsDirectory);

  try {
    const files = fs.readdirSync(postsDirectory);
    console.log("📄 Files found:", files);

    const markdownFiles = files.filter((file) => file.endsWith(".md"));
    console.log("📝 Markdown files:", markdownFiles);

    return markdownFiles.map((file) => {
      const slug = file.replace(".md", "");
      const fullPath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
      };
    });
  } catch (error) {
    console.error("❌ ERROR inside getAllPosts:", error);
    throw error; // this is why page becomes 404
  }
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  return matter(fileContent);
}


export function getHeadingsFromMarkdown(content: string) {
  const regex = /^(##|###)\s+(.*)$/gm;
  const headings = [];

  let match;
  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w]+/g, "-")
      .replace(/(^-|-$)/g, "");

    headings.push({ level, text, id });
  }

  return headings;
}
