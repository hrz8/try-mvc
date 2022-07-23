import React from "react";
import { articles } from "../constants/articles";
import InputCategory from "../components/InputCategory";
import InputContent from "../components/InputContent";
import InputTitle from "../components/InputTitle";
import ListArticle from "../components/ListArticle";
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

class EditArticle extends React.Component {
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
        <h1>Edit Article</h1>
        <div className="container mt-5">
          <ListArticle onClick={(event) => {
            event.preventDefault();
            const dataId = Number(event.target.dataset.id);
            const selectedArticle = articles.find((article) => article.id === dataId);

            this.setState({
              title: selectedArticle.title,
              content: selectedArticle.content,
              category_id: selectedArticle.category_id,
            })
          }} />

          <hr />

          <InputTitle value={this.state.title} onChange={(event) => this.onChangeInput(event, "title")} />
          <InputContent value={this.state.content} onChange={(event) => this.onChangeInput(event, "content")} />
          <InputCategory value={this.state.category_id} onChange={(event) => this.onChangeInput(event, "category_id")} />
          <button type="submit" className="btn btn-outline-dark" onClick={() => {
            if (this.state.title && this.state.content) {
              this.setState({showResult: true})
            }
          }}>Edit</button>
          <button type="submit" className="btn btn-outline-danger" onClick={() => this.setState({showResult: false})}>Reset</button>

          {
            this.state.showResult && <div className="d-flex mt-3">
              <div className="justify-content-center align-items-center">
                {mappingJudul[this.state.category_id]}
                <Result title={this.state.title} content={this.state.content} category_id={this.state.category_id} />
              </div>
            </div>
          }
        </div>
      </>
    )
  }
}

export default EditArticle;
