import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function EthosPage() {
  const filePath = path.join(process.cwd(), "app", "ethos", "ethos.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);
  const html = marked(content);

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      
      <article
        className="
          prose 
          dark:prose-invert 
          max-w-none
          prose-headings:font-semibold
          prose-h1:text-3xl 
          prose-h2:text-2xl 
          prose-h3:text-xl
          prose-p:leading-relaxed
          prose-li:leading-relaxed
          prose-strong:text-white
          prose-a:text-blue-600 dark:prose-a:text-blue-400
        "
        dangerouslySetInnerHTML={{ __html: html }}
      />
    
    </main>
  );
}
