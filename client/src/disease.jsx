import './disease.css'
import DiseaseForm from './DiseaseForm/DiseaseForm';
import React,{useEffect} from 'react'
import { useState } from 'react';
import axios from 'axios';
import Card4 from './card4';
import './card4.scss'
import './form.css'
import Navbar1 from './navbar';

const Disease = ()=>{
    const [dis,setDis]=useState(false)
    const [disease,setDisease]=useState([])
    const [select,setSelect]=useState('')
    const [disp,setDisp]=useState(false)

    const getData =async()=>{
        const data= await axios.get('https://agri-solutions.herokuapp.com/disease')
        setDisease(data.data)
    }
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        if(disease){
            setDis(true)
        }
    },[disease])

    const handleFilter =async()=>{
        
         let v = select.toLowerCase()
         const data =await disease.filter(f=> f.name.toLowerCase().includes(v) )
         console.log(data)
         await setDisease(data)
         setDisp(true)
     }
{
    return(
        <div >
            <Navbar1 />
            <div class="title">
                <h1>Choose the plant and identify disease!!</h1>
            </div >

            <div className="cards">
            <div className="card3 card-5">
                <h2 style={{textAlign:"center"}}>Select the Plant</h2>
                <input value={select} onChange={e=>setSelect(e.target.value)} type="text" placeholder="Plant name" style={{width:"300px",height:"38px",borderRadius:"20px",paddingLeft:"20px",paddingRight:"20px",background:"white",marginLeft:"25%"}} /><br />
                <div style={{marginLeft:"15px"}} className=' card__apply'>
                    <button onClick={handleFilter} className="btn btn-info">Submit</button>
                </div> 
            </div>
            </div>

            {dis && disp &&
            <div class="image-block">
                {/* <tr >
                    <th>S.No</th>
                    <th>Image</th>
                    <th>Plant Name</th>
                    <th>View</th>
                </tr> */}

              {disease.map((d,idx)=>(
                // <tr key={d._id}>
                //     <td>{idx}</td>
                //     <td className='plantimg'><img src={d?.image} height="150px" alt="" /></td>
                //     <td>{d.name}</td>
                //     <td>{d.disease}</td>
                // </tr>
                <figure >
                    <h1>{d.name}</h1>
                    <img src={d?.image} alt="" />
                    <figcaption>
                        <h3>
                          {d.name}
                        </h3>
                        <p>{d.disease}</p>
                        <button className='btn btn-success' style={{fontSize:"12px",color:"black"}}> <a href={`${d?.link}`}>Link</a></button>
                        
                    </figcaption>
                </figure>

              ))}


            </div>
}

<div>
            {/* <figure class="image-block">
	<h1>{d.name}</h1>
	<img src={d?.image} alt="" />
	<figcaption>
		<h3>
			More Info
		</h3>
		<p>{d.disease}</p>
		<button>
			More Info
		</button>
	</figcaption>
</figure> */}
        </div>         
        </div>
    )
}
}
export default Disease;