import React from 'react'
import styled from 'styled-components'
import {faFileUpload} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Decoration = styled.div`
    .upload-area{
        margin-top: 3px;
        border: 2px dashed #B29385;
        background: rgba(178, 147, 133, 0.2);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        width: 100%;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column ;
    }
    
    .upload-icon {
        margin-top: 5px;
        font-size: 40px;
        color: burlywood;
    }

    .text {
        font-size: 16px;
        font-weight: 500;
       
    }

    .upload-area button.browse{
        margin-bottom: 5px;
        padding: 5px 15px;
        font-size: 12px;
        font-weight: 500;
        background: rgba(178, 147, 133, 0.1);
        border-radius: 10px;
        border: none;
        outline: none;
        color: black;
        cursor: pointer;
    }
`
function Uploadimg() {
    return (
        <Decoration>
        <div>
            <div className="upload-area">
            <div className="upload-icon"><i><FontAwesomeIcon icon={faFileUpload}/></i></div>
            {/* <p className="text">Slip upload here!</p> */}
            <form action="">
            <label for="upload"><button className="browse">Browse File</button></label>
            <input type="file" id="upload" multiple hidden/>
            </form>
        </div>
        </div>
        </Decoration>
    )
}

export default Uploadimg
