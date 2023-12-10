import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";

import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "getting-started-nextjs",
  title: "Getting started with NextJs",
  image: "getting-started-nextjs.png",
  date: "2023-12-09",
  content: "# This is a first post",
};

function PostContent() {
  const { slug, image, title } = DUMMY_POST;
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
