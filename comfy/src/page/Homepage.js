import React from 'react'
import Navbar from '../component/Navbar.js'
import Branner from '../component/Branner.js'
import Card from '../component/Card.js'
import Card2 from '../component/Card2.js'
import Card3 from '../component/Card3.js'
import Footer from '../component/Footer.js'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Decoration = styled.div`
    .main-container {
      display: flex;
      flex-direction: column;
      padding-top: 15px;
      width: 80%;
      margin: 0 auto;
      height: 1000px;
    
    }
    
      .recommend {
        font-weight: normal;
        font-size: 24px;
        line-height: 42px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
      }

    .item-card {
      display: flex;
      justify-content: space-between;
      padding-top : 15px ;
    }
    .lower{
      display: flex;
      margin-top: 80px;
      justify-content: space-evenly;
    }
   `

function HomePage() {
  return (
    <Decoration>
    <div>
        <Navbar/>
        <Branner/>
        
        <div className="main-container">
          <div className="upper">
            <span className="recommend">ฺRecommend Products:</span>
            <div className="item-card">
              <div className="bs"><Card name={"Doi Mon Chong"}/></div>
              <div className="bs"><Card name={"Mae Chan Tai"}/></div>
              <div className="bs"><Card name={"Doi Chang"}/></div>
              <div className="bs"><Card name={"Bann Bann"}/></div>
              <div className="bs"><Card/></div>
            </div>
            </div>
            <div className="lower">
              <div className="bs2"><Card2/></div>
              <div className="bs3"><Card3/></div>
            </div>
        </div>
        <Footer/>
    </div>
    </Decoration>
  )
}

export default HomePage