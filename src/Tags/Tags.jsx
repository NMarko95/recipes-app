import { useState } from "react";
import "./tags.css";

const Tags = () => {
  const tags = [
    "All",
    "Desert",
    "Meal",
    "Cake",
    "Vegan",
    "Barbecue",
    "Pasta",
    "Salad",
  ];

  const [selected, setSelected] = useState("All");

  const setClassName = (tag) => {
    let className = "tag";
    if (tag === selected) className += " selected";
    return className;
  };

  const selectTag = (tag) => {
    if (tag === selected) return;
    setSelected(tag);
  };

  return (
    <div className="tags-wrapper">
      <div className="tags">
        {tags.map((tag, index) => {
          return (
            <span
              className={setClassName(tag)}
              key={index}
              onClick={() => selectTag(tag)}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
