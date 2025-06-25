import React from "react";
import "./ExpolreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    // this is the explore portion where a header h1 and some paragraph and images of food
    //this is the first div explore menu where all the things store
    <div className="explore-menu" id="explore-menu">
      {/* this is the heading of explore-menu div */}
      <h1>Explore out menu</h1>
      {/* this is the paragraph of explore menu */}
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elecate your dining experience,
        one delicious meal at a time.
      </p>
      {/* this is the list items images and name where we see all the items */}
      {/* in this we use map function to iterate on all the images to show on page */}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="explore-menu-list-item"
              key={index}
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
