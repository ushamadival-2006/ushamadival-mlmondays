import { getPostBySlug, getHeadingsFromMarkdown } from "@/lib/posts";
import { marked } from "marked";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const { content, data } = getPostBySlug(slug);

  // Extract headings for Table of Contents
  const headings = getHeadingsFromMarkdown(content);

  // Configure marked to add IDs to headings (safe for new versions)
  marked.use({
    renderer: {
      heading(token) {
        const text =
          typeof token === "string"
            ? token
            : token.text || token.raw || "";

        const level = token.depth ?? 2;

        const id = text
          .toLowerCase()
          .replace(/[^\w]+/g, "-")
          .replace(/(^-|-$)/g, "");

        return `<h${level} id="${id}">${text}</h${level}>`;
      },
    },
  });

  const html = marked(content);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10">

      {/* MAIN CONTENT */}
      <article className="prose dark:prose-invert max-w-none">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      {/* TABLE OF CONTENTS */}
      <aside
  className="
    hidden lg:block
    sticky top-24
    h-[calc(100vh-6rem)]
    overflow-y-auto
    no-scrollbar
  "
>

  <div className="border-l pl-6 max-h-[32rem]">

    <h3 className="text-sm font-semibold mb-4">
      Table of contents
    </h3>

    <ul className="space-y-2 text-sm">
      {headings.map((h) => (
        <li
          key={h.id}
          className={h.level === 3 ? "ml-4 text-sm" : "font-medium"}
        >
          <a
            href={`#${h.id}`}
            className="
              text-gray-800 dark:text-gray-200
              underline underline-offset-4
              hover:text-blue-600 dark:hover:text-blue-400
              transition
              cursor-pointer
            "
          >
            {h.text}
          </a>
        </li>
      ))}
    </ul>

  </div>
</aside>

    </div>
  );
}
