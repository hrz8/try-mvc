import React from "react";
import { categories } from "../constants/categories";

function Result(props) {
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <span className="badge text-bg-primary">{categories[Number(props.category_id)]}</span>
        </div>
      </div>
    </>
  )
}

export default Result;
