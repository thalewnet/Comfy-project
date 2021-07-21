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

      .box {
        display: flex;
        flex-flow: column;
        justify-content: center;
        text-align: center;
        margin: auto;
        width: 50%;
        height: 400px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: rgba(196, 196, 196, 0.45);
        font-size: 52px;
        font-weight: 500;
        line-height: 1.3
      }
    }
  }
     span {
       padding-top: 10px;
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
   `
function Branner() {
    return (
      <Decoration>
      <div>
          <div className="branner">
            <img className="brannerMain"src={quote} alt="branner"/>
            <div className="quote">
              <div className="box">
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