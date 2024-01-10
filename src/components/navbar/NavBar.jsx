import Link from "next/link";

import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className="logo">logo </div>

      <Link href="/">Home</Link>

      <Link href="/about">About</Link>

      <Link href="/contact">Contact</Link>

      <Link href="/blog">Blog</Link>
    </div>
  );
};

export default NavBar;
