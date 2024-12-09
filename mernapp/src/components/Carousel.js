import React from 'react'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >

        <div className="carousel-inner" id="carousel" >
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." style={{"objectFit":"contain !important"}}/>
            <div className="carousel-caption d-none d-md-block" style={{"zIndex":"999"}}>
              <form className="d-flex" >
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." style={{"objectFit":"contain !important"}}/>
            <div className="carousel-caption d-none d-md-block">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/7363685/pexels-photo-7363685.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." style={{"objectFit":"contain !important"}}/>
            <div className="carousel-caption d-none d-md-block">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
