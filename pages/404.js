import Link from "next/link";
import Back from "../components/Back";

const notFount = () => {
  return (
    <div className="notfound container grid">
      <h1>404</h1>
      <p>
        the page your searched for is not found&nbsp;
        <Back />
        &nbsp;or&nbsp;
        <Link href="/">
          <a href="" className="link">
            Go Home
          </a>
        </Link>
      </p>
    </div>
  );
};

export default notFount;
