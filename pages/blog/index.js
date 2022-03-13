import PageHeader from "../../components/common/PageHeader";
import BlogPostCard from "../../components/common/BlogPostCard";

const blog = ({ posts }) => {
  return (
    <>
      <div className="container">
        <PageHeader title="Blog Posts" />
        <div className="grid grid--1x3">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default blog;

export const getStaticProps = async () => {
  const res = await fetch(
    `http://dev-mon3m.d-medge.com/wp-json/wp/v2/posts?_embed`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
