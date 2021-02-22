import React from "react";
import Mannequins from "../mannequin/Mannequins";

function Accueil({ data }) {
  return (
    <div>
      <Mannequins data={data} />
    </div>
  );
}

export default Accueil;
