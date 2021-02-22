import React from "react";
import "../../css/navbar.css";
import { useState } from "react";

function Navbar({ inputSearch }) {
  const [search, setSearch] = useState("");
  const handlChange = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    inputSearch(search);
    setSearch("");
  };

  return (
    <header>
      <div className="navbar-collapse collapse inverse" id="navbar-header">
        <div className="container-fluid">
          <div className="about">
            <h4>About</h4>
            <p className="text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              minus, aut voluptate magnam facilis architecto rerum similique
              fugiat quas alias obcaecati reprehenderit sit dolorem. Similique
              illo laborum ratione aut est?
            </p>
          </div>
          <div className="social">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Follow on Twitter</a>
              </li>
              <li>
                <a href="#">Like on Facebook</a>
              </li>
              <li>
                <a href="#">Email me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*formulaire */}
      <div className="navbar navbar-static-top navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-header"
          >
            &#9776;
          </button>
          <a href="#" className="navbar-brand">
            Model &amp; Athlete
          </a>
        </div>
      </div>

      <section className="jumbotron text-xs-center ">
        <div className="container">
          <h1 className="jumbotron-heading text-center">Model &amp; Athlete</h1>
          <p className="lead  text-white  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            provident voluptate. Earum illo atque enim, reiciendis maxime vero,
            natus nihil aspernatur quasi voluptates in minus dolorum alias odio?
            Error, adipisci!
          </p>

          <form onSubmit={handlSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Mannequin's name"
                value={search}
                onChange={handlChange}
              />
              <div className="input-group-append">
                <button className="btn btn-info" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
