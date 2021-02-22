import React from "react";
import UnMannequin from "../mannequin/UnMannequin";

function Mannequins({ data }) {
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
