import React from 'react'
import styled from 'styled-components'


const Decoration = styled.div`

    .pathbox {
       display: flex;
       margin: 0 auto;
       width: 80%;
       margin-bottom: 10px;
   }
   .path{
       display: flex;
       margin-top: 10px;
    .ulpath {
        display: flex;
        padding-left: 10px;
    }
    li {
        list-style-type: none;
    }

    li::before {
    content: ">";
    }
       
    li:first-child::before {
    content: "";
    }
       .path2, li{ 
           margin: 0;
           padding-left: 5px;
           font-size: 12px;
           font-weight: 700;
           box-sizing: border-box;
           text-decoration: none;
           color:black
       }
   }
`


function Path() {
    return (
        <Decoration>
        <div>
        <div className="pathbox"> 
            <div className="path">
            <ul className="ulpath"> 
                <li><a className="path2" href="/homepage">Homepage</a></li>
                <li><a className="path2" href="/localproducts">Local Coffee Bean</a></li>
                <li><a className="path2" href="/localproducts/productname">Doi Mon Chong</a></li>
            </ul>
            </div>
            </div>
        </div>
        </Decoration>
    )
}

export default Path
