import Header from "../../componets/header.js";
import Footer from "../../componets/footer.js";
import moment from "moment";

import { useEffect, useState } from "react";
const Article = (props) => {
  const [article, setarticle] = useState({});
  useEffect(() => {
    setarticle(props.post.article);
    console.log(article);
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="title-box container">
          <div>
            <h1>{article.title}</h1>
            <small> By Mustafa Haider</small>
          </div>
          <span>{moment(article.createdAt).format("ll")}</span>
        </section>

        <section className="cover container">
          <img src={article.image} />
        </section>

        <section className="box-info container">
          {<div dangerouslySetInnerHTML={{ __html: article.text }}></div>}
        </section>
      </main>
      <Footer />
    </>
  );
};
// export async function getStaticPaths() {
//     const res = await fetch('https://mashriq.herokuapp.com/dash/v1/articles')
//     const posts = await res.json()

//     const paths = posts.articles.map((post) => ({
//         params: { id: post.id.toString() },
//     }));
//     return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {

//     const res = await fetch(`https://mashriq.herokuapp.com/dash/v1/article/${params.id}`);
//     const post = await res.json()

//     return { props: { post } }
// }
export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const res = await fetch(
    `https://mashriq.herokuapp.com/dash/v1/article/${params.id}`
  );
  const post = await res.json();

  // Pass data to the page via props
  return { props: { post } };
}

export default Article;
