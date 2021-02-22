import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import uniqid from "uniqid";
import DescriptionUnique from "../mannequin/DescriptionUnique";

function Description({ match }) {
  //nos states
  const [mannequin, setMannequin] = useState([]);
  const [comment, setComment] = useState("");
  //state commentaire par default
  const [myComments, setMyComments] = useState([
    { id: 1, comment: "comment 1" },
    { id: 2, comment: "comment 2" },
  ]);
  //fonction on recupere le commentaire saisie et on modifier le state pour afficher le nouveau commentaire
  const handlCommentSubmit = (data) => {
    const newComment = [...myComments, { id: uniqid(), comment: data }];

    setMyComments(newComment);
  };
  //useEffect pour recuperer le nom de mannequin puis afficher ses infos personnelles
  useEffect(() => {
    const nomUrl = match.params.id;
    axios
      .get(
        "https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=" +
          nomUrl
      )
      .then((res) => {
        console.log(res.data.people[0].image);
        setMannequin(res.data.people[0]);
      });
  }, []);

  return (
    <div className="container col-md-4 text-center p-2">
      <DescriptionUnique mannequin={mannequin} />

      <div className=" container">
        <div className="row">
          <div className="col-md-8">
            <textarea
              className="form-control m-2 text-black bg-white  rounded-pill"
              placeholder="Add a new comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></textarea>
            <h6 className="col-md-4">
              <span
                className="text-warning bg-secondary badge badge-secondary rounded-pill col-md-12"
                type="submit"
                onClick={(event) => {
                  event.preventDefault();
                  handlCommentSubmit(comment);
                  setComment("");
                }}
              >
                Add
              </span>
            </h6>

            {myComments.map((comment, index) => (
              <div className="container text-white" key={index}>
                {comment.comment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
