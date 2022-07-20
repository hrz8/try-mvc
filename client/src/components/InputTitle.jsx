import React from "react";

class InputTitle extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <label htmlFor="titleInput" className="form-label">Title</label>
        <input type="text" className="form-control" id="titleInput" onChange={this.props.onChange} />
      </div>
    )
  }
}

export default InputTitle;
