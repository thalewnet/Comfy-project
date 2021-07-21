import React from "react"

class Counter extends React.Component{
   
        state = {
            counter:0
        }
      
    addCounter = () => {
            this.setState(function(state){
                return {
                    counter: state.counter + 1
                }
            })
    }

    subtractCounter = () => {
        this.setState(function(state){
            return {
                counter: state.counter - 1
            }
        })
    }


    resetCounter= () =>{
        this.setState(function(state){
            return {
                counter: 0
            }
        })
    }
    render(){
        return <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.addCounter}>+</button>
            <button onClick={this.subtractCounter}>-</button>
            <button onClick={this.resetCounter}>Reset</button>
        </div>
    }
}

export default Counter
