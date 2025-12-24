import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function PostsListPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-10 dark:text-white">All Posts</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="
              rounded-lg 
              border 
              bg-white/90 
              dark:bg-neutral-900/80 
              shadow-sm 
              hover:shadow-lg 
              transition-all 
              border-neutral-200
              dark:border-neutral-700
            "
          >
            <div className="px-6 py-6">

              {/* Post Title */}
              <h2 className="text-lg font-semibold mb-2">
                <Link
                  href={`/posts/${post.slug}`}
                  className="
                    hover:underline 
                    text-black 
                    dark:text-white
                  "
                >
                  {post.title}
                </Link>
              </h2>

              {/* Date */}
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
                {post.date}
              </p>

              {/* Read More */}
              <Link
                href={`/posts/${post.slug}`}
                className="
                  text-blue-600 
                  dark:text-blue-400 
                  text-sm 
                  font-medium 
                  hover:underline
                "
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
