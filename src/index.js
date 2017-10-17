import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

class Clock extends React.Component {
    constructor(){
        super();
        this.state={date:new Date(),
        isToggleOn:true,
         };
        //  this.handleClick = this.handleClick.bind(this);
    }
   componentDidMount() {
       this.timerId=setInterval(
           ()=>this.tick(), 1000
        )

   }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    handleClick(){
        this.setState(prevet=>({
            isToggleOn: !prevet.isToggleOn
        }))
    }
   
    render() {
        return (
            <div>
                <h1 className="">Hello World!!</h1>
                <h2> It is {this.state.date.toLocaleTimeString()}</h2>
               <button onClick={(e)=> this.handleClick(e)}>
               {this.state.isToggleOn?'hello herny':'hello meixiang'}
               </button>
            </div>
        )
    }
}



    ReactDOM.render(
        <div>
        <Clock />
        <Clock />
        <Clock />
        </div>,
        document.getElementById('root')
    );






