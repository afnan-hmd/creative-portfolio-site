'use client'

import React, {useState, useEffect} from "react";
import Card from "./card";
import services from "./../data/servicesData.json";



export default function Service() {
  const [serviceData, setServiceData] = useState(services);

  useEffect(() => {
    setServiceData(services);
  }, []); 

  return (
    <div id='services' className="text-(--text) p-16 flex flex-col text-center">
      <h3 className="text-2xl font-bold mb-1">Services</h3>
      <p className="mb-4">description</p>
      <div>
        <div className="flex flex-row justify-center items-stretch content-center gap-4 flex-wrap">
	        {serviceData.services.map((item, index) => (
            <Card 
              key = {index}
              title = {item.title}
              desc = {item.description}
            />
	        ))}
	  
        </div>
      </div>

    </div>

  );
}
