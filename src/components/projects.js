
import Card from "./card";
import sql from './../data/data.js';



export default async function Project() {
  let data

  try {
    data= await sql`SELECT * from projects`
  } catch (error) {
    throw error
  }

  const projects= data;


  return (
    <div id='projects' className="text-(--text) p-16 flex flex-col text-center">
      <h3 className="text-2xl font-bold mb-1">Recent Projects</h3>
      <p className="mb-4">projects description</p>
      <div>
        <div className="flex flex-row justify-center items-stretch content-center gap-4 flex-wrap">
	        {projects.map((item, index) => (
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
