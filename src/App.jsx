import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Products from "./components/Products/Products";

import img1 from "./img/clothes.jpg";
import img2 from "./img/controller.jpg";
import img3 from "./img/dishes.jpg";
import img4 from "./img/hdd.jpg";
import img5 from "./img/monitor.jpg";

const IMAGES = [img1, img2, img3, img4, img5];

function App() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <Slider imageUrls={IMAGES}></Slider>
        <Products></Products>
      </main>
      <footer>filipkk78</footer>
    </>
  );
}

export default App;
