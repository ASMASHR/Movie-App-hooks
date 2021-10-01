import React, {  useState } from 'react';
import './style.css'
import ReactStars from "react-rating-stars-component";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function AddingFilm({ setAddFilm, updateList }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [filmName, setfilmName]= useState('')
  const [filmrate, setfilmrate]= useState('')
  const [filmoverview, setfilmoverview]= useState('')
  const [filmimage, setfilmimage]= useState('') 
  const [filmTrailer,setfilmTrailer]=useState('')
  const [filmDirector, setfilmDirector]=useState('')
  const [filmWriter, setfilmWriter]=useState('')
  const [filmType, setfilmType]=useState('')

  const handleChange= ()=>{
       let newmovie = {
            id : Math.floor(Math.random() * (100)) ,
            // id will takes a random number between 10 and 100
            filmName : filmName ,
            filmoverview : filmoverview ,
            filmimage:filmimage,
            value : filmrate ,
            filmTrailer:filmTrailer,
            filmDirector:filmDirector,
            filmWriter:filmWriter,
            filmType: filmType,
        }
             setAddFilm(false)
            updateList(newmovie)
            setShow(false)
  }
  const ratingChanged = (newRating) => {
    setfilmrate(newRating)
  };
  return (
    <>
      <Button  onClick={handleShow}  style={{ width: "40%",fontSize: "30px",fontFamily:"time new roman",margin:" 4px 2px",boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",cursor: "pointer"}}>
        Add Movie
      </Button>
      <Modal show={show} onHide={handleClose} style={{}}>
        <Modal.Header closeButton style={{backgroundColor:"#f2f2f2"}}>
          <Modal.Title className="modal-Title" >Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="ModalContent">
            <label className="textName"> Movie Name</label>
            <input type="text" placeholder="Name" id="filmName" onChange={(e)=>setfilmName(e.target.value)} />
            <label className="textName">rate</label>
            <ReactStars count={5} onChange={ratingChanged} size={50} isHalf={true} color="#282929" activeColor="#ffd700" id="filmrate" />
            <label className="textName">Overview</label>
            <textarea rows="2" cols="10" id="filmoverview" onChange={(e)=>setfilmoverview(e.target.value)}></textarea>
            <label className="textName">URL</label>
            <input type="text" placeholder="URL" id="filmimage" onChange={(e)=>setfilmimage(e.target.value)} />
            <label className="textName"> Movie trailer</label>
            <input type="text" placeholder="trailer" id="filmTrailer" onChange={(e)=>setfilmTrailer(e.target.value)} />
            <label className="textName"> Movie Director</label>
            <input type="text" placeholder="Director" id="filmDirector" onChange={(e)=>setfilmDirector(e.target.value)} />
            <label className="textName"> Movie writer</label>
            <input type="text" placeholder="Writer" id="filmWriter" onChange={(e)=>setfilmWriter(e.target.value)} />
            <label className="textName"> Movie type</label>
            <input type="text" placeholder="type" id="filmType" onChange={(e)=>setfilmType(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#f2f2f2"}}>
          <Button onClick={handleChange} variant="success">Add Movie</Button> 
        </Modal.Footer>
      </Modal>  
    </>
  );
};
export default AddingFilm