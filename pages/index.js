import Head from "next/head";
import Image from "next/image";
import AppHead from "../components/common/AppHead";
import AboutSection from "../components/HomeSections/AboutSection";
import BlogSection from "../components/HomeSections/BlogSection";
import ContactSection from "../components/HomeSections/ContactSection";
import HelloSection from "../components/HomeSections/HelloSection";
import WorksSection from "../components/HomeSections/WorksSection";
import styles from "../styles/Home.module.css";

export default function Home({ post, works }) {
  return (
    <>
      <AppHead title="Mohamed Mon3m" />
      <HelloSection />
      <WorksSection works={works} />
      <AboutSection />
      <BlogSection post={post} />
      <ContactSection />
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    `http://dev-mon3m.d-medge.com/wp-json/wp/v2/posts/1?_embed`
  );
  const worksRes = await fetch(
    `http://dev-mon3m.d-medge.com/wp-json/wp/v2/works?_embed&per_page=8&page=1`
  );
  const post = await res.json();
  const works = await worksRes.json();

  return {
    props: { post, works },
  };
};
