import { useRouter } from "next/router";
import Link from "next/link";
import AppHead from "./AppHead";

const PageHeader = ({ title, desc, ogTitle, ogDesc }) => {
  return (
    <>
      <AppHead title={title} desc={desc} ogTitle={ogTitle} ogDesc={ogDesc} />
      <div className="page-header">
        <h1 className="page-header__title">{title}</h1>
        <hr className="page-header__hr" />
        <div className="page-header__bread-crumb">
          <BreadCrumb title={title} />
        </div>
      </div>
    </>
  );
};

export default PageHeader;

const BreadCrumb = ({ title }) => {
  const router = useRouter();
  const single = router.route.includes("[");
  const paths = router.route
    .split("/")
    .filter((p) => (p.includes("[") ? null : true));
  return (
    <>
      {paths.map((path, index) => (
        <span key={index}>
          <Link href={`/${path}`}>
            <a href="" className="link">
              {path.length == 0 ? "Home" : path}
            </a>
          </Link>
          {index !== paths.length - 1 && " / "}
        </span>
      ))}
      {single && (
        <>
          &nbsp; /{" "}
          <a href="" className="link">
            {" "}
            {title}
          </a>
        </>
      )}
    </>
  );
};
