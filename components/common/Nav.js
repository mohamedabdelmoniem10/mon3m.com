import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from "react";

const Nav = () => {
  const colapsContent = useRef();
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const togglCollapsible = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };
  useEffect(() => {
    setExpanded(false);
  }, [router]);
  useEffect(() => {
    setTimeout(function () {
      colapsContent.current.style.visibility = "visible";
    }, 1000);
    window.addEventListener("keydown", (e) => {
      if (e.code == "Escape") {
        setExpanded(false);
      }
    });
    loadSiteMode();
  }, []);

  return (
    <nav className="nav">
      <div
        onClick={togglCollapsible}
        className={
          expanded
            ? "collapsible--expanded menu-toggle collapsible"
            : "menu-toggle collapsible"
        }
      >
        <div className="menu-toggle__icon"></div>
      </div>
      <ul ref={colapsContent} className="list nav__list collapsible__content">
        <li className="nav__item">
          <Link href="/">
            <a className="link">Home</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/about" className="link">
            <a className="link">About</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/works" className="link">
            <a className="link">works</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/blog" className="link">
            <a className="link">Blog</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/contact" className="link">
            <a className="link">Contact</a>
          </Link>
        </li>
      </ul>
      <div className="menu__bg"></div>
      <Link href="/">
        <a className="link logo">Mo.</a>
      </Link>
      <a href="" className="link site-mode__toggle" id="site_mode">
        <svg className="icon light-mode__icon">
          <use xlinkHref="/images/sprite.svg#light"></use>
        </svg>
        <svg className="icon dark-mode__icon">
          <use xlinkHref="/images/sprite.svg#dark"></use>
        </svg>
      </a>
    </nav>
  );
};

export default Nav;

function loadSiteMode() {
  let siteModeToggle = document.getElementById("site_mode");
  let storedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "light"
      : "dark");
  if (storedTheme) setDataTheme(storedTheme);
  siteModeToggle.addEventListener("click", modeToggler);
}
function setDataTheme(dataTheme) {
  document.documentElement.setAttribute("data-theme", dataTheme);
  localStorage.setItem("theme", dataTheme);
}
function modeToggler(e) {
  e.preventDefault();
  let mode = document.documentElement.getAttribute("data-theme");
  mode !== "light" ? setDataTheme("light") : setDataTheme("dark");
}
