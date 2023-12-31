import { Fragment } from "react";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

function AllPostPage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostPage;
