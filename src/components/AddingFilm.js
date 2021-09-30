import React, { useRef, useEffect, useCallback, useState } from 'react';
import './style.css'
import ReactStars from "react-rating-stars-component";

function AddingFilm({ AddFilm, setAddFilm, updateList }) {

   const modalRef = useRef();

    const closeModal = e => {
    if (modalRef.current === e.target) {
      setAddFilm(false);
    }
  };
  const keyPress = useCallback(
   e => {
   if (e.key === 'Escape' && AddFilm) {
  setAddFilm(false);
 console.log('I pressed');
   }
     },
    [setAddFilm, AddFilm]
  );

   useEffect(
   () => {
     document.addEventListener('keydown', keyPress);
     return () => document.removeEventListener('keydown', keyPress);
   },
    [keyPress]
  );
const [filmID, setfilmID]= useState('')
const [filmName, setfilmName]= useState('')
const [filmrate, setfilmrate]= useState('')
const [filmoverview, setfilmoverview]= useState('')
const [filmimage, setfilmimage]= useState('') 

 const handleChange= ()=>{
       let newmovie = {
            id : Math.floor(Math.random() * (100)) ,
            // id will takes a random number between 10 and 100
            filmName : filmName ,
            filmoverview : filmoverview ,
            filmimage:filmimage,
            value : filmrate ,
        }
             setAddFilm(false)
            updateList(newmovie)
            console.log(newmovie.id)
}
const ratingChanged = (newRating) => {
  setfilmrate(newRating)
};
  return (
    <>
      {AddFilm ? (<div className="Background" onClick={closeModal} ref={modalRef}>
                    <div className="ModalWrapper" >
                      <div className="ModalContent">
                        <h2 >Add Movie</h2>
                        <label className="textName"> Movie Name</label>
                        <input type="text" placeholder="Name" id="filmName" onChange={(e)=>setfilmName(e.target.value)} />
                        <label className="textName">rate</label>
                        <ReactStars count={5} onChange={ratingChanged} size={50} isHalf={true} activeColor="#ffd700" id="filmrate" />
                        <label className="textName">Overview</label>
                        <textarea rows="2" cols="10" id="filmoverview" onChange={(e)=>setfilmoverview(e.target.value)}></textarea>
                        <label className="textName">URL</label>
                        <input type="text" placeholder="URL" id="filmimage" onChange={(e)=>setfilmimage(e.target.value)} />
                        <button onClick={handleChange}>Add Movie</button> 
                      </div>
                      <div>
                        <button className="CloseModalButton" onClick={() => setAddFilm(prev => !prev)} >X</button>
                      </div>
                      </div>
                  </div>  
      ) : null}
    </>
  );
};
export default AddingFilm