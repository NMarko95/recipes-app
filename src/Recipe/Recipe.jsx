import "./recipe.css";

const Recipe = ({ recipe }) => {
  const { id, title, description, ingredients, tags, image } = recipe;

  return (
    <div className="recipe">
      <h4 className="recipe-title">{title}</h4>
      <img alt="" src={image} className="recipe-image" />
      {ingredients.length !== 0 && (
        <div className="recipe-ingredients">
          {ingredients.map((ingredient, index) => {
            return (
              <span className="ingredient" key={index}>
                -{ingredient}
              </span>
            );
          })}
        </div>
      )}
      {description !== "" && (
        <div className="recipe-description">{description}</div>
      )}
    </div>
  );
};

export default Recipe;
