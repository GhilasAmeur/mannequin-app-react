import React from "react";

function Comments({ allComment }) {
  console.log(allComment);
  return (
    <div class="container">
      <h2 class="text-center">Bootstrap 4 User Rating Form / Comment Form</h2>

      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-2">
              <img
                src="https://image.ibb.co/jw55Ex/def_face.jpg"
                class="img img-rounded img-fluid"
              />
              <p class="text-secondary text-center">15 Minutes Ago</p>
            </div>
            <div class="col-md-10">
              <p>
                <a
                  class="float-left"
                  href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
                >
                  <strong>Maniruzzaman Akash</strong>
                </a>
                <span class="float-right">
                  <i class="text-warning fa fa-star"></i>
                </span>
                <span class="float-right">
                  <i class="text-warning fa fa-star"></i>
                </span>
                <span class="float-right">
                  <i class="text-warning fa fa-star"></i>
                </span>
                <span class="float-right">
                  <i class="text-warning fa fa-star"></i>
                </span>
              </p>
              <div class="clearfix"></div>

              <p>
                <a class="float-right btn btn-outline-primary ml-2">
                  {" "}
                  <i class="fa fa-reply"></i> Reply
                </a>
                <a class="float-right btn text-white btn-danger">
                  {" "}
                  <i class="fa fa-heart"></i> Like
                </a>
              </p>
            </div>
          </div>
          <div class="card card-inner">
            <div class="card-body">
              <div class="row">
                <div class="col-md-2">
                  <img
                    src="https://image.ibb.co/jw55Ex/def_face.jpg"
                    class="img img-rounded img-fluid"
                  />
                  <p class="text-secondary text-center">15 Minutes Ago</p>
                </div>
                <div class="col-md-10">
                  <p>
                    <a href="https://maniruzzaman-akash.blogspot.com/p/contact.html">
                      <strong>Maniruzzaman Akash</strong>
                    </a>
                  </p>

                  <p>
                    <a class="float-right btn btn-outline-primary ml-2">
                      {" "}
                      <i class="fa fa-reply"></i> Reply
                    </a>
                    <a class="float-right btn text-white btn-danger">
                      {" "}
                      <i class="fa fa-heart"></i> Like
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
