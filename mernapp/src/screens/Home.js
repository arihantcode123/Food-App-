import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card';
// import Carousel from '../components/Carousel';

export default function Home() {
    const [search,setSearch]=useState('');
    const [foodCat, setFoodCat] = useState([])
    const [foodItem, setFoodItem] = useState([])

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();

        setFoodItem(response[0])
        setFoodCat(response[1])
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner" id="carousel">
                        <div className='carousel-caption' style={{zIndex:"10"}}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </div>
                        </div>
                        <div class="carousel-item active">
                            <img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.pexels.com/photos/7363685/pexels-photo-7363685.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='container'>
                {
                    foodCat!==[] ? foodCat.map((data) => {
                        return <div className='row mb-3'>
                            <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                            <hr />
                            {foodCat!==[] ? foodItem.filter((item) => {
                                return (item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                            }) 
                            .map((filterItems) => {
                                return (
                                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                        <Card foodItems={filterItems}
                                            options={filterItems.options[0]}
                                        />
                                    </div>
                                )
                            }) : <div>No such data found</div>}
                        </div>
                    })
                        : <div>***</div>

                }
            </div>
            <div><Footer /></div>
        </div>
    )
}
