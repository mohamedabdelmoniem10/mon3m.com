import Image from "next/image";
import PageHeader from "../../../components/common/PageHeader";

const works = [
  {
    id: 1,
    title: "🚀 Introducing Our Stellar Courses Website Landing Page!",
    image: "/images/project-04.png",
    excerpt:
      "🎉 Exciting News! 🎉 As a passionate Front-End Developer, I'm thrilled to share with you the launch of our brand-new landing page for Courses Website! 🌟",
    date: "August 6, 2023",
    description:
      "Are you an aspiring entrepreneur or innovator looking to strike gold with your first million-dollar idea? Well, you're in the right place! In this post, we'll guide you through some essential steps to help you discover that game-changing concept that could potentially pave your way to success and financial prosperity. So, let's get started! \
    <ul>\
      <li>\
        <h4><stronge>🎓 Discover a World of Learning:</stronge></h4>\
        <p>\
          Our carefully crafted landing page aims to revolutionize online education and provide learners worldwide with a seamless and captivating learning journey. Whether you're a student, a professional looking to upskill, or simply eager to explore new subjects, our courses platform has something for everyone.\
        </p>\
      </li>\
      <li>\
        <h4><stronge>💡 Designed for an Exceptional Experience:</stronge></h4>\
        <p>\
          With a user-centric approach, our landing page boasts an intuitive and modern interface, making navigation a breeze. Clean and engaging visuals showcase the diversity of courses we offer, while clear call-to-action buttons guide you towards your desired learning path.\
        </p>\
      </li>\
      <li>\
        <h4><stronge>🌐 Responsiveness at Its Finest:</stronge></h4>\
        <p>\
          No matter where you are or what device you're using, our landing page adapts effortlessly to provide a consistent and enjoyable experience across all screens – from desktops to tablets and mobile phones.\
        </p>\
      </li>\
      <li>\
        <h4><stronge>⚡️ Powered by Front-End Excellence:</stronge></h4>\
        <p>\
          As the Front-End Developer behind this project, I've poured my heart and soul into crafting a pixel-perfect and responsive design. Utilizing cutting-edge technologies like HTML5, CSS3, and JavaScript, I've ensured that every element on the page seamlessly harmonizes for a delightful user experience.\
        </p>\
      </li>\
      <li>\
        <h4><stronge>🤝 Thank You to the Team:</stronge></h4>\
        <p>\
          None of this would have been possible without the support and collaboration of our incredible team. From designers to content creators and back-end developers, each person's expertise has played a vital role in bringing this vision to life.\
        </p>\
      </li>\
      <li>\
        <h4><stronge>🚀 Experience It Yourself:</stronge></h4>\
        <p>\
          Ready to embark on your learning adventure? Head over to [Include Landing Page URL] and see for yourself how our intuitive design makes the learning process a joyous one.\
        </p>\
      </li>\
    </ul>\
    <p>\
      ✨ Let's Connect: As always, I'm open to feedback and suggestions to enhance the user experience further. Feel free to share your thoughts and ideas in the comments below.\
      <br />\
      Together, let's embrace the power of education and inspire a world of curious minds! 🌍📚\
    </p>\
    <stronge>#CoursesWebsite #LandingPageLaunch #OnlineEducation #FrontEndDevelopment #Empowerment #LearningJourney #TechExcellence #EducationRevolution</stronge>\
    ",
  },
];

const work = ({ post }) => {
  const postImg = post.image;
  const postImgAlt = post.title;
  const postDate = post.date;
  return (
    <div className="post__container">
      <div className="container">
        <PageHeader
          title={post.title}
          desc={post.excerpt}
          ogTitle={post.title}
          ogDesc={post.excerpt}
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
          dangerouslySetInnerHTML={{ __html: post.description }}
        />
      </div>
    </div>
  );
};

export default work;

export const getStaticProps = async (context) => {
  // const res = await fetch(
  //   `http://dev-mon3m.d-medge.com/wp-json/wp/v2/works/${context.params.id}?_embed`
  // );
  // const post = await res.json();
  
  const post = works.find(p=> p.id == context.params.id)

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  // const res = await fetch(`http://dev-mon3m.d-medge.com/wp-json/wp/v2/works/`);
  // const posts = await res.json();
  const paths = works
    .map((post) => post.id)
    .map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
