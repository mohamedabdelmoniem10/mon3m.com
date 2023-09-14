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
        content="Frontend Development, Web Development, HTML, CSS, JavaScript, React, Angular, Vue.js, User Interface (UI) Design, Responsive Web Design, Web Application Development, Cross-Functional Collaboration, User Experience (UX), Web Design Trends, Web Technology, Code Optimization, Web Developer Portfolio, Client Collaboration, Frontend Frameworks, Continuous Learning, Web Design, Frontend Coding, Mobile Optimization, Cross-Browser Compatibility, UI/UX Design, Single Page Applications (SPA), CSS Preprocessors (e.g., SASS, LESS), Responsive Design Principles, Frontend Performance, Web Accessibility, Frontend Best Practices, JavaScript Libraries (e.g., jQuery), Code Debugging, Version Control (e.g., Git), Web Development Tools, Creative Web Solutions, Prototyping, SEO-Friendly Web Design, Progressive Web Apps (PWAs), Frontend Security Practices"
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
    </Head>
  );
};

export default AppHead;
