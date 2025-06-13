import { blogPosts } from "@/lib/data/blogPosts";
import { BlogPostCard } from "@/components/modules/blog-post-card";

const titles = "text-6xl font-bold text-center p-4 ";
const background = "shadow-md bg-white "

export default function BlogPage() {
  return (
    <main>
      <h1 className={titles + background + "mb-20 mt-16"}>Blog</h1>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 p-8">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={`${post.slug}-${index}`} post={post} />
        ))}
      </div>
    </main>
  );
}
