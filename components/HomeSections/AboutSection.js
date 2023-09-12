import React from "react";
import Image from "next/image";
import mon3mPic from "../../public/images/mon3m.jpg";

const AboutSection = () => {
  return (
    <section className="about block">
      <div className="container">
        <div className="grid grid--1x2">
          <h2>about me</h2>
          <div className="about__content">
            <p>
              The idea of beauty is the fundamental idea of everthing. In the
              world we see only distortions of th e fundamental idea, but art.
              by imagination, may lift itself to the height of this idea. Art is
              therefore akin to creation.
            </p>
            <a
              href="/files/Mohamed_A.El-moniem.pdf"
              download="Mohamed Mon3m CV"
              className="btn btn--outline btn--small"
            >
              download CV
            </a>
          </div>
        </div>
        <div className="grid grid--1x2">
          <div className="about__me">
            <div className="img">
              <Image
                src="/images/mon3m.png"
                placeholder="blur"
                blurDataURL="/images/mon3m.png"
                objectFit="cover"
                layout="fill"
                unoptimized
                alt="Mohamed Abdelmoniem"
              />
            </div>
          </div>
          <div className="skills">
            <h3>skills</h3>

            <div className="skill">
              <div className="skill__info">
                <p className="skill__name">UI & web design</p>
                <p className="skill__percentage">90%</p>
              </div>
              <div className="skill__prog-bar">
                <div
                  className="skill__prog-bar--complete"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill__info">
                <p className="skill__name">HTML & CSS</p>
                <p className="skill__percentage">95%</p>
              </div>
              <div className="skill__prog-bar">
                <div
                  className="skill__prog-bar--complete"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill__info">
                <p className="skill__name">Javascript</p>
                <p className="skill__percentage">95%</p>
              </div>
              <div className="skill__prog-bar">
                <div
                  className="skill__prog-bar--complete"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill__info">
                <p className="skill__name">Angular 11, React</p>
                <p className="skill__percentage">90%</p>
              </div>
              <div className="skill__prog-bar">
                <div
                  className="skill__prog-bar--complete"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill__info">
                <p className="skill__name">Reactnative</p>
                <p className="skill__percentage">75%</p>
              </div>
              <div className="skill__prog-bar">
                <div
                  className="skill__prog-bar--complete"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
