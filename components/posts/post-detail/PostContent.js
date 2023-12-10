import ReactMarkdown from "react-markdown";
import Image from "next/image";

import PostHeader from "./PostHeader";
import classes from "./post-content.module.css";

function PostContent({ post }) {
  const { slug, image, title } = post;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    img(image) {
      return <Image src={image.src} alt={image.alt} width={600} height={300} />;
    },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={image.properties.src}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
