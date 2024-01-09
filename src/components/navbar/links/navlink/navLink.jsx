import Link from "next/link";

import styles from "./navLink.module.css";

const NavLink = ({ name, link }) => {
  return (
    <Link href={link.path} key={link.name} className={styles.container}>
      {link.name}
    </Link>
  );
};

export default NavLink;
