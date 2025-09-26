import Card from "./card";
import sql from './../data/data.js';

export default async function Service() {
   let data

  try {
    data= await sql`SELECT * from services`
  } catch (error) {
    throw error
  }

  const services= data;


  return (
    <div id='services' className="text-(--text) p-16 flex flex-col text-center">
      <h3 className="text-2xl font-bold mb-1">Services</h3>
      <p className="mb-4">description</p>
      <div>
        <div className="flex flex-row justify-center items-stretch content-center gap-4 flex-wrap">
	        {services.map((item, index) => (
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
