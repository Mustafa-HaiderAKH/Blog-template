import Header from "../componets/header.js";
import Card from "../componets/cards.js";
import Footer from "../componets/footer.js";
import { useState, useEffect } from "react";

const Home = (props) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(props.post.articles);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="home-cover">
          <img src="../image/ee782db0-8576-11ea-a8c8-4115a993fbdf.png" alt="" />
          <div className="overlay">
            <div className="container">
              <h1>Simple Blog.</h1>
              <p>A blog created by Mustafa Hiader</p>
            </div>
          </div>
        </section>
        <section className="container blog-list">
          {data.map((el) => (
            <Card key={el.id} article={el} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};
// export async function getStaticProps({ params }) {

//   const res = await fetch(`https://mashriq.herokuapp.com/dash/v1/articles`);
//   const post = await res.json()

//   return { props: { post } }
// }
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://mashriq.herokuapp.com/dash/v1/articles`);
  const post = await res.json();

  // Pass data to the page via props
  return { props: { post } };
}

export default Home;
