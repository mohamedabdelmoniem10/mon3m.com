import Link from "next/link";

import BlogPostCard from "../common/BlogPostCard";

const BlogSection = ({ post }) => {
  return (
    <section className="blog block">
      <div className="container">
        <div className="grid grid--2x3">
          <div className="blog__post" style={{ width: "80%" }}>
            {/* <!-- Post --> */}
            <BlogPostCard post={post} />
            {/* <!-- ./end Post --> */}
          </div>
          <div className="blog__title">
            <h2>
              new
              <br />
              in blog
            </h2>
            <Link href="/blog">
              <a className="btn btn--outline">view all posts</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
