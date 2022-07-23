import {articles} from "../constants/articles";

function ListArticle(props) {
  return (
    <div className="list-group">
      {
        articles.map((article, i) => {
          return (
            <a
              href="/#"
              key={i}
              data-id={article.id}
              className="list-group-item list-group-item-action"
              onClick={(props.onClick)}
            >{article.title}</a>
          )
        })
      }
    </div>
  )
}

export default ListArticle;