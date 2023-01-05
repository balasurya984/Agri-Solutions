import React from "react";
import './styles.css';
import './home.scss'
import Navbar1 from "./navbar";
import Extra1 from "./extra/extra1";


function Home()
{
    return(
      
       <div>
        <Navbar1 />
        <div className="container1 blur" >
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="Snow" style={{width:"100%",borderRadius:"20px"}}   />
          <h1 style={{marginTop:"190px"}} className="centered">Experience The World Class Agriculture</h1>
        </div>
       <div className="wrapper grid1 ">
           <div class="box box1">
          <img src="https://static.dezeen.com/uploads/2017/05/pinterest-roundups-landscape-and-urbanism-roof-gardens_dezeen_2364_ss_0-1-852x608.jpg" alt="" />
        </div>
        <div class="box box2">
          <img src="https://images.unsplash.com/photo-1580982327559-c1202864eb05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        </div>
        <div class="box box3">
          <img src="https://i.ytimg.com/vi/4O3ZaxgYG-4/maxresdefault.jpg" alt="" />
        </div>
        <div class="box box4">
          <img src="https://cdn.cdnparenting.com/articles/2021/07/19122940/1809969313.jpg" alt="" />
        </div>
        </div>

        <Extra1 />
        
        

        <div className="section contact">
        <div class="row">
        <div class="col">
          <h2 style={{color:"black"}}>EXCELLENT SUPPORT</h2>
          <p>
            We love our customers and they can reach us any time of day we will
            be at your service 24/7
          </p>
          <a href="" class="btn btn-1">Contact</a>
        </div>
        <div class="col">
          <form action="">
            <div>
              <input type="email" placeholder="Email Address" />
              <a href="">Send</a>
            </div>
          </form>
        </div>
      </div>
        </div>

        {/* <div class="letter-image">
  <div class="animated-mail">
    <div class="back-fold"></div>
    <div class="letter">
      <div class="letter-border"></div>
      <div class="letter-title"></div>
      <div class="letter-context"></div>
      <div class="letter-stamp">
        <div class="letter-stamp-inner"></div>
      </div>
    </div>
    <div class="top-fold"></div>
    <div class="body"></div>
    <div class="left-fold"></div>
  </div>
  <div class="shadow"></div>
</div> */}



      </div>
  
    )
}
export default Home;