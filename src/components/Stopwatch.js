import React, {Component} from 'react';

class Stopwatch extends Component {

    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
        work: 0,
        shortBreak: 0,
        longBreak: 0
      };

      startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime
        });
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 10;
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });
          } else {
            clearInterval(this.timer);
            this.setState({ timerOn: false });
            alert("Its Timeeeee!!!!");
          }
        }, 10);
      };

      stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
      };
      resetTimer = () => {
        if (this.state.timerOn === false) {
          this.setState({
            timerTime: this.state.timerStart
          });
        }
      };

      adjustTimer = input => {
        const { work, shortBreak, longBreak, timerOn } = this.state;
        if (!timerOn) {
          if (input === "incWork" && work + 60000 < 216000000) {
            this.setState({ work: work + 60000 });
          } else if (input === "decWork" && work - 60000 >= 0) {
            this.setState({ work: work - 60000 });
          } else if (input === "incShBreak" && shortBreak + 60000 < 216000000) {
            this.setState({ shortBreak: shortBreak + 60000 });
          } else if (input === "decShBreak" && shortBreak - 60000 >= 0) {
            this.setState({ shortBreak: shortBreak - 60000 });
          }
          else if (input === "incLBreak" && longBreak + 60000 < 216000000) {
            this.setState({ longBreak: longBreak + 60000 });
          } else if (input === "decLBreak" && longBreak - 60000 >= 0) {
            this.setState({ longBreak: longBreak - 60000 });
          }
        }
      };

      updateTimer = input => {
        const { timerOn, work, shortBreak, longBreak } = this.state;
        if (!timerOn) {
          if (input === "work" && work > 0) {
            this.setState({ 
                timerTime: work,
                timerStart: work
            });
          } else if (input === "shortBreak" && shortBreak > 0) {
            this.setState({ 
                timerTime: shortBreak,
                timerStart: shortBreak
            });
          } else if (input === "longBreak" && longBreak > 0) {
            this.setState({ 
                timerTime: longBreak,
                timerStart: longBreak
            });
          }
        }
    }
    
    render() {
        const { timerTime, timerStart, timerOn, work, shortBreak, longBreak } = this.state;
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

        return (
            <div className="stopwatch">
                <div id="manageTimerBtns">
                    <button className="green" onClick= { () => this.updateTimer("work") }> Work </button>
                    <button className="green" onClick= { () => this.updateTimer("shortBreak") }> Short Break</button>
                    <button className="green" onClick= { () => this.updateTimer("longBreak") }> Long Break </button>
                </div>
                <h2>Stopwatch</h2> 
                <div id="clockContainer">
                    <span className="stopwatch-time">  { minutes } </span>
                    <span className="stopwatch-time">  : </span>
                    <span className="stopwatch-time">  { seconds } </span>
                </div>
                {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
                <button className="green" onClick={this.startTimer}>
                    Start
                </button>
                )}
                {timerOn === true && timerTime >= 1000 && (
                <button className="green" onClick={this.stopTimer}>
                    Stop
                </button>
                )}
                {timerOn === false &&
                (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                    <button className="green" onClick={this.startTimer}>
                    Resume
                    </button>
                )}

                {(timerOn === false || timerTime < 1000) &&
                (timerStart !== timerTime && timerStart > 0) && (
                    <button className="green" onClick={this.resetTimer}>
                    Reset
                    </button>
                )}

                <div id="setTimesContainer">
                    <div className="timerItemContainer">
                    <div><span className="pomodoroLabel"> Work </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green" onClick={ () => this.adjustTimer("incWork") }><i class="material-icons">+</i></a>
                    <div><span className="pomodoroLabel"> {("0" + Math.floor((work / 60000) % 60)).slice(-2)} </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green" onClick={ () => this.adjustTimer("decWork") }><i class="material-icons">-</i></a>
                </div>
                <div className="timerItemContainer">
                    <div><span className="pomodoroLabel"> Short Break </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green" onClick={ () => this.adjustTimer("incShBreak") }><i class="material-icons">+</i></a>
                    <div><span className="pomodoroLabel"> {("0" + Math.floor((shortBreak / 60000) % 60)).slice(-2)} </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green" onClick={ () => this.adjustTimer("decShBreak") }><i class="material-icons">-</i></a>
                </div>
                <div className="timerItemContainer">
                    <div><span className="pomodoroLabel"> Long Break </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green" onClick={ () => this.adjustTimer("incLBreak") }><i class="material-icons">+</i></a>
                    <div><span className="pomodoroLabel"> {("0" + Math.floor((longBreak / 60000) % 60)).slice(-2)} </span></div>
                    <a class="btn-floating btn-small waves-effect waves-light green" onClick={ () => this.adjustTimer("decLBreak") }><i class="material-icons">-</i></a>
                </div>
                </div>
            </div>
        );
    }
}

export default Stopwatch;