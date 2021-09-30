import React from 'react'
import './style.css'
import ReactStars from "react-rating-stars-component";
function MovieCard({movies, inputFilmName,inputRate}) {  
        // when searching , the movies list will takes only the movies that answer the search condition
        var x=false
    if (inputFilmName.length>0)
        {movies=movies.filter((el =>el.filmName.toUpperCase().includes(inputFilmName.toUpperCase())))
    }
    if (inputRate>0)
        { movies=movies.filter((el =>(el.value<=inputRate)))
        }
    const ratingChanged =()=>{
        
    }
    return (
          
            

        <div >
           
            <h2 className="moviesTitle">Movies</h2>
       
                <div className="Movies-container">
                            
                   {movies.map(el=>
                                
                                <div className="Movies-card" key ={el.id}>
                                    <img className="filmImg" src={el.filmimage} />
                                    <h1>{el.filmName}</h1>   
                                    <ReactStars count={5} value={el.value} edit={x} onChange={ratingChanged} size={50} isHalf={true} activeColor="#ffd700" />
                                    <h3>Overview</h3>
                                    <p>{el.filmoverview}</p>
                                </div>
                                
                                
                                )}
                 
                 </div>
          
        </div> 
        
    )
}

export default MovieCard
