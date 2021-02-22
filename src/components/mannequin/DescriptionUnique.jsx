import React from "react";

function DescriptionUnique({ mannequin }) {
  return (
    <div>
      <img
        className=" rounded-circle m-2"
        width="160px;"
        height="160px"
        src={"https://i.mdel.net/i/db/" + mannequin.image}
        alt="Card image cap"
      />

      <div className="container">
        <h4 className="font-weight-bold text-warning">{mannequin.name}</h4>

        <p className="font-weight-bold text-info">{mannequin.type}</p>
        <div className="">
          <p className="card-text text-white p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia
            itaque voluptates natus ab fugit, sed repellat omnis in amet optio
            labore mollitia cumque provident error dolore commodi? Cumque,
            asperiores.
          </p>
        </div>

        <ul className="list-inline ">
          <li className="list-inline-item m-2 ">
            <a className="p-2 fa-lg fb-ic text-warning">
              <i className="fas fa-star"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="p-2 fa-lg tw-ic text-warning">
              <i className="fas fa-star "></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="p-2 fa-lg tw-ic text-warning">
              <i className="fas fa-star "></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="p-2 fa-lg tw-ic text-warning">
              <i className="fas fa-star "></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="p-2 fa-lg tw-ic text-warning">
              <i className="fas fa-star "></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DescriptionUnique;
