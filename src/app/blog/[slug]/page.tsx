import { Metadata } from 'next'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import { getPostBySlug, getAllPosts } from '../../../../lib/posts'
import { formatDate } from '../../../../lib/dateFormat'
import Styles from '../../../styles/blog/post.module.css';

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return {
            title: 'Post Not Found / Rion',
            description: 'This post is not available.',
            openGraph: {
                title: 'Post Not Found',
                description: 'This post is not available.',
                url: '',
                siteName: 'Rion Portfolio',
                locale: 'ja-JP',
                type: 'website',
                images: '/ogp.webp',
            },
            icons: '/favicon.ico',
            verification: {
                google: ''
            },
            publisher: '@piennu_777',
            robots: 'index, follow',
            creator: '@piennu_777',
            keywords: ['PIENNU', 'piennu', 'ぴえんぬ', 'ピエンヌ', 'piennu777', 'piennu777.jp', 'Rion', 'ri0n.dev', 'RION', 'Rion Portfolio', 'Rion Developer'],
        }
    }

    const description = post.excerpt ?? post.description ?? `${post.description}`
    const url = `https://www.ri0n.dev/${slug}`

    return {
        title: `${post.title} / Rion`,
        description: description,
        openGraph: {
            title: post.title,
            description: description,
            url: url,
            siteName: 'Rion Portfolio',
            locale: 'ja-JP',
            type: 'website',
            images: '/ogp.webp',
        },
        icons: '/favicon.ico',
        verification: {
            google: ''
        },
        publisher: '@piennu_777',
        robots: 'index, follow',
        creator: '@piennu_777',
        keywords: ['PIENNU', 'piennu', 'ぴえんぬ', 'ピエンヌ', 'piennu777', 'piennu777.jp', 'Rion', 'ri0n.dev', 'RION', 'Rion Portfolio', 'Rion Developer'],
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return (
            <>
                <main>
                    <div className="not-found">
                        <i className="bi bi-cup-hot"></i>
                        <h1>Does not exist</h1>
                        <p>
                            このブログは削除されている、または存在していない可能性があります。
                            <br />
                            どうですか？コーヒーでもご一緒に。
                        </p>
                    </div>
                </main>
            </>
        )
    }

    const processedContent = await remark().use(html).use(gfm).process(post.content)
    const contentHtml = processedContent.toString()

    return (
        <>
            <main>
                <article>
                    <div className={Styles.blog}>
                        <div className={Styles.title}>
                            <p>{formatDate(post.date)}</p>
                            <h1>{post.title}</h1>
                        </div>
                        <div className={Styles.content}>
                            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}