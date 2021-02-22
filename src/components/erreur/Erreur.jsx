import React from "react";
import { Link } from "react-router-dom";

//composant pour afficher si url innexistant
function Erreur() {
  return (
    <div>
      <div className="container" style={{ height: 340 }}>
        {" "}
        <h3 className="text-center p-3 text-danger"> Oops</h3>
        <h4 className="text-center text-danger">
          The page you were looking for doesn't exist
        </h4>
        <Link to="/">
          <p className="text-center p-5 ">Take me back to the home page </p>
        </Link>
      </div>
    </div>
  );
}

export default Erreur;
