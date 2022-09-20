import React from "react";
import './PomodoroClock.css';

class PomodoroClock extends React.Component {
  constructor(props){
    super(props);
    this.state={
      breakLength: 5,
      sessionLength: 25,
      breakLengthSeconds: 300,
      sessionLengthSeconds: 1500,
      type: "Session",
      minutes: 25,
      seconds: "00",
      playing: false,
      timePassed: 0,
      timerId: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePlayPauseAndReset = this.handlePlayPauseAndReset.bind(this);
  }
  
  handleClick(e) {
    let bl = this.state.breakLength;
    let sl = this.state.sessionLength;
    let bls = this.state.breakLengthSeconds;
    let sls = this.state.sessionLengthSeconds;
    if(this.state.playing === false){
      switch(e.currentTarget.id){
        case "break-decrement":
          if(bl > 1 && this.state.type === "Break"){
            let min = bl - 1;
            if(min < 10){
              min = "0" + min;
            }
            this.setState({
              breakLength: bl - 1,
              breakLengthSeconds: bls - 60,
              minutes: min,
              seconds: "00",
              timePassed: 0
            });
          }
          else if(bl > 1 && this.state.type === "Session"){
            this.setState({
              breakLength: bl - 1,
              breakLengthSeconds: bls - 60
            });
          }
          break;
        case "break-increment":
          if(bl < 60 && this.state.type === "Break"){
            let min = bl + 1;
            if(min < 10){
              min = "0" + min;
            }
            this.setState({
              breakLength: bl + 1,
              breakLengthSeconds: bls + 60,
              minutes: min,
              seconds: "00",
              timePassed: 0
            });
          }
          else if(bl < 60 && this.state.type === "Session"){
            this.setState({
              breakLength: bl + 1,
              breakLengthSeconds: bls + 60
            });
          }
          break;
        case "session-decrement":
          if(sl > 1 && this.state.type === "Session"){
            let min = sl - 1;
            if(min < 10){
              min = "0" + min;
            }
            this.setState({
              sessionLength: sl - 1,
              sessionLengthSeconds: sls - 60,
              minutes: min,
              seconds: "00",
              timePassed: 0
            });
          }
          else if(sl > 1 && this.state.type === "Break"){
            this.setState({
              sessionLength: sl - 1,
              sessionLengthSeconds: sls - 60
            });
          }
          break;
        case "session-increment":
          if(sl < 60 && this.state.type === "Session"){
            let min = sl + 1;
            if(min < 10){
              min = "0" + min;
            }
            this.setState({
              sessionLength: sl + 1,
              sessionLengthSeconds: sls + 60,
              minutes: min,
              seconds: "00",
              timePassed: 0
            });
          }
          else if(sl < 60 && this.state.type === "Break"){
            this.setState({
              sessionLength: sl + 1,
              sessionLengthSeconds: sls + 60
            });
          }
          break;
        default:
            break;
        
      }
    }
    
  }
  
  handlePlayPauseAndReset(e){
    let timer;
    if(e.currentTarget.id !== "reset" && this.state.playing === false){
      let passedTime = this.state.timePassed;
      let timeLeft = this.state.sessionLengthSeconds;
      clearInterval(this.state.timerId);
      timer = setInterval(() => {
        if(this.state.type === "Session"){
          document.getElementById("timer-label").style.color = "white";
          document.getElementById("time-left").style.color = "white";
          if(timeLeft > 0){
            passedTime = passedTime + 1;
            timeLeft = this.state.sessionLengthSeconds - passedTime;
            let min = Math.floor(timeLeft / 60);
            let sec = timeLeft % 60;
            if(min < 10){
              min = "0" + min;
            }
            if(sec < 10){
              sec = "0" + sec;
            }
            if(timeLeft < 60){
              document.getElementById("timer-label").style.color = "#8B0000";
              document.getElementById("time-left").style.color = "#8B0000";
            }
            this.setState({
              minutes: min,
              seconds: sec,
              playing: true,
              timePassed: passedTime,
              timerId: timer
            });
          }
          else {
            let bl = this.state.breakLength;
            let bls = this.state.breakLengthSeconds;
            timeLeft = bls;
            passedTime = 0;
            if(bl < 10){
              bl = "0" + bl;
            }
            document.getElementById("beep").currentTime = 0;
            document.getElementById("beep").play();
            this.setState({
              type: "Break",
              minutes: bl,
              sec: bls % 60,
              playing: true,
              timePassed: 0
            });
          }
        }
        else if(this.state.type === "Break"){
          document.getElementById("timer-label").style.color = "white";
          document.getElementById("time-left").style.color = "white";
          if(timeLeft > 0){
            passedTime = passedTime + 1;
            timeLeft = this.state.breakLengthSeconds - passedTime;
            let min = Math.floor(timeLeft / 60);
            let sec = timeLeft % 60;
            if(min < 10){
              min = "0" + min;
            }
            if(sec < 10){
              sec = "0" + sec;
            }
            if(timeLeft < 60){
              document.getElementById("timer-label").style.color = "red";
              document.getElementById("time-left").style.color = "red";
            }
            this.setState({
              minutes: min,
              seconds: sec,
              playing: true,
              timePassed: passedTime,
              timerId: timer
            });
          }
          else {
            let sl = this.state.sessionLength;
            let sls = this.state.sessionLengthSeconds;
            timeLeft = sls;
            passedTime = 0;
            if(sl < 10){
              sl = "0" + sl;
            }
            document.getElementById("beep").currentTime = 0;
            document.getElementById("beep").play();
            this.setState({
              type: "Session",
              minutes: sl,
              sec: sls % 60,
              playing: true,
              timePassed: 0
            });
          }
        }
      }, 1000);
    }
    // for pausing
    else if(e.currentTarget.id !== "reset" && this.state.playing === true){
      clearInterval(this.state.timerId);
      this.setState({
        playing: false,
        timerId: null
      });
    }
    else if(e.currentTarget.id === "reset"){
      clearInterval(this.state.timerId);
      document.getElementById("beep").pause();
      document.getElementById("beep").currentTime = 0;
      document.getElementById("timer-label").style.color = "white";
      document.getElementById("time-left").style.color = "white";
      this.setState({
            breakLength: 5,
            sessionLength: 25,
            breakLengthSeconds: 300,
            sessionLengthSeconds: 1500,
            type: "Session",
            minutes: 25,
            seconds: "00",
            playing: false,
            timePassed: 0,
            timerId: null
          });
    }
  }
  
  render() {
    return(
      <div id="clock" className="text-and-icon-color heading-label">
        25 + 5 Clock
        <div id="break-session-incrementer-decrementer">
            <div id="break-incrementer-decrementer" className="inline-block-display">
                <div id="break-label" className="text-and-icon-color label">
                    Break Length
                </div>
                <div id="break-controls" className="break-session-controls">
                    <button id="break-decrement" className="inline-block-display button-display" onClick={this.handleClick}>
                        <i className="fa fa-arrow-down fa-2x text-and-icon-color"></i>
                    </button>
                    <div id="break-length" className="inline-block-display label">
                        {this.state.breakLength}
                    </div>
                    <button id="break-increment" className="inline-block-display button-display" onClick={this.handleClick}>
                        <i className="fa fa-arrow-up fa-2x text-and-icon-color"></i>
                    </button>
                </div>
            </div>
            
          <div id="session-incrementer-decrementer" className="inline-block-display">
            <div id="session-label" className="text-and-icon-color label">
              Session Length
            </div>
            <div id="session-controls" className="break-session-controls">
                <button id="session-decrement" className="inline-block-display button-display" onClick={this.handleClick}>
                    <i className="fa fa-arrow-down fa-2x text-and-icon-color"></i>
                </button>
                <div id="session-length" className="inline-block-display label">
                    {this.state.sessionLength}
                </div>
                <button id="session-increment" className="inline-block-display button-display" onClick={this.handleClick}>
                    <i className="fa fa-arrow-up fa-2x text-and-icon-color"></i>
                </button>
            </div>
            
          </div>
        </div>
        <div id="timer"> 
          <div id="timer-label" className="label">
            {this.state.type}
          </div>
          <div id="time-left">
            {this.state.minutes}:{this.state.seconds}
            <audio src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" id="beep"></audio>
          </div>
          <div id="timer-controls">
            <button id="start_stop" className="button-display" onClick={this.handlePlayPauseAndReset}>
                <i id="play" className="fa fa-play fa-2x text-and-icon-color" aria-hidden="true"></i>
                <i id="pause" className="fa fa-pause fa-2x text-and-icon-color" aria-hidden="true"></i>
            </button>
            <button id="reset" className="button-display" onClick={this.handlePlayPauseAndReset}>
                <i className="fa fa-refresh fa-2x text-and-icon-color" aria-hidden="true"></i>
            </button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default PomodoroClock;