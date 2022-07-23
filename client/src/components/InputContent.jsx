import React from "react";

function InputContent(props) {
  return (
    <div className="mb-3">
      <label htmlFor="contentInput" className="form-label">Content</label>
      <textarea value={props.value || ""} className="form-control" id="contentInput" rows="3" onChange={props.onChange}></textarea>
    </div>
  )
}

export default InputContent;
