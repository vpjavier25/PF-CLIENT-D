import React from "react";

export default function Pagination ({projectsPerPage, projects, page, currentPage}){
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(projects/projectsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <div >
            {currentPage>1&&<button  onClick={()=>page(currentPage-1)}>Back</button>}       
            <div >
                {pageNumbers&&pageNumbers.map(num=>{
                    return(
                        <button key={num} onClick={()=>page(num)}>{num}</button>
                    )}
                )}
            </div>
            {currentPage< pageNumbers[pageNumbers.length-1]  && <button onClick={()=>page(currentPage+1)}>Next</button>}   
        </div>
        
    )
}
