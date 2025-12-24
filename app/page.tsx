// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">ML Mondays</h1>

      {/* two hero images side-by-side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Image
          src="/tech.jpg"
          alt="AI cyber brain"
          width={800}
          height={500}
          className="rounded-lg shadow-md object-cover w-full h-[260px] md:h-[300px]"
        />
        <Image
          src="/tech2.png"
          alt="NeuralHive visualization"
          width={800}
          height={500}
          className="rounded-lg shadow-md object-cover w-full h-[260px] md:h-[300px]"
        />
      </div>

      {/* posts list */}
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-lg border bg-white/70 dark:bg-neutral-900/70 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="px-6 py-5">
              <h2 className="text-lg font-semibold mb-1">
                <Link href={`/posts/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-xs text-neutral-500 mb-3">{post.date}</p>
              <Link
                href={`/posts/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 text-sm underline-link"
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
