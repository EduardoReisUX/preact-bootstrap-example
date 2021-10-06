import { FunctionalComponent, h } from "preact";
import style from "./style.css";

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <h1 class="mt-5 mb-3">Home</h1>
      <p>This is the Home component.</p>
    </div>
  );
};

export default Home;
