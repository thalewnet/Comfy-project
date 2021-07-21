import React from 'react'
import Navbar from './component/Navbar.js'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Radio, RadioGroup,Stack } from "@chakra-ui/react"
import { Link as Linked } from "@chakra-ui/react"
const Decoration = styled.div`
      padding-top: 64px;
      `

function ContactUs() {
  const [value, setValue] = React.useState("1")
  return ( 
  <Decoration>
    <div>
        <Navbar/>
        <div>page 2</div>
        <button type='button'><Link to="/Homepage">HomePage</Link></button>
      <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
        <div>adasdad</div>
      </Stack>
    </RadioGroup>
    </div>
</Decoration>
  )
}

export default ContactUs