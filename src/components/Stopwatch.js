import React, {Component} from 'react';

class Stopwatch extends Component {

    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
      };

      startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
          this.setState({
            timerTime: Date.now() - this.state.timerStart
          });
        }, 10);
      };

      stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
      };

      resetTimer = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0
        });
      };

    render() {
        const { timerTime } = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

        return (
            <div className="stopwatch">
                <div id="manageTimerBtns">
                    <button className="green"> Work </button>
                    <button className="green"> Short Break</button>
                    <button className="green"> Long Break </button>
                </div>
                <h2>Stopwatch</h2> 
                <div id="clockContainer">
                    <span className="stopwatch-time">  { minutes } </span>
                    <span className="stopwatch-time">  : </span>
                    <span className="stopwatch-time">  { seconds } </span>
                </div>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
                <button className="green" onClick={this.startTimer}>Start</button>
                )}
                {this.state.timerOn === true && (
                <button className="green" onClick={this.stopTimer}>Stop</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button className="green" onClick={this.startTimer}>Resume</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button className="green" onClick={this.resetTimer}>Reset</button>
                )}

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