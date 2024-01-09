import Link from "next/link";
import styles from "./links.module.css";

const Links = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className={styles.link}>
      {links.map((link, index) => (
        <NavLink key={index} item={link} />
      ))}
    </div>
  );
};

export default Links;
