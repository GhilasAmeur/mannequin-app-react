import React from "react";
import Navbar from "../accueil/Navbar";
import Footer from "../accueil/Footer";
import Mannequins from "../mannequin/Mannequins";

function Accueil({ data }) {
  //console.log(data);
  return (
    <div>
      <Mannequins data={data} />
    </div>
  );
}

export default Accueil;
