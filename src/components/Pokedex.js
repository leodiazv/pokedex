import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import "../assets/styles/Pokedex.css";
import pokedex_logo from "../assets/images/pokedex_logo.png";
import Pagination from "./Pagination";

const Pokedex = () => {
  const userName = useSelector((state) => state.userName);
  const navigate = useNavigate();

  const [pokedexData, setPokedexData] = useState([]);
  const [pokedexDataFiltered, setPokedexDataFiltered] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState([]);

  //Pagination States

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, serCardsPerPage] = useState(20);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokedexData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
      .then((res) => setPokedexData(res.data.results));
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setPokemonTypes(res.data.results));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    navigate(`/pokedex/${pokemonName}`);
  };

  const handleFilterType = (e) => {
    if (e.target.value === "allTypes") {
      setPokedexDataFiltered([]);
    } else {
      axios
        .get(`https://pokeapi.co/api/v2/type/${e.target.value}/`)
        .then((res) => {
          setPokedexDataFiltered(res.data.pokemon);
        });

      /* const currentCards = pokedexDataFiltered.slice(indexOfFirstCard, indexOfLastCard); */
    }
  };

  console.log(pokedexData);
  console.log(pokedexDataFiltered);

  return (
    <div className="pokedex">
      <header>
        <img src={pokedex_logo} />
      </header>
      <div className="pokedex-container">
        <p>
          <span>Bienvenido {userName}, </span>aqui podrás encontrar tu pokemón
          favorito.{" "}
        </p>

        <form className="input-container" onSubmit={submit}>
          <input
            type="text"
            id="input-pokemon-name"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            placeholder="Nombre o ID del pokemón"
          />
          <button>Buscar</button>
        </form>

        <div className="filter-container">
          <span className="material-icons-outlined">filter_alt</span>
          <select onChange={handleFilterType}>
            <option value="allTypes">Todos</option>
            {pokemonTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <ul>
          {pokedexDataFiltered.length === 0
            ? currentCards.map((pokemon) => (
                <li key={pokemon.url}>
                  <PokemonCard pokemonUrl={pokemon.url} />
                </li>
              ))
            : pokedexDataFiltered
                .slice(indexOfFirstCard, indexOfLastCard)
                .map((pokemon) => (
                  <li key={pokemon.pokemon?.url}>
                    <PokemonCard pokemonUrl={pokemon.pokemon?.url} />
                  </li>
                ))}
        </ul>
        {/* <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={pokedexData.length}
          paginate={paginate}
        /> */}
      </div>
    </div>
  );
};

export default Pokedex;
