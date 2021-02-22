import React from "react";
import "../../css/mannequins.css";
import { Link } from "react-router-dom";

function UnMannequin({ mannequin }) {
  //console.log(mannequin);
  return (
    <div className="card-wrapper p-1">
      <div className="content">
        <div className="face-front z-depth-2 ">
          <img
            src={"https://i.mdel.net/i/db/" + mannequin.image}
            className="rounded-circle m-2"
            width="150px;"
            height="150px"
          />

          <div className="card-body">
            <h4 className="font-weight-bold">{mannequin.name}</h4>

            <p className="font-weight-bold blue-text">{mannequin.type}</p>
            <p>Lorem ipsum dolor sit amet, kksnd tenetur odio suscipit non</p>
            <ul className="list-inline m-2 font-weight-lighter p-2 " style={{}}>
              <li className="list-inline-item mx-2 ">
                <a className=" fa-lg fb-ic">
                  <i className="fas fa-heart "></i>
                </a>
                <span className="">1 Likes</span>
              </li>
              <li className="list-inline-item">
                <a className=" fa-lg tw-ic">
                  <i className="fas fa-comment"></i>
                </a>
                <span className="">1 Comments</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="face-back z-depth-2">
          <div className="card-body">
            <h4 className="font-weight-bold">About me</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              tenetur odio suscipit non commodi veleius veniam maxime?
            </p>

            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="p-2 fa-lg fb-ic">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="p-2 fa-lg tw-ic">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="p-2 fa-lg gplus-ic">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="p-2 fa-lg li-ic">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>

            <p>Subscribe our Youtube Channel</p>
            <h5 className="font-weight-bold">THE PROVIDER</h5>
            <Link
              to={`/description/${mannequin.name}`}
              className="btn btn-success "
              type="submit"
            >
              Description
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnMannequin;
