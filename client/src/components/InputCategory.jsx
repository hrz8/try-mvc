import React from "react";
import {categories} from "../constants/categories";

class InputCategory extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <label htmlFor="categorySelect" className="form-label">Category</label>
        <select className="form-select" id="categorySelect" onChange={this.props.onChange}>
          {categories.map((val, i) => <option key={i} value={`${i}`}>{val}</option>)}
        </select>
      </div>
    )
  }
}

export default InputCategory;
