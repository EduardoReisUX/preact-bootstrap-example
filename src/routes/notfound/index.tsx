import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Notfound: FunctionalComponent = () => {
  return (
    <div class={style.notfound}>
      <div class="text-center">
        <h1>Erro 404</h1>
        <p>Oops. Essa página não existe!</p>
        <Link href="/">
          <button class="btn btn-outline-primary mt-5">Voltar para home</button>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
