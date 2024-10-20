import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";
import Tags from "./Tags/Tags";
import Recipes from "./Recipes/Recipes";

function App() {
  const allRecipes = [
    {
      id: 1,
      title: "Naslov 1",
      tags: [],
      ingredients: [
        "Ingredient 1",
        "Ingredient 2",
        "Ingredient 3",
        "Ingredient 4",
        "Ingredient 5",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum ratione nam non voluptatum, quisquam consectetur maxime cumque a doloremque necessitatibus labore adipisci, possimus quam iusto harum sed, deleniti perspiciatis.",
      image:
        "https://thumbs.dreamstime.com/b/south-indian-meals-served-banana-leaf-traditional-cuisine-57371330.jpg",
    },
    {
      id: 2,
      title: "Naslov 2",
      tags: [],
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum ratione nam non voluptatum, quisquam consectetur maxime cumque a doloremque necessitatibus labore adipisci, possimus quam iusto harum sed, deleniti perspiciatis.",
      image:
        "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
    },
    {
      id: 3,
      title: "Naslov 3",
      tags: [],
      ingredients: [
        "Ingredient 1",
        "Ingredient 2",
        "Ingredient 3",
        "Ingredient 4",
        "Ingredient 5",
        "Ingredient 6",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum ratione nam non voluptatum, quisquam consectetur maxime cumque a doloremque necessitatibus labore adipisci, possimus quam iusto harum sed, deleniti perspiciatis.",
      image:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2023-12-slow-cooker-beef-stew%2Fslow-cooker-beef-stew-129",
    },
  ];

  const [recipes, setRecipes] = useState(allRecipes);

  return (
    <div className="recipes-main">
      <h2>RECIPES</h2>
      <div className="search-bar">
        <input placeholder="Search for recipe..." />
        <div className="icon">
          <SearchIcon style={{ height: "80%", width: "80%" }} />
        </div>
      </div>
      <Tags />
      <Recipes recipes={recipes} />
    </div>
  );
}

export default App;
