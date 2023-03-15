import React, { useState, useEffect } from "react";

export default function FormProjects (){
    const [input, setInput] = useState({
        name: "",
        title: "",
        description: "",
        image: "",
        location: "",
        cost: "",
      });
    
     /*useEffect(() => {
              
            },[]);
        
    function hadleSubmit(e) {
            e.preventDefault();
        }*/
    
    function handleChange(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
    }

    
      return (
        <div>
          <h1>
            Here you can submit your projects so that we can help your community
          </h1>
          <br />
          <form>
            <label>Name of the project: </label>
            <input type="text" name="name" placeholder="Here goes the name" value={input.name} onChange={(e) => handleChange(e)} />
            <br />
            <label>Title of the project: </label>
            <input type="text" name="title" placeholder="Here goes the title" value={input.title} onChange={(e) => handleChange(e)} />
            <br />
            <label>Description of the project: </label>
            <input
              type="text"
              name="description"
              placeholder="Here goes the description"
              value={input.description} onChange={(e) => handleChange(e)}
            />
            <br />
            <label>Image of the project: </label>
            <input type="text" name="image" placeholder="Here goes the URL" value={input.image} onChange={(e) => handleChange(e)} />
            <br />
            <label>Location of the project: </label>
            <input
              type="text"
              name="location"
              placeholder="Here goes the location"
              value={input.location} onChange={(e) => handleChange(e)}
            />
            <br />
            <label>Amount of funds needed for the project: </label>
            <input
              type="number"
              name="cost"
              placeholder="Here goes the total funds needed"
              value={input.cost} onChange={(e) => handleChange(e)}
            />
            <div>
              <button type="submit">Upload proposal</button>
            </div>
          </form>
        </div>
      );
}

//Solo el achivo index de Pages recibe este export 