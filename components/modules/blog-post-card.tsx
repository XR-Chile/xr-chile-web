'Use client'
import Link from 'next/link';
import { BlogPost } from '@/app/data/blogPosts';
import Image from 'next/image';
import { Card } from '../ui/card';

export const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <Card
      className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Link
        href={`/blog/${post.slug}`}>
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-500 mt-2">{post.excerpt}</p>
          <p className="text-sm text-gray-700 mt-4 font-semibold">{post.date}</p>
        </div>
      </Link>
    </Card>
  );
};
