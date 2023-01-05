import logo from './logo.svg';
import './App.css';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import PlantForm from './PlantForm/PlantForm';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './card3';
import { useNavigate } from 'react-router'
import Navbar1 from './navbar';

function Plant() {
  const [plant,setPlants]=useState()
  const [dis,setDis]=useState(false)
  const getData =async()=>{
      const data = await axios.get('https://agri-solutions.herokuapp.com/plant')
      console.log(data.data)
      setPlants(data.data)
  }

     const Delete = async(e,id)=>{
      e.preventDefault()
    const data = await axios.delete(`https://agri-solutions.herokuapp.com/plant/${id}`)
    getData()
    console.log(data.data)

  }

  useEffect(()=>{
    getData()
  },[])
  useEffect(()=>{
      if(plant){
        setDis(true)
      }
  },[plant])
  
  return (
    <div>
      <Navbar1/>
          <div class="title">
            <h1>Discover our featured plants!!!</h1>
          </div >
{dis &&
          <div class="cards3">
                {/* <tr >
                    <th>S.No</th>
                    <th>Plant Image</th>
                    <th>Plant Name</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr> */}
                  {plant.map((p,idx)=>(
                    // <tr key={p._id}>
                    //   <td>{idx+1}</td>
                    //     <td className='plantimg'><img  height= "150px" src={p.image} alt="" /></td>
                    //     <td>{p.name}</td>
                    //     <td>{p.prize}</td>
                    //     <td><button className='btn btn-success' style={{fontSize:"12px",color:"black"}}> <a href={`${p.link}`}>Buy Now</a></button></td>
                    // </tr>
                    <ul class="cards3">
  <li>
    <a href="" class="card">
      <img src={p.image} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={p.image} alt="" />
          <div class="card__header-text">
            <h3 class="card__title3"><strong>{p.name}</strong></h3>            
            <span class="card__status">₹ {p.prize}</span>
          </div>
        </div>
        <p style={{marginLeft:"80px"}}><button className='btn btn-success' style={{fontSize:"12px",color:"white",}}> <a href={`${p.link}`}>Buy Now</a></button>
        <button style={{marginLeft:"19px",fontSize:"12px"}} className='btn btn-danger' onClick={(e)=>Delete(e,p._id)}>Delete</button>
        </p>
        
      </div>
    </a>      
  </li>
  
</ul>
                ))}
            </div>
}



    </div>
  );
}

export default Plant;
