import Link from "next/link";

import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className="logo">logo </div>

      <div className="links-box">
        <Link href="/">Home</Link>

        <Link href="/about">About</Link>

        <Link href="/contact">Contact</Link>

        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default NavBar;
