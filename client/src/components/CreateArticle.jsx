import React from "react";
import InputCategory from "./InputCategory";
import InputContent from "./InputContent";
import InputTitle from "./InputTitle";
import Result from "./Result";

class CreateArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      category_id: '0',
      showResult: false,
    }

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(event, stateName) {
    this.setState({
      [stateName]: event.target.value
    })
  }

  render() {
    return (
      <>
        <div className="container mt-5">
          <InputTitle onChange={(event) => this.onChangeInput(event, "title")} />
          <InputContent onChange={(event) => this.onChangeInput(event, "content")} />
          <InputCategory onChange={(event) => this.onChangeInput(event, "category_id")} />
          <button type="submit" className="btn btn-outline-dark" onClick={() => {
            if (this.state.title && this.state.content) {
              this.setState({showResult: true})
            }
          }}>Create</button>
          <button type="submit" className="btn btn-outline-danger" onClick={() => this.setState({showResult: false})}>Reset</button>

          {
            this.state.showResult && <div className="d-flex mt-3">
              <div className="justify-content-center align-items-center">
                <Result title={this.state.title} content={this.state.content} category_id={this.state.category_id} />
              </div>
            </div>
          }
        </div>
      </>
    )
  }
}

export default CreateArticle;
