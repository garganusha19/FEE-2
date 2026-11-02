import { Link } from "react-router-dom";

function NotFound() {

  return (

    <main className="page-shell not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for may have moved or doesn't exist.</p>
      <div className="not-found-visual" aria-hidden="true">
        <span>✦</span><span>?</span><span>✦</span>
      </div>
      <Link className="button button-primary" to="/">Go Back Home <span aria-hidden="true">→</span></Link>
    </main>

  );

}

export default NotFound;