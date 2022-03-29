import bug from "../assets/images/types_icons/bug.svg";
import dark from "../assets/images/types_icons/dark.svg";
import dragon from "../assets/images/types_icons/dragon.svg";
import electric from "../assets/images/types_icons/electric.svg";
import fairy from "../assets/images/types_icons/fairy.svg";
import fighting from "../assets/images/types_icons/fighting.svg";
import fire from "../assets/images/types_icons/fire.svg";
import flying from "../assets/images/types_icons/flying.svg";
import ghost from "../assets/images/types_icons/ghost.svg";
import grass from "../assets/images/types_icons/grass.svg";
import ground from "../assets/images/types_icons/ground.svg";
import ice from "../assets/images/types_icons/ice.svg";
import normal from "../assets/images/types_icons/normal.svg";
import poison from "../assets/images/types_icons/poison.svg";
import psychic from "../assets/images/types_icons/psychic.svg";
import rock from "../assets/images/types_icons/rock.svg";
import steel from "../assets/images/types_icons/steel.svg";
import water from "../assets/images/types_icons/water.svg";

export const getTypeIcon = (type) => {
  switch (type) {
    case "bug":
      return bug;

    case "dark":
      return dark;

    case "dragon":
      return dragon;

    case "electric":
      return electric;

    case "fairy":
      return fairy;

    case "fighting":
      return fighting;

    case "fire":
      return fire;

    case "flying":
      return flying;

    case "ghost":
      return ghost;

    case "grass":
      return grass;

    case "ground":
      return ground;

    case "ice":
      return ice;

    case "normal":
      return normal;

    case "poison":
      return poison;

    case "psychic":
      return psychic;

    case "rock":
      return rock;

    case "steel":
      return steel;

    case "water":
      return water;

    default:
      return "";
  }
};

export default getTypeIcon;
