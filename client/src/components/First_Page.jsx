import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

function FirstPage()
{
    return(
        <div>
            <button>
                User
            </button>
            <button>
                Admin
            </button>
        </div>
    )
}