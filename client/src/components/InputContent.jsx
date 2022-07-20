import React from "react";

class InputContent extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <label htmlFor="contentInput" className="form-label">Content</label>
        <textarea className="form-control" id="contentInput" rows="3" onChange={this.props.onChange}></textarea>
      </div>
    )
  }
}

export default InputContent;
