import React from "react";
import { categories } from "../constants/categories";
import InputCategory from "../components/InputCategory";
import InputTitle from "../components/InputTitle";
import ListArticle from "../components/ListArticle";

class SearchArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
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
        <h1>Search Article</h1>
        <div className="container mt-5">
          <div className="row g-3">
            <div className="col-6">
              <InputTitle value={this.state.title} onChange={(event) => this.onChangeInput(event, "title")} />
            </div>
            <div className="col-4">
              <InputCategory value={this.state.category_id} onChange={(event) => this.onChangeInput(event, "category_id")} />
            </div>
            <div className="col-2">
              <div className="pt-4">
                <button type="submit" className="btn btn-outline-dark" onClick={() => {
                  if (this.state.title && this.state.category_id) {
                    this.setState({showResult: true})
                  }
                }}>Search</button>
              </div>
            </div>
          </div>

          {
            this.state.showResult && this.state.title !== "aneh" ? 
              <div>
                <p>you are searching for <strong>{this.state.title}</strong> with category <strong>{categories[Number(this.state.category_id)]}</strong></p>
                <ListArticle onClick={(event) => event.preventDefault()} />
              </div> : this.state.showResult && this.state.title === "aneh" && <div className="mt-5"><h1>Not found</h1></div>
          }
        </div>
      </>
    )
  }
}

export default SearchArticle;
