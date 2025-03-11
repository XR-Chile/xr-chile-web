import { notFound } from 'next/navigation';
import { blogPosts } from '@/app/data/blogPosts';
import React from 'react';
import Image from 'next/image';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Desenvolver la promesa `params` usando React.use
  const { slug } = React.use(params);

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <section className="p-8 w-full flex flex-col items-center">
      <div className='text-center'>
        <h1 className="text-6xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mt-2 font-bold mb-12">{post.date}</p>
      </div>
      <div className="w-full max-w-7xl h-64 md:h-96 lg:h-128 relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="prose mt-6 max-w-3xl w-full">
        <p>{post.content}</p>
      </div>
    </section>
  );
}
