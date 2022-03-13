import Image from "next/image";
import PageHeader from "../../../components/common/PageHeader";

const blog = ({ post }) => {
  const postImg = post._embedded["wp:featuredmedia"]["0"].source_url;
  const postImgAlt = post._embedded["wp:featuredmedia"]["0"].alt_text;
  const postDate = new Date(post.date).toDateString().slice(4);
  return (
    <div className="post__container">
      <div className="container">
        <PageHeader
          title={post.title.rendered}
          desc={post.excerpt.rendered}
          ogTitle={post.title.rendered}
          ogDesc={post.excerpt.rendered}
        />
        <p>{postDate}</p>
        <div className="post__img" style={{ height: 500 }}>
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
        <div
          className="post__desc"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </div>
  );
};

export default blog;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://dev-mon3m.d-medge.com/wp-json/wp/v2/posts/${context.params.id}?_embed`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://dev-mon3m.d-medge.com/wp-json/wp/v2/posts/`);
  const posts = await res.json();
  const paths = posts
    .map((post) => post.id)
    .map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
