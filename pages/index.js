import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/Homepage/Hero";
import FeaturedPosts from "../components/Homepage/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog!</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
