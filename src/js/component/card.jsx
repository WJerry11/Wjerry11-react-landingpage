import React from "react";
const Card = () => {
  return (
    <>
      <div className="card mb-5 ms-1" style={{ width: "20rem" }}>
        <img
          src="https://picsum.photos/200/300"
          class="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet. Sed placeat quae 33 explicabo assumenda
            ad omnis dolore et mollitia itaque aut voluptatem enim.
          </p>
          <a href="#" className="btn btn-primary">
            find out more
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
