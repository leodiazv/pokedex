import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "../assets/styles/PokemonInfo.css";
import otraFuncion, { getTypeIcon } from "../utils/getTypeIcon";

const PokemonInfo = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, [id]);

  const type = pokemon.types?.[0].type.name;

  return (
    <div className={`pokemon-info-container ${pokemon.types?.[0].type.name}`}>
      <div className="big-card">
        <header>
          <Link to="/pokedex">
            <p>
              <span className="material-icons-outlined">arrow_back</span>Pokedex
            </p>
          </Link>
        </header>
        <div className="pokemon-number">
          <p>#{("000" + pokemon.id).slice(-3)}</p>
          <img src={pokemon.sprites?.other["official-artwork"].front_default} />
        </div>

        <div className="general-info-container">
          <div className="pokemon-name">
            <img src={otraFuncion(type)} />
            <div>
              <h2 className="type">{type}</h2>
              <h2 className="name">{pokemon.name}</h2>
            </div>
          </div>
          <div className="general-stats">
            <div className="first-stat">
              <p>
                <span>{pokemon.height / 10} M</span>
              </p>
              <p>Height</p>
            </div>

            <div className="mid-stat">
              <p>
                <span>{pokemon.weight / 10} KG</span>
              </p>
              <p>Weight</p>
            </div>

            <div className="last-stat">
              <p>
                <span>{pokemon.abilities?.[0].ability?.name}</span>
              </p>
              <p>Abilities</p>
            </div>
          </div>
        </div>
        <div className="stats">
          <h2>Stats</h2>
          <div className="bars-containers">
            {pokemon.stats?.map((pokemonStats) => (
              <div key={pokemonStats.stat.name} className="bar-stat">
                <h3>{pokemonStats.stat.name}</h3>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar-status"
                    style={{ width: `${pokemonStats.base_stat * 0.5}%` }}
                  ></div>
                </div>
                <p>{pokemonStats.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PokemonInfo;
