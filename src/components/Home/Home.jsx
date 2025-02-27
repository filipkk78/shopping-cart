import Slider from "../Slider/Slider";
import img1 from "../../img/clothes.jpg";
import img2 from "../../img/controller.jpg";
import img3 from "../../img/dishes.jpg";
import img4 from "../../img/hdd.jpg";
import img5 from "../../img/monitor.jpg";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";

const IMAGES = [img1, img2, img3, img4, img5];

function Home() {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => setCategories(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error has occured</p>;

  return (
    <>
      <Slider imageUrls={IMAGES}></Slider>
      <h2>Welcome to our store!</h2>
      <p>Below you can see a selection of the categories we offer.</p>
      <div className={styles.categories}>
        {categories.slice(0, 5).map((category) => (
          <div className={styles.category} key={category.id}>
            <h4>{category.name}</h4>
            <img src={category.image} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
