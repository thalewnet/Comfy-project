import React from 'react'
import styled from 'styled-components'
import HomePage from './Homepage'
import Maindropdown from '../component/Maindropdown.js'

const Decoration = styled.div`
    .overlay {
        position: fixed;
        right: 0px;
        top: 64px;
    }
`
function Overhomepage() {
    return (
        <Decoration>
        <div>
        <div className="main1"><HomePage/></div>
        <div className="overlay"><Maindropdown/></div>
        </div>
        </Decoration>
    )
}

export default Overhomepage
