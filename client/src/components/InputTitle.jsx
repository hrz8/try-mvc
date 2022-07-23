import React from "react";

function InputTitle(props) {
  return (
    <div className="mb-3">
      <label htmlFor="titleInput" className="form-label">Title</label>
      <input type="text" value={props.value || ""} className="form-control" id="titleInput" onChange={props.onChange} />
    </div>
  )
}

export default InputTitle;
