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
  // const res = await fetch(
  //   `http://dev-mon3m.d-medge.com/wp-json/wp/v2/posts?_embed`
  // );
  // const posts = await res.json();
  const posts= [
    {
      id: 1,
      title: "How to get your first 1 milion $ idea!",
      image: "/images/build-your-billion-dollar-idea.jpg",
      excerpt:
        "Are you an aspiring entrepreneur or innovator looking to strike gold with your first million-dollar idea? Well, you're in the right place! In this post, we'll guide you through some essential steps to help you discover that game-changing concept that could potentially pave your way to success and financial prosperity. So, let's get started!",
      date: "August 6, 2023",
      description:
        "Are you an aspiring entrepreneur or innovator looking to strike gold with your first million-dollar idea? Well, you're in the right place! In this post, we'll guide you through some essential steps to help you discover that game-changing concept that could potentially pave your way to success and financial prosperity. So, let's get started! \
        <ol>\
          <li>\
            <h4><stronge>Identify a Problem:</stronge></h4>\
            <p>\
              The foundation of any successful idea lies in addressing a genuine problem or pain point. Start by observing the world around you and identifying areas where people face challenges or inefficiencies. Whether it's a need for a more convenient product, a service gap, or an untapped market, finding a problem to solve is the first step towards your million-dollar idea.\
            </p>\
          </li>\
          <li>\
            <h4><stronge>Follow Your Passions:</stronge></h4>\
            <p>\
              Passion can be a powerful driver of creativity and innovation. Look into your interests, hobbies, and expertise – what do you genuinely care about? By aligning your passions with problem-solving, you can create an idea that excites you and motivates you to put in the hard work required to turn it into a reality.\
            </p>\
          </li>\
          <li>\
            <h4><stronge>Stay Curious and Open-Minded:</stronge></h4>\
            <p>\
              Being curious and open to new experiences can lead you to unique insights and opportunities. Engage in conversations, attend industry events, read books, and stay updated with trends. Sometimes, the most groundbreaking ideas come from unexpected places or by connecting unrelated concepts.\
            </p>\
          </li>\
          <li>\
            <h4><stronge>Brainstorm and Ideate:</stronge></h4>\
            <p>\
              Gather a diverse group of people or collaborate with friends who share your entrepreneurial spirit. Brainstorming sessions can be incredibly fruitful for generating fresh ideas and sparking creativity. Encourage everyone to contribute without judgment, as even the craziest ideas might hold the seed of greatness.\
            </p>\
          </li>\
          <li>\
            <h4><stronge>Validate Your Idea:</stronge></h4>\
            <p>\
              Once you have a concept in mind, it's crucial to validate its potential. Conduct market research, surveys, or interviews to gather feedback from your target audience. Determine if your idea meets a real demand and if there is a market willing to pay for it.\
            </p>\
          </li>\
          <li>\
            <h4><stronge>Think Big, Start Small:</stronge></h4>\
            <p>\
              While aiming for a million-dollar idea, remember that big achievements often start with small steps. Don't be afraid to launch a minimum viable product (MVP) to test your idea in the real world. Gathering real-world data and feedback will help you refine your concept and make it even more successful.\
            </p>\
          </li>\
          <li>\
            <h4><stronge>Embrace Failure and Learn from Setbacks:</stronge></h4>\
            <p>\
              In the pursuit of your million-dollar idea, you may encounter setbacks and failures. Embrace them as valuable learning opportunities. Failure is a stepping stone towards growth and improvement. Analyze what went wrong, adjust your strategy, and keep moving forward.\
            </p>\
          </li>\
          <li>\
            <h4><stronge>Network and Seek Support:</stronge></h4>\
            <p>\
              Surround yourself with like-minded individuals, mentors, or industry experts who can provide valuable insights and support. Networking can open doors to potential partnerships and collaborations that may elevate your idea to the next level.\
            </p>\
          </li>\
          <li>\
            <h4><stronge>Be Adaptable:</stronge></h4>\
            <p>\
              The business landscape is ever-changing, and adaptability is key to staying relevant. Keep a pulse on industry trends and be willing to pivot your idea if necessary. Flexibility can turn challenges into opportunities and increase your chances of success.\
            </p>\
          </li>\
          <li>\
            <h4><stronge>Believe in Yourself:</stronge></h4>\
            <p>\
              Lastly, have faith in your abilities and believe in your idea. Confidence and determination are essential ingredients for entrepreneurial success. Stay persistent, work hard, and remain committed to your vision.\
            </p>\
          </li>\
        </ol>\
        <p>\
          Remember, getting your first million-dollar idea may take time and effort, but with passion, dedication, and the right mindset, you can turn your dreams into reality. So, go forth, think big, and unleash your creativity to make a difference in the world with your extraordinary idea! 💡🚀\
        </p>\
        <stronge>\
          #entrepreneurship #innovation #milliondollaridea #creativity #passion #success #startup #business #dreambig\
        </stronge>\
        ",
    },
  ];

  return {
    props: {
      posts,
    },
  };
};
