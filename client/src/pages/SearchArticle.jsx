import React from "react";
import { categories } from "../constants/categories";
import InputCategory from "../components/InputCategory";
import InputTitle from "../components/InputTitle";
import ListArticle from "../components/ListArticle";
import { useState } from "react";

function SearchArticle() {
  const [title, setTitle] = useState('');
  const [category_id, setCategoryId] = useState('0');
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <h1>Search Article</h1>
      <div className="container mt-5">
        <div className="row g-3">
          <div className="col-6">
            <InputTitle value={title} onChange={(event) => {
              setTitle(event.target.value);
            }} />
          </div>
          <div className="col-4">
            <InputCategory value={category_id} onChange={(event) => {
              setCategoryId(event.target.value);
            }} />
          </div>
          <div className="col-2">
            <div className="pt-4">
              <button type="submit" className="btn btn-outline-dark" onClick={() => {
                if (title && category_id) {
                  setShowResult(true);
                }
              }}>Search</button>
            </div>
          </div>
        </div>

        {
          showResult && title !== "aneh" ? 
            <div>
              <p>
                you are searching for <strong>{title}</strong> with category <strong>{categories[Number(category_id)]}</strong>
              </p>
              <ListArticle onClick={(event) => event.preventDefault()} />
            </div> : showResult && title === "aneh" && <div className="mt-5"><h1>Not found</h1></div>
        }
      </div>
    </>
  )
}

export default SearchArticle;
