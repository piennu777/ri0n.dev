import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import { getAllPosts } from '../../../lib/posts';
import { Post } from '../../../types/post';

import '@/assets/css/hello.css';
import '@/assets/css/profile.css';
import '@/assets/css/blog/blog.css';
import '@/assets/css/projects.css';

import blogheader from "@/assets/images/wallpaperbetter.com_1920x1080 (4).jpg";

interface BlogProps {
  posts: Post[];
}

export default async function Blog() {
  const posts = await getAllPosts();
  return (
    <>
      <Head>
        <title>Blog / Rion</title>
      </Head>

      <main>
        <section className="blog" id="Blog">
          <div className="articles">
            {posts && posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="article">
                    <Image
                      src={blogheader}
                      width={1920}
                      height={1080}
                      alt=""
                    />
                    <div className="content">
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
