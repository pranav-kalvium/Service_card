import React from "react";

const ServiceCard = ()=> {
    const service ={
        title:"WEB DEVELOPMENT",
        description:"This is a course for the total frontend and backend together which makes your skill strenghten and make you company ready.",
        price:"$999",
        img:"https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHRtbCUyMGNzc3xlbnwwfHwwfHx8MA%3D%3D",
        titles:"Design",
        descriptions:"This is a course for the Hardcore design together which makes your creativity and desiginig at next level.",
        prices:"$1499",
        imgs:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlnbWF8ZW58MHx8MHx8fDA%3D,"
    }

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          
          <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
    
         
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
            <hr></hr>
        
            <p className="mt-2 text-gray-700">{service.description}</p>
            <hr></hr>
            <p className=" mt-2 text-green-900 text-3xl font-bold">Price{service.price}</p>
    
    
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Buy Now</button>


            <br>
            </br>
            <hr></hr>
            <img src={service.imgs} alt={service.titles} className="w-full h-48 object-cover" />
            <hr></hr>
    
         
            <div className="p-6">
             <h2 className="text-xl font-bold text-gray-800">{service.titles}</h2>
            <hr></hr>
  
            <p className="mt-2 text-gray-700">{service.descriptions}</p>
            <hr></hr>
            <p className=" mt-2 text-green-900 text-3xl font-bold">Price{service.prices}</p>


            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Buy Now</button>
            </div>

            
            
          </div>
        </div>
      );


    }





    
            export default ServiceCard;