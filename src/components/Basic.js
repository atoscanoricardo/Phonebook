import { Fragment, useState } from "react";
import usersFromJson from "../data/users.json";
export const Basic = () => {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <Fragment>
      <section>
        <h1>T&iacute;tulo</h1>
        <ul>
          <li>
            <a href="/addcontact">Adicionar contacto</a>
          </li>
          <li>
            <a href="/editcontact">Editar contacto</a>
          </li>
          <li>
            <a href="/deletecontact">Eliminar contacto</a>
          </li>
          <li>
            <a href="/listcontact">Listar contactos</a>
          </li>
          <li>
            <a href="/searchcontact">Buscar contacto</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="http://google.com">Google</a>
          </li>
        </ul>
        <button onClick={mensaje}>Evento on click</button>
        <br />
        <button onClick={saveUsers(users, setUsers)}>guardar usuarios</button>
        <br />
        <button onClick={buscarPelicula(movies, setMovies)}>
          Buscar Películas
        </button>
        <ul>
          {movies.map((movie, i) => (
            <li key={i}>{movie.titulo}</li>
          ))}
        </ul>
      </section>
      <section>
        <h1>Users</h1>
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user.name}</li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

function mensaje() {
  alert("Este es un boton");
}

function saveUsers(users, setUsers) {
  return () => {
    setUsers(usersFromJson);
  };
}

const buscarPelicula = (movies, setMovies) => {
  return async () => {
    let url = "https://lucasmoy.dev/data/react/peliculas.json";
    let respuesta = await fetch(url);
    movies = await respuesta.json();

    await setMovies(movies);
  };
};
