import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import { getAllPosts } from '../../../lib/posts';
import { Post } from '../../../types/post';
import Blog from '../../styles/blog/blog.module.css';
import blogCover from "@/assets/images/blogCover.png"

export const metadata = {
  title: 'Blog',
  description: 'This is a blog maintained by Rion. We are posting at a leisurely pace.',
}

interface BlogProps {
  posts: Post[];
}

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <main>
        <section className={Blog.blog} id="Blog">
          <div className={Blog.container}>
            {posts && posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div className={Blog.contents}>
                    <Image
                      src={blogCover}
                      width={1920}
                      height={1080}
                      alt=""
                    />
                    <div className={Blog.summary}>
                      <h2>{post.title}</h2>
                      <p>{post.description}</p>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
