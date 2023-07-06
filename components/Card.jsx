import React from "react";

function Card({ item }) {
  return (
    <div className="w-[300px] h-full bg-white shadow-md rounded-md">
      <img
        className="w-[100%] h-[180px] object-cover rounded-t-md"
        src={item.image}
        alt=""
      />
      <div className="p-5">
        <p className="mt-5 text-lg text-gray-600">{item.date}</p>
        <h1 className="font-serif text-2xl font-semibold my-5">{item.title}</h1>
        <p className="text-[#0054a5] font-semibold mt-5">
          {item.category.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default Card;
