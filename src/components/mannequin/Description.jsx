import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Description({ match, data }) {
  const [mannequin, setMannequin] = useState([]);
  const nom = match.params.id;

  useEffect(() => {
    axios
      .get(
        "https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=" +
          nom
      )
      .then((res) => {
        console.log(res.data.people[0].image);
        setMannequin(res.data.people[0]);
      });
  }, []);

  // const mannequinDescription = data.filter((el) => el.name == nom);
  // console.log(mannequinDescription);
  // setMannequin(mannequinDescription);

  return (
    <div className="container">
      <div className="card-wrapper p-1 ">
        <div className="">
          <div className="  ">
            <img
              src={"https://i.mdel.net/i/db/" + mannequin.image}
              className="rounded-circle m-2"
              width="150px;"
              height="150px"
            />

            <div className="card-body">
              <h4 className="font-weight-bold">{mannequin.name}</h4>

              <p className="font-weight-bold blue-text">{mannequin.type}</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
