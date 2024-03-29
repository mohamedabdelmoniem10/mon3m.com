import Image from "next/image";
import Link from "next/link";

const WorksSection = ({ works }) => {
  console.log('this is works:>', works)
  return (
    <section className="works block">
      <div className="container--large">
        <div className="grid grid--1x4 works__grid">
          {works.map((work) => {
            const workImg = work.image;
            const workImgAlt = work.title;
            return (
              <Link key={work.id} href={`/works/${work.id}`}>
                <a href="" className="work">
                  <div className="img">
                    <Image
                      loader={() => workImg}
                      src={workImg}
                      placeholder="blur"
                      blurDataURL={workImg}
                      objectFit="cover"
                      layout="fill"
                      unoptimized
                      alt={workImgAlt}
                    />
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
        <Link href="/works/">
          <a className="btn btn--outline btn--small">show more</a>
        </Link>
      </div>
    </section>
  );
};

export default WorksSection;
