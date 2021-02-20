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
              Add some information about the album below, the author, or any
              other background context. Make it a few sentences long so folks
              can pick up some informative tidbits. Then, link them off to some
              social networking sites or contact information.
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
            Mason &amp; Daughters
          </a>
        </div>
      </div>

      <section className="jumbotron text-xs-center ">
        <div className="container">
          <h1 className="jumbotron-heading text-center">
            Mason &amp; Daughters
          </h1>
          <p className="lead  text-white  ">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
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
