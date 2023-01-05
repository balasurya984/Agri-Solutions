import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navstyle.css"

export default function Navbar1()
{
    return(
        <>
        <Navbar style={{borderRadius:"20px"}} sticky="top" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link style={{fontSize:"30px",color:"white"}} className="link" to="/home">AGRI SOLUTIONS</Link>
                        <Link className="link nav11" to="/home">Home</Link>
                        <Link className="link" to="/buyplant">Buy Plant</Link>
                        <Link className="link" to="/addplant">Add Plant</Link>
                        <Link className="link" to="/disease">Plant Disease</Link>
                        <Link className="link" to="/adddisease">Add Plant Disease</Link>
                        <Link style={{color:"red"}} className="link" to="/logout">Logout</Link>
                        
                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>
        </>
    )
}