import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart()
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options)
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === props.foodItems._id) {
                food = item;

                break;
            }
        }
        console.log(food)
        console.log(new Date())
        if (food !== []) {
            if (food.size === size) { 
                await dispatch({ type: "UPDATE", id: props.foodItems._id, price: finalPrice, qty: parseInt(qty) })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.foodItems._id, name: props.foodItems.name, price: finalPrice, qty: parseInt(qty), size: size, img: props.ImgSrc })
                console.log("Size different so simply ADD one more to the list")
                return
            }
            return
        }
        await dispatch({ type: "ADD", id: props.foodItems.id, name: props.foodItems.name, price: finalPrice, qty: parseInt(qty), size: size });
        // await console.log(data);
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])
    return (
        <div>
            <div class="card mt-3" style={{ "width": "18rem" }}>
                <img src={props.foodItems.img} class="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
                <div class="card-body">
                    <h5 class="card-title">{props.foodItems.name}</h5>
                    <div className='container w-100'>
                        <select className='bg-success h-100 m-2' onChange={(e) => { setQty(e.target.value) }}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='bg-success m-2' ref={priceRef} onChange={(e) => { setSize(e.target.value) }}>
                            {
                                priceOptions.map((data) => {
                                    return <option key={data} value={data} >{data}</option>
                                })
                            }
                        </select>
                        <div className='d-inline fs-5'>
                            ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
