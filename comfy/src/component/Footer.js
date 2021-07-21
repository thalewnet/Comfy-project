import React from 'react'
import styled from 'styled-components'


const Decoration = styled.div`
   background: #B29385;
   font-size: 12px;
   padding: 5px;
   margin-top: 60px;
   text-align: center;
   color: whitesmoke;
`   


function Footer() {
  return (
    <Decoration>
    <div>
        <footer>
         <p>COMFY THAILAND., Copyright &copy; 2021</p>
        </footer>
    </div>
    </Decoration>
  )
}

export default Footer