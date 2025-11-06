import React from "react";

const CategoryCard = ({ title, img }) => {
  return (
    <div
      className="
        bg-white 
        dark:bg-[#2a2a2a] 
        rounded-xl 
        overflow-hidden 
        shadow-md 
        hover:shadow-xl 
        transform 
        transition-all 
        duration-300 
        hover:-translate-y-2
        border 
        border-gray-200 
        dark:border-gray-700
      "
    >
      <img
        src={img}
        alt={title}
        className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-5 text-center">
        <h3
          className="
            text-xl 
            font-semibold 
            text-gray-800 
            dark:text-white 
            transition-colors 
            duration-300
          "
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
