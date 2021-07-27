import React from 'react'
import Navbar from '../component/Navbar.js'
import Branner from '../component/Branner.js'
import Card from '../component/Card.js'
import Card2 from '../component/Card2.js'
import Card3 from '../component/Card3.js'
import Footer from '../component/Footer.js'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Navbarcomponent from '../component/Navbarcomponent.js'
import Footercomponent from '../component/Footercomponent.js'


const Decoration = styled.div`
    .main-container {
      display: flex;
      flex-direction: column;
      padding-top: 15px;
      width: 80%;
      margin: 0 auto;
    }
    
      .recommend {
        display: flex;
       justify-content: center;
        font-weight: normal;
        font-size: 24px;
        line-height: 42px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        position: relative;
      }

      .recommend:before {
          content: "";
          position: absolute;
          bottom: -2px;
          width: 100%;
          border-bottom: 1px solid black;

        }
      
    .item-card {
      display: flex;
      justify-content: space-between;
      padding-top : 20px ;
      flex-wrap: wrap;
    }

    .lower{
      display: flex;
      margin-top: 70px;
      justify-content: space-evenly;
    }

    @media (max-width: 1050px){
      .bs{
        margin-bottom: 15px;
      }
      .lower {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .lower .bs3{
        margin-top: 30px;
      }
    }

    @media (max-width: 820px ) {
      .item-card {
        justify-content: space-around;
        align-items: center;
      }
    }
    @media (max-width: 575px ) {
      .item-card {
        flex-direction: column;
        align-items: center;
      }
    }
   `

function HomePage() {
  return (
    <Decoration>
    <div>
        <Navbarcomponent/>
        <Branner/>

        <div className="main-container">
          <div className="upper">
            <span className="recommend">Recommend Products</span>
            <div className="item-card">
              <div className="bs"><Card name={"Doi Mon Chong"}/></div>
              <div className="bs"><Card name={"Mae Chan Tai"}/></div>
              <div className="bs"><Card name={"Doi Chang"}/></div>
              <div className="bs"><Card name={"Bann Bann"}/></div>
              <div className="bs"><Card name={"Chumphon"}/></div>
            </div>
          </div>
            <div className="lower">
              <div className="bs2"><Card2 title={"Local Coffee Bean"} /></div>
              <div className="bs3"><Card3 title={"Imported Coffee Bean"}/></div>
            </div>
        </div>  
    </div>
    <Footercomponent/>
    </Decoration>
  )
}

export default HomePage