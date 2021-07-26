import styled from 'styled-components'
import quote from '../image/brannermain.jpg'

const Decoration = styled.div`
  padding-top: 64px;
  
  .branner {
    width: 100%;
    position: relative;
    padding-top: 39%;

    .brannerMain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    z-index: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;
    }
  
    .quote {
      display: flex;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      text-align: center;

      .lowertext {
        font-size: 24px;
        font-weight: 400;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      label{
        display: block;
        position: relative;
        margin-bottom: 20px;
        
        &::before {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 16%;
          width: 65%;
          border-bottom: 2px solid black;
        }
      }

      .box-text {
        display: flex;
        flex-flow: column;
        justify-content: center;
        text-align: center;
        margin: auto;
        width: 50%;
        padding: 70px 0;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: rgba(196, 196, 196, 0.45);
        font-size: 52px;
        font-weight: 500;
        transition: all 0.3s ease;
      }
    }
  }
     span {
       padding-top: 10px;
     }
     .btn {
       margin-top: 40px;
     }
     .btnshop {
        background: #204D48;
        border: 2px solid #204D48;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 600;
        color: whitesmoke;
        padding: 8px 40px;
        margin: 0 auto;
        margin-top: 60px;
        text-decoration: none;
        text-transform: uppercase;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: 0.2s;
     }

     .btnshop:hover{
      background: rgba(242,238,235,0.2);
      border: 2px solid #204D48;
      color: #204D48;
      font-weight: 600;
      
     }
     @media (max-width: 1300px ) {
      .branner .quote .box-text {
          padding: 60px 0;
        }
        .btn {
        margin-top: 20px;
      }
     }

     @media (max-width: 1185px ) {

      .branner .quote .box-text {
          padding: 50px 0;
        }
       .box-text label {
        font-size: 40px;
      }
      .branner .quote .lowertext {
        font-size: 22px;
      }
      .btn {
        margin-top: 10px;
      }
    }
  
     @media (max-width: 1020px ) {
      .branner .quote .box-text{
        padding: 40px 0;
       }
       .box-text label {
        font-size: 36px;
      }
      .branner .quote .lowertext {
        font-size: 20px;
      }
     }

     @media (max-width: 950px ) {
      .branner .quote .box-text {
        padding: 30px 10px;
       }
       .box-text label {
        font-size: 32px;
      }

      .branner .quote .lowertext {
        font-size: 16px;
      }
      .btn {
        margin-top: 0;
      }
      .btnshop{
        vertical-align: middle;
        padding: 6px 30px;
        font-size: 10px;
      }
     }
     @media (max-width: 730px ) {
      .branner .quote .box-text {
        padding: 10px 10px;
       }

       .box-text label {
        font-size: 28px;
      }

      .branner .quote .lowertext {
        font-size: 14px;
      }

      .btnshop {
        vertical-align: middle;
        padding: 6px 30px;
        font-size: 10px;
      }

     }
    
     @media (max-width: 600px ) {
      .branner .quote .box-text {
        padding: 5px 0;
       }

       .box-text label {
        font-size: 20px;
      }

      .branner .quote .lowertext {
        font-size: 8px;
        padding-top: 2px;
      }

      .btnshop {
        vertical-align: middle;
        padding: 4px 15px;
        font-size: 8px;
      }
     }

     @media (max-width: 500px ) {
      .branner .quote .box-text {
        padding: 5px 0;
       }

       .box-text label {
        font-size: 14px;
      }

      .branner .quote .lowertext {
        font-size: 6px;
      }
      .btnshop {
        vertical-align: middle;
        padding: 2px 10px;
        font-size: 8px;
      }
     }
    
   `
function Branner() {
    return (
      <Decoration>
      <div>
          <div className="branner">
            <img className="brannerMain"src={quote} alt="branner"/>
            <div className="quote">
              <div className="box-text">
                 <label>Coffee To Wake You Up<br/>Every Morning</label>
                 <span className="lowertext">Make your own Coffee style at Home</span>
                 <div class="btn">
                 <a className="btnshop" href="/allproducts">Shop Now</a>
                 </div>
              </div>
            </div>
          </div>
      </div>
      </Decoration>
    )
  }
  
  export default Branner