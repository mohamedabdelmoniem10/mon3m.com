import Head from "next/head";

const AppHead = ({ title, desc, ogTitle, ogDesc }) => {
  const description = desc
    ? desc
    : "Experienced frontend developer with 3+ years of expertise in crafting user-friendly, responsive websites and web apps. Proficient in HTML, CSS, JavaScript, and popular frontend frameworks like React, Angular, and Vue. Collaborative team player, translating project requirements into visually appealing web pages. Meticulous and passionate about creating elegant, efficient user interfaces. Stay ahead with the latest web tech trends, committed to continuous improvement.";
  const ogDescContent = ogDesc
    ? ogDesc
    : "Experienced frontend developer with 3+ years of expertise in crafting user-friendly, responsive websites and web apps. Proficient in HTML, CSS, JavaScript, and popular frontend frameworks like React, Angular, and Vue. Collaborative team player, translating project requirements into visually appealing web pages. Meticulous and passionate about creating elegant, efficient user interfaces. Stay ahead with the latest web tech trends, committed to continuous improvement.";
  const ogTitleContent = ogTitle ? ogTitle : title;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Software Development, developer, freelancer, frontend, JavaScript, Nodejs, Fastify, Express, Web Development, HTML, HTML5, CSS, CSS3, bootstrap, Angular, React, React Native, WordPress, Full Stack, developer"
      />
      <meta property="og:title" content={ogTitleContent} />
      <meta property="og:description" content={ogDescContent} />
      <meta property="og:image" content="/images/mon3m.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={ogTitleContent} />
      <meta property="twitter:description" content={ogDescContent} />
      <meta property="twitter:image" content="/images/mon3m.png" />
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
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@700&display=swap" rel="stylesheet" />
    </Head>
  );
};

export default AppHead;
