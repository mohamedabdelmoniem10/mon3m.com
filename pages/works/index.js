import WorkPostCard from "../../components/common/WorkPostCard";
import PageHeader from "../../components/common/PageHeader";

const works = ({ posts }) => {
  return (
    <>
      <div className="container">
        <PageHeader title="My Awesome Works" />
        <div className="grid grid--1x3">
          {posts.map((post) => (
            <WorkPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default works;

export const getStaticProps = async () => {
  const res = await fetch(
    `http://dev-mon3m.d-medge.com/wp-json/wp/v2/works?_embed`
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
