import React from "react";
import CreateArticle from "./pages/CreateArticle";
import EditArticle from "./pages/EditArticle";
import SearchArticle from "./pages/SearchArticle";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="my-5 mx-5">
          <Navbar />
          <Routes>
            <Route path="/" element={<CreateArticle />} />
            <Route path="/edit" element={<EditArticle />} />
            <Route path="/search" element={<SearchArticle />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
