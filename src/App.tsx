import React, { Component, useState } from 'react';
import './App.css';

function UpCommand(props: any) {
  return (
    <div>
      <button className="command up-arrow bg-gray-400 border-4 border-gray-700 active:border-0 rounded-md mr-2"
      onClick = {() => {props.val("up")}}>
        <img className="h-20 w-20" src="/Images/up.png" alt="" />
      </button>
    </div>
  )
}

function LightCommand(props: any) {
  return (
    <div>
      <button className="command light-bulb bg-gray-400 border-4 border-gray-700 active:border-0 rounded-md mr-2"
      onClick = {() => {props.val("bulb")}}>
        <img className="h-20 w-20" src="/Images/bulb.png" alt="" />
      </button>
    </div>
  )
}

function CommandList(props: any) {

  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="command-container ml-auto">
      <div className="main-tag h-6 w-14 mr-auto bg-yellow-100"><b className="">MAIN</b></div>
      <div className="command-window bg-gray-500 w-96 h-72">
        <div className="command-box w-72 h-24 bg-yellow-100 flex">
          { props.val !== "" ? visible && (          
          <button onClick={removeElement} className="command light-bulb bg-gray-400 border-4 border-gray-700 active:border-0 rounded-md mr-2">
            <img className="h-20 w-20" src={`/Images/${props.val}.png`} alt="" />
          </button>) : <></>}
        </div>
      </div>
    </div>
  )
}

function HelpButton() {
  return (
    <div className="ml-28">
      <button className="help bg-blue-500 border-b-4 border-blue-700 active:border-0 py-1 rounded-xl">
      <img className="w-16 h-14" src="/Images/help.png" alt="" />
      </button>
    </div>
  )
}

function PlayButton() {
  return (
    <div className="mr-24">
      <button className="play bg-green-500 border-b-4 border-green-700 active:border-0 active:pt-4 px-6 py-3 rounded-lg">
      <img className="w-10 h-8" src="/Images/play.png" alt="" />
      </button>
    </div>
  )
}

function Cell() {
  return (
    <div className="board-cell border border-gray-500 h-12 w-12 bg-gray-300"></div>
  )
}

function Grid() {
  return (
    <div className="game-board ml-56 inline-block mt-36">
      <div className="row-1 flex"><Cell /><Cell /><Cell /></div>
      <div className="row-2 flex"><Cell /><Cell /><Cell /></div>
      <div className="row-3 flex"><Cell /><Cell /><Cell /></div>
    </div>
  )
}

class Game extends Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        currButton: ""
      };
    }

  render() {

    const handleClick = (button: any) => {
      this.setState({currButton: button})
    }

    return (
      <div className="interface bg-blue-50 grid h-screen place-items-center mx-32">
          <div className="section-1 flex ml-auto px-6">
            <PlayButton />
            <HelpButton />
          </div>
          <div className="section-2 ml-auto flex w-full">
            <Grid />
            <CommandList val = {this.state.currButton}/>
          </div>
          <div className="section-3 mr-auto ml-40">
            <div className="command-palette flex p-10">
              <UpCommand val = {handleClick}/>
              <LightCommand val = {handleClick}/>
            </div>
          </div>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
