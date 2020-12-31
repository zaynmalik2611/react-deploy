import React, { Component } from 'react';
import './styling.css';
import PunchBag from './2.png';
class Stress extends Component {
    state = {
        punches: 0,
    };

    render() { 
        return ( 
            <div>
                <h1 className="stressTitle">Fuck Stress</h1>
                <h4>How many punches would you like to hit to the stress ball?</h4>
                <div className="punchDiv">
                    <h3>punches: {this.state.punches}</h3>
                    <img src={PunchBag} alt="Punch Bag" useMap="#punchmap"/>
                    <map name="punchmap">
                        <area className="punchArea" onClick={this.handlePunches} shape="rect" coords="0 170 100 437" alt="bag" href="#"/>
                    </map>
                </div>
                <span>{this.showMsg()}</span>
            </div>
        );
    }
    showMsg() {
        const {punches} = this.state;
        if (punches === 0) {
            return <h2 style={{color: 'blue'}}>Han g mukka try krsoo?</h2>;
        }
        else if(punches === 1) {
            return <h2>Waah g pehla mukka! Hor try krsoo?</h2>
        }
        else if(punches === 2) {
            return <h2>Waah g hunh kam jaan diyooo</h2>
        }
        else if(punches > 2 && punches <= 10) {
            return <h2>Lagee raho munna bhai</h2>
        }
        else if (punches > 10) {
            return <h2 style={{color: 'red'}}>Calm down bhai calm down please</h2>;
        }
    }
    handlePunches = () => {
        this.setState({ punches: this.state.punches + 1});
    }
}
 
export default Stress;