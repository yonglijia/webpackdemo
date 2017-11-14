import React from 'react';
import ReactDOM from 'react-dom';

class TestReact extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>this is a 1react div1

            <img src={require('./circle_loaction.png')}/>
        </div>
    }
}
ReactDOM.render(<TestReact/>,document.getElementById('react'))
