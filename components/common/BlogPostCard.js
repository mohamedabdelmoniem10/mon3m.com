import Link from "next/link";
import Image from "next/image";

const BlogPostCard = ({ post }) => {
  const postImg = post._embedded["wp:featuredmedia"]["0"].source_url;
  const postImgAlt = post._embedded["wp:featuredmedia"]["0"].alt_text;
  const postDate = new Date(post.date).toDateString().slice(4);
  return (
    <Link href={`/blog/${post.id}`}>
      <a className="post">
        <div className="post__img">
          <div className="img">
            <Image
              loader={() => postImg}
              src={postImg}
              placeholder="blur"
              blurDataURL={postImg}
              objectFit="cover"
              unoptimized
              layout="fill"
              alt={postImgAlt}
            />
          </div>
        </div>
        <h4 className="post__title">{post.title.rendered}</h4>
        <div
          className="post__excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <p className="post__date">{postDate}</p>
      </a>
    </Link>
  );
};

export default BlogPostCard;
