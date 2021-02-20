import React from "react";
//import "../../css/mannequins.css";
import { useState, useEffect } from "react";
import Erreur from "../erreur/Erreur";
import UnMannequin from "../mannequin/UnMannequin";

function Mannequins({ data }) {
  const [isTrue, setIsTrue] = useState(false);

  // useEffect(() => {
  //   //console.log(data.length);

  //   if (data.length) {
  //     console.log(data.length);
  //     setIsTrue(true);
  //   } else {
  //     setIsTrue(false);
  //   }
  // }, [data]);

  return (
    <div className="container mb-4">
      <div className="row justify-content-center">
        {data.map((mannequin, index) => (
          <div className="col-md-3 m-2" key={index}>
            <UnMannequin mannequin={mannequin} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mannequins;
