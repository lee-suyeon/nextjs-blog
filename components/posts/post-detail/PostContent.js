import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";

import classes from "./post-content.module.css";

function PostContent({ post }) {
  const { slug, image, title } = post;
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
