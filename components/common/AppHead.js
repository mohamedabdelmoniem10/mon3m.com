import Head from "next/head";

const AppHead = ({ title, desc, ogTitle, ogDesc }) => {
  const description = desc
    ? desc
    : "My name is Mohamed Mon3m - I can build whatever you need Website, MobileApp or even DesktopApp, using modern technologies like Angular, React, Nextjs, React Native, Nodejs and Wordpress";
  const ogDescContent = ogDesc
    ? ogDesc
    : "I'm Mohamed Abdelmoniem, a Front-End Developer with 2+ years of experience implementing complex web apps and frameworks, specializing in Javascript, Reactjs, React Native, Nextjs, Angular, and WordPress. and I'm passionate to learn new technologies.";
  const ogTitleContent = ogTitle ? ogTitle : `Mohamed Mon3m`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Software Development, developer, freelancer, frontend, JavaScript, Nodejs, Fastify, Express, Web Development, HTML, HTML5, CSS, CSS3, bootstrap, Angular, React, React Native, WordPress, Full Stack,"
      />
      <meta property="og:title" content={ogTitleContent} />
      <meta property="og:description" content={ogDescContent} />
      <meta property="og:image" content="/images/mon3m.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={ogTitleContent} />
      <meta property="twitter:description" content={ogDescContent} />
      <meta property="twitter:image" content="/images/mon3m.jpg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      {/* <!-- fonts --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default AppHead;
