import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0
    };
    
    render() { 
        return(
            <div>
                <div>{ this.state.count }</div>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
                
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1});
    }
    
}
 
export default Counter;