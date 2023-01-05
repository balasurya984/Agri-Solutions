import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './DiseaseForm.css'
import axios from 'axios'
import Navbar1 from '../navbar';


const DiseaseForm = () => {
  const navigate=useNavigate()
    const [image,setImg]=useState('')
    const [name,setName]=useState('')
    const [disease,setDisease]=useState('')
    const [link,setLink]=useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
      const data = await axios.post('http://localhost:8080/disease',{image,name,disease,link})
      console.log(data.data)
      navigate('/disease')
    }
  return (
    <div>
      <Navbar1 />
      <div style={{fontSize:"18px"}}>
      {/* <form onSubmit={handleSubmit}> */}


        {/* <div class="row mb-3">
              <label id="" class="col-sm-2 col-form-label">Image URL</label>
              <div class="col-md-10">
                <input type="text"  value={image} onChange={e => setImg(e.target.value)} />
              </div>
            </div> */}

            {/* <div class="row mb-3">
                <label id="" class="col-sm-2 col-form-label">Plant Name</label>
                <div class="col-sm-10">
                  <input type="text"  value={name} onChange={e => setName(e.target.value)} />
                </div>
              </div> */}

              {/* <div class="row mb-3">
                <label id="cur" class="col-sm-2 col-form-label">Disease and Remedies</label>
                <div class="col-sm-10">
                  <input type="text" value={disease} onChange={e => setDisease(e.target.value)}/>
                </div>
              </div>

              <div className=' btn1'><button  class="btn btn-primary btn-lg">Submit</button></div> */}
      {/* </form> */}

      <div class="main-container">
                <div class="heading">
                  <h1 class="heading__title">Upload the Plant Details</h1>
                  <p class="heading__credits">Enter the valid details !!</p>
                </div>
                <div class="cards">
                  <div class="card1 card-5">
                    <div class="card__icon"><i class="fa fa-tree"></i></div>
                    <p class="card__exit"><i class="fa fa-times"></i></p>
                    <form onSubmit={handleSubmit}>
                    
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
                      <label  class="col-sm-5 col-form-label"> <strong>Disease and Remedies</strong></label>
                      <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                        <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="text" value={disease} onChange={e => setDisease(e.target.value)} class="form-control-plaintext"  />
                      </div>
                    </div>
                    
                    <div class="form-group row">
                      <label  class="col-sm-5 col-form-label"> <strong>Link to Blog</strong></label>
                      <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                        <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="text" value={link} onChange={e => setLink(e.target.value)} class="form-control-plaintext"  />
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

      </div>
    </div>
  )
}

export default DiseaseForm;
