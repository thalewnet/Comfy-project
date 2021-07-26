import React from 'react'
import styled from 'styled-components'
import Navbar2 from '../component/Navbar2.js'
import Footer from '../component/Footer.js'
import Path from '../component/Path'
import Global from '../image/imported.png'
import Card4 from '../component/Card4.js'
import Footercomponent from '../component/Footercomponent.js'
import Navbarcomponent from '../component/Navbarcomponent.js'

const Decoration = styled.div`
      padding-top: 64px;
      
      .second-nav{
          width: 80%;
          margin: 0 auto;
          background-color: #CDA58B;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      ul.nav-product {
        margin:0 15px;
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
        height: 40px;
        transition: all 1s ease;
        }

        .nav-product li {
            margin: 0rem 2.5rem;
            line-height: 1.5;
            display: flex;
            align-items: center;
            position: relative;
            white-space: nowrap;
            transition: all 1s ease;
        
        a {
        text-decoration: none;
        color: black;
        }
        }
        .importedproduct {
            &::before {
          content: "";
          position: absolute;
          bottom: 5px;
          left:-10%;
          width: 120%;
          border-bottom: 2px solid rgba(0, 0, 0, 0.65);
        }
        }
        .productbar {
            width: 80%;
            margin: 0 auto;
            margin-top: 20px;
            position: relative;

            &::before {
          content: "";
          position: absolute;
          bottom: 0px;
          width: 100%;
          border-bottom: 2px solid rgba(0, 0, 0, 0.65);
        }
        }

        .inside {
                display: flex;
                align-items: center;
                padding-left: 20px;
            }
        .all {
            width: 30px;
            height: 30px;
            padding-right: 10px;
            
        }

        .text-productbar {
           font-weight: 500;
        }

        .item-card {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        padding-top : 35px ;
        flex-wrap: wrap;
        }

        @media (max-width: 995px ) {
        .item-card {
                justify-content: space-around;
            }
        }
        @media (max-width: 890px ){
            .nav-product li {
                font-size: 14px
            }
        }

        @media (max-width: 765px ){
           /* .second-nav{
               display: none;
           } */
            .nav-product li a.localproduct,
            .nav-product li a.allproduct  {
                display: none;
            }
            
        }
      `

function Importproduct() {
    return (
        <Decoration>
        <Navbarcomponent/>
        <Path/>
        <div>
        <div className="second-nav">
            <ul className="nav-product">
                <li><a className="allproduct" href="/allproducts">All Product</a></li>
                <li><a className="localproduct" href="/localproducts">Local Coffee Bean</a></li>
                <li><a className="importedproduct" href="#">Imported Coffee Bean</a></li>
            </ul>
        </div>
        <div className="productbar">
            <div className="inside">
                <img className="all" src={Global} alt="globalproduct"></img>
                <p className="text-productbar">Imported Coffee Beans</p>
              
            </div>
        </div>
        <div className="item-card">
            <div className="bs"><Card4 name={"Brazil"}/></div>
            <div className="bs"><Card4 name={"Columbia"}/></div>
            <div className="bs"><Card4 name={"Ethiopia"}/></div>
            <div className="bs"><Card4 name={"Mae Chan Tai"}/></div>
            <div className="bs"><Card4 name={"Doi Chang"}/></div>
            <div className="bs"><Card4 name={"Doi Chang"}/></div>
        </div>
        </div>
        <Footercomponent/>
        </Decoration>
    )
}

export default Importproduct
