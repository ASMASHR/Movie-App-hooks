import React, {useState} from'react'
import './style.css'
import ReactStars from "react-rating-stars-component";
import MovieCard from './MovieCard'
function SearchBar({ inputFilmName,setinputFilmName, inputRate, setinputRate}) {
  const ratingSearch = (newRating) => {
    setinputRate(newRating); };
  const NameSearch=(e)=>{
  setinputFilmName(e.target.value)}
    return (
        <div className="searchFilmForm" >
          <h5>Search: </h5>
          <input type="text" id="searchF" onChange={NameSearch}></input>   
          <ReactStars count={5} onChange={ratingSearch} size={50}  isHalf={true} activeColor="#ffd700"  />  
        </div>
    )}

export default  SearchBar

