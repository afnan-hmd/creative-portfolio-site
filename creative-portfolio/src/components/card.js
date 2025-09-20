import React from "react";


export default function Card({title, desc}) {



  return (
      <div className="group border-2 border-(--primary) flex flex-col grow basis-auto p-4
                      min-w-xs max-w-sm rounded-2xl text-start hover:shadow-lg hover:shadow-gray-400

        ">
      <h4 className="text-xl font-semibold">{title}</h4>
      <div
        className="bg-(--secondary) w-[50px] h-1 hover:transition duration-500 ease-in-out
        group-hover:w-[100px] my-2">
      </div>
      <p>{desc}</p>
      </div>
  );
}
