import React from 'react'
import styled from 'styled-components'

const Decoration = styled.div `
     .container-dropdrown{
        background: #E8E8E8;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 140px;
        display: flex;
        flex-direction: column;
       
     }

     .seeorder{
        margin: 0;
        position: relative;
        font-weight: 500;
        font-size: 16px;
        border-bottom: 1px solid black;
        padding: 8px 0px 8px 10px;
     
        text-decoration: none;
        color: black;
     }

     .logout {
        margin:0;
        padding: 8px 0px 8px 10px;
        font-weight: 500;
        font-size: 16px;
        
        text-decoration: none;
        color: black;
     }
     
`
function Maindropdown() {
    return (
        <Decoration>
        <div>
            <div className="container-dropdrown">
                <a href="/myorder" className="seeorder">My order</a>
                <a href="/login" className="logout">Sign out</a>
            </div>
        </div>
        </Decoration>
    )
}

export default Maindropdown
