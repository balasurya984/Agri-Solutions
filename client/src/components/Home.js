import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar1 from "../navbar";

const Logout = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>

    <Navbar1/>
    <div style={{marginTop:"10%"}}>
      <div style={{margin:"80px",width:"500px",marginLeft:"32%"}}  className="p-4 box mt-3 text-center">
        <strong>❤️ Thank you for visiting our site ❤️</strong><br />
        
        <p></p>
        <h4>User Email : {user && user.email}</h4>

        <div className="d-grid gap-2" >
        <Button style={{fontSize:"15px",marginTop:"20px"}} variant="primary" onClick={handleLogout}>
          Click here Log out
        </Button>
      </div>
      </div>
      
    </div>
    </>
  );
};

export default Logout;
