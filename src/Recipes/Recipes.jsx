import "./recipes.css";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ recipes }) => {
  return (
    <div className="recipes-wrapper">
      <section className="recipes">
        {recipes.map((recipe) => {
          return <Recipe recipe={recipe} key={recipe.id} />;
        })}
      </section>
    </div>
  );
};

export default Recipes;
