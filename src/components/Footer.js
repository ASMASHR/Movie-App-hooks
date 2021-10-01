import React from 'react'

function Footer() {
  return (
  <footer className="text-center text-lg-start  text-muted" style={{backgroundColor:"#f2f2f2",borderTop:"3px solid white"}}>
    <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
      <div className="me-5 d-none d-lg-block" style={{color:'black', fontWeight:"bold"}}>
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-google"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-youtube"></i>
        </a>
      
      </div>
    </section>
    <div className="text-center p-4" style={{backgroundColor:"#f2f2f2" ,color:"black" }}>
       © 2021 Copyright :
      <a className="text-reset fw-bold" href="#"> MOVIES APP</a>
    </div>
  </footer>
    )}

export default Footer
