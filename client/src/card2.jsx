import './card2.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function Card2()
{
    return(
        <div class="main-container">
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
        <label  class="col-sm-2 col-form-label" label="Date"><strong>Date</strong></label>
        <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"4px"}}>
          <input style={{width:"300px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px"}} type="date" id='Date' readonly class="form-control-plaintext" label="Date" />
        </div>
      </div>

      <div class="form-group row">
        <label  class="col-sm-2 col-form-label" label="Timing"> <strong>Timing</strong></label>
        <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
          <input style={{width:"300px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px"}} type="time" id='Time' readonly class="form-control-plaintext" label="Date" />
        </div>
      </div>
      <br />
      <p class="card__apply">
        <a class="card__link" href="#"><strong>Create Slots</strong> <i class="fa fa-arrow-right"></i></a>
      </p>
      </form>
      
    </div>
    
  </div>
</div>
    )
}

export default Card2;