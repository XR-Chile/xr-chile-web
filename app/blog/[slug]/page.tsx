import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blogPosts";
import Image from "next/image";

const background = "shadow-md bg-white ";

export async function generateStaticParams() {
  const uniqueSlugs = Array.from(new Set(blogPosts.map((post) => post.slug)));

  return uniqueSlugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <div
        className={
          background + "text-center sticky top-0 z-10 mb-12 border-b-2"
        }
      >
        <h1 className="text-6xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mt-2 font-bold">{post.date}</p>
      </div>
      <div
        className={
          background +
          "w-full max-w-7xl mx-auto gap-6 mb-20 p-8 grid grid-rows-2"
        }
      >
        <div className="h-64 md:h-96 lg:h-128 relative z-0">
          <Image src={post.image} alt={post.title} fill objectFit="cover" />
        </div>
        <p>{post.content}</p>
      </div>
    </main>
  );
}
