import Link from "next/link";

const Card = ({ article }) => {
  return (
    <div className="blog-item">
      <div className="img">
        <img src={article.image} />
      </div>
      <h4>
        {article.title.length > 30
          ? article.title.substr(0, 30) + "..."
          : article.title}
      </h4>
      <small>By Mustafa Haider</small>
      <div className="card-footer">
        <Link href={`article/${article.id}`}>
          <a>Reade article</a>
        </Link>
        <span>June 19, 2020</span>
      </div>
    </div>
  );
};

export default Card;
