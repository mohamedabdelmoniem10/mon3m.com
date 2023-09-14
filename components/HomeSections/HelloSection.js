const HelloSection = () => {
  return (
    <section className="hello block">
      <div className="container">
        <div className="grid grid--1x2">
          <h2>hello everyone</h2>
          <p>
            I&apos;m Mohamed Abdelmoniem, and I&apos;m passionate about learning new
            things. 
            
            {<br /> }
            Back in 2016, a friend introduced me to the world of web
            development, urging me to delve into HTML, CSS, and Javascript to
            create websites. My journey was filled with moments of frustration
            and excitement, but by 2019, I had embarked on a rewarding career as
            a MEAN stack developer. 
            {<br />}
            
            Today, I&apos;m proud to be a frontend developer,
            continuing to explore the ever-evolving world of web technology.
            {<br /> }
            {<br /> }

            Join me on this exciting journey of discovery!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
