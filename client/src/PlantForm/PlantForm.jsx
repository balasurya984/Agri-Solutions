import React, { useState } from 'react'
import './PlantForm.css'
import { useNavigate } from 'react-router'
import axios from 'axios';
import '../card2.css'
import Navbar1 from '../navbar';

const PlantForm = () => {
    const navigate=useNavigate()
    const [image,setImg]=useState('')
    const [name,setName]=useState('')
    const [prize,setPrize]=useState(0)
    const [link,setLink]=useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault()
      const data = await axios.post('https://agri-solutions.herokuapp.com/plant',{image,name,prize,link})
      console.log(data.data)
      navigate('/buyplant')
    }
  //   const Delete = async(e)=>{
  //     e.preventDefault()
  //   const data = await axios.delete('http://localhost:8080/plant',)
  //   console.log(data.data)
  //   navigate('/buyplant')
  // }

  return (
    <div>
      <Navbar1 />
      <div  style={{fontSize:"18px"}}>
      <form>
        {/* <input type="text" value={image} onChange={e => setImg(e.target.value)} />
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="number" value={prize} onChange={e => setPrize(e.target.value)}  />
        <input type="text" value={link} onChange={e => setLink(e.target.value)} />
        <button>Submit</button> */}

        {/* <div class="row mb-3">
              <label id="" class="col-sm-2 col-form-label">Image URL</label>
              <div class="col-md-10">
                <input type="text"  value={image} onChange={e => setImg(e.target.value)} />
              </div>
            </div>

            <div class="row mb-3">
                <label id="" class="col-sm-2 col-form-label">Plant Name</label>
                <div class="col-sm-10">
                  <input type="text"  value={name} onChange={e => setName(e.target.value)} />
                </div>
              </div>

              <div class="row mb-3">
                <label id="cur" class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                  <input type="number" value={prize} onChange={e => setPrize(e.target.value)}/>
                </div>
              </div>

              <div class="row mb-3">
                <label id="" class="col-sm-2 col-form-label">Link to Buy</label>
                <div class="col-sm-10">
                  <input type="text"  value={link} onChange={e => setLink(e.target.value)} />
                </div>
              </div>
              <div className=' btn1'><button  class="btn btn-primary btn-lg" onClick={handleSubmit}>Submit</button></div> */}
              {/* <div className=' btn1'><button  class="btn btn-danger btn-lg" onClick={Delete}>Delete</button></div> */}


              <div class="main-container">
                <div class="heading">
                  <h1 class="heading__title">Upload the Plant Details</h1>
                  <p class="heading__credits">Enter the valid details !!</p>
                </div>
                <div class="cards">
                  <div class="card1 card-4">
                    <div class="card__icon"><i class="fa fa-tree"></i></div>
                    <p class="card__exit"><i class="fa fa-times"></i></p>
                    <form >
                    
                    <div class="form-group row">
                      <label  class="col-sm-3 col-form-label" ><strong>Plant Name</strong></label>
                      <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"4px"}}>
                        <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}}  type="text"  value={name} onChange={e => setName(e.target.value)} class="form-control-plaintext"  />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label  class="col-sm-3 col-form-label"> <strong>Image URL</strong></label>
                      <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                        <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="text"  value={image} onChange={e => setImg(e.target.value)} class="form-control-plaintext"  />
                      </div>
                    </div>
                    
                    <div class="form-group row">
                      <label  class="col-sm-3 col-form-label"> <strong>Price</strong></label>
                      <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                        <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="number" value={prize} onChange={e => setPrize(e.target.value)} class="form-control-plaintext"  />
                      </div>
                    </div>
                    
                    <div class="form-group row">
                      <label  class="col-sm-3 col-form-label" > <strong>Link to buy</strong></label>
                      <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                        <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="text"  value={link} onChange={e => setLink(e.target.value)} class="form-control-plaintext"  />
                      </div>
                    </div>



      <br />
      <p class="card__apply">
        <div className=' btn1'><button  class="btn btn-primary btn-lg" onClick={handleSubmit}>Submit</button></div>
      </p>
      </form>
      
    </div>
    
  </div>
</div>


      </form>
      </div>
      
      {/* <div class="main-container">
  <div class="heading">
    <h1 class="heading__title">Upload the Plant Details</h1>
    <p class="heading__credits">Book the available slots !!</p>
  </div>
  <div class="cards">
    <div class="card card-4">
      <div class="card__icon"><i class="fa fa-tree"></i></div>
      <p class="card__exit"><i class="fa fa-times"></i></p>
      <form >
      
      <div class="form-group row">
        <label  class="col-sm-3 col-form-label" ><strong>Plant Name</strong></label>
        <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"4px"}}>
          <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}}  type="text"  value={name} onChange={e => setName(e.target.value)} class="form-control-plaintext"  />
        </div>
      </div>

      <div class="form-group row">
        <label  class="col-sm-3 col-form-label"> <strong>Image URL</strong></label>
        <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
          <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="text"  value={image} onChange={e => setImg(e.target.value)} class="form-control-plaintext"  />
        </div>
      </div>
      
      <div class="form-group row">
        <label  class="col-sm-3 col-form-label"> <strong>Price</strong></label>
        <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
          <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="number" value={prize} onChange={e => setPrize(e.target.value)} class="form-control-plaintext"  />
        </div>
      </div>
      
      <div class="form-group row">
        <label  class="col-sm-3 col-form-label" > <strong>Link to buy</strong></label>
        <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
          <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="text"  value={link} onChange={e => setLink(e.target.value)} class="form-control-plaintext"  />
        </div>
      </div>



      <br />
      <p class="card__apply">
        <div className=' btn1'><button  class="btn btn-primary btn-lg" onClick={handleSubmit}>Submit</button></div>
      </p>
      </form>
      
    </div>
    
  </div>
</div> */}
      
    </div>
    
  )
}

export default PlantForm
