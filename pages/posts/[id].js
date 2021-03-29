import Link from "next/link";
import Layout from "../../components/Layouy";
import { getAllPostsIds, getPostData } from "../../lib/posts";

// postを受け取り、それをもとに記事を表示
export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog-page">
        <a>
          <div className="flex curosor-pointer mt-12"></div>
          <span>back to blog page</span>
        </a>
      </Link>
    </Layout>
  );
}

// idの一覧を返します。
export async function getStaticPaths() {
  const paths = await getAllPostsIds();

  return {
    paths,
    fallback: false,
  };
}

// 特定のブログデータを取得します。
export async function getStaticProps({ params }) {
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
