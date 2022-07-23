import React from "react";
import {categories} from "../constants/categories";

function InputCategory(props) {
  return (
    <div className="mb-3">
      <label htmlFor="categorySelect" className="form-label">Category</label>
      <select className="form-select" id="categorySelect" onChange={props.onChange} value={props.value}>
        {categories.map((val, i) => <option key={i} value={`${i}`}>{val}</option>)}
      </select>
    </div>
  )
}

export default InputCategory;
