import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="page-not-found">
      <section className="page-404">
        <h2>Sorry, the page you were looking for was not found.</h2>
        <Link to="/" className="btn2">
          Return to home
        </Link>
      </section>
    </div>
  );
}
