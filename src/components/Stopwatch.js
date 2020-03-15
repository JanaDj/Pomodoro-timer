import React, {Component} from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    };

    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({
                previousTime: Date.now()
            })
        }
    }

    handleReset = () => {
        this.setState({
            elapsedTime: 0
        });
    }

    componentDidMount() {
        this.intervalID = setInterval( () => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    
    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }));
        }
    }
    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000);
        return (
            <div className="stopwatch">
                <div id="manageTimerBtns">
                    <button className="green"> Work </button>
                    <button className="green"> Short Break</button>
                    <button className="green"> Long Break </button>
                </div>
                <h2>Stopwatch</h2> 
                <div id="clockContainer">
                    <span className="stopwatch-time">  { seconds } </span>
                    <span className="stopwatch-time">  : </span>
                    <span className="stopwatch-time">  { seconds } </span>
                </div>
                <button className="green" onClick={this.handleStopwatch}>
                    { this.state.isRunning ? "Stop" : "Start" }
                </button>
                <button className="green" onClick={this.handleReset}>Reset</button>

                <div id="setTimesContainer">
                    <div className="timerItemContainer">
                    <div><span className="pomodoroLabel"> Work </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green"><i class="material-icons">+</i></a>
                    <div><span className="pomodoroLabel"> 25 </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green"><i class="material-icons">-</i></a>
                </div>
                <div className="timerItemContainer">
                    <div><span className="pomodoroLabel"> Short Break </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green"><i class="material-icons">+</i></a>
                    <div><span className="pomodoroLabel"> 5 </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green"><i class="material-icons">-</i></a>
                </div>
                <div className="timerItemContainer">
                    <div><span className="pomodoroLabel"> Long Break </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green"><i class="material-icons">+</i></a>
                    <div><span className="pomodoroLabel"> 10 </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green"><i class="material-icons">-</i></a>
                </div>
                </div>
            </div>
        );
    }
}

export default Stopwatch;