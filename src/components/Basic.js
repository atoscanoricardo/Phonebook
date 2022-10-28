import { Fragment } from "react";

export const Basic = () => {
  return (
    <Fragment>
      <section>
        <h1>T&iacute;tulo</h1>
        <ul>
          <li>
            <a href="http://google.com">Google</a>
          </li>
        </ul>
        <button onClick={mensaje}>Evento on click</button>
      </section>
    </Fragment>
  );
};

function mensaje() {
  alert("Este es un boton");
}
