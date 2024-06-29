import { Link } from "react-router-dom";
import error404 from "./../../Assets/404.png";

export default function ErrorPage() {
  return (
    <div className="errorContainer">
      <img src={error404} alt="404 error not found" />
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="errorLinkHome">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
