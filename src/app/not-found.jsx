import Link from "next/link";

const NotFound = () => (
  <div className="container">
    <h1>404 - Page Not Found</h1>
    <h2>
      <Link href="/">Go back home</Link>
    </h2>
  </div>
);

export default NotFound;
