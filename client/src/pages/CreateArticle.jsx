import React from "react";
import InputCategory from "../components/InputCategory";
import InputContent from "../components/InputContent";
import InputTitle from "../components/InputTitle";
import Result from "../components/Result";

function FiksiIlmiah() {
  return <h1>Fiksi Ilmiah</h1>
}

function Komedi() {
  return <h1>Komedi</h1>
}

function Romantis() {
  return <h1>Romantis</h1>
}

const mappingJudul = {
  "0": <FiksiIlmiah />,
  "1": <Komedi />,
  "2": <Romantis />
}

class CreateArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      category_id: '0',
      showResult: false,
    };

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
        <h1>Create Article</h1>
        <div className="container mt-5">
          <InputTitle value={this.state.title} onChange={(event) => this.onChangeInput(event, "title")} />
          <InputContent value={this.state.content} onChange={(event) => this.onChangeInput(event, "content")} />
          <InputCategory value={this.state.category_id} onChange={(event) => this.onChangeInput(event, "category_id")} />
          <button type="submit" className="btn btn-outline-dark" onClick={() => {
            if (this.state.title && this.state.content) {
              this.setState({showResult: true})
            }
          }}>Create</button>
          <button type="submit" className="btn btn-outline-danger" onClick={() => this.setState({showResult: false})}>Reset</button>

          {
            this.state.showResult ? <div className="d-flex mt-3">
              <div className="justify-content-center align-items-center">
                {mappingJudul[this.state.category_id]}
                <Result title={this.state.title} content={this.state.content} category_id={this.state.category_id} />
              </div>
            </div> : <div className="mt-5"><h1>No content</h1></div>
          }
        </div>
      </>
    )
  }
}

export default CreateArticle;
