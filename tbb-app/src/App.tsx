import React from 'react';
import './App.css';

function UpCommand() {
  return (
    <div>
      <button className="command up-arrow ">
        <img className="h-20 w-20" src="/Images/up.png" alt="erw" />
      </button>
    </div>
  )
}

function LightCommand() {
  return (
    <div>
      <button className="command light-bulb">
        <img className="h-20 w-20" src="/Images/light.gif" alt="" />
      </button>
    </div>
  )
}

function CommandPalette() {
  return (
    <div className="command-palette flex p-10">
      <UpCommand />
      <LightCommand />
    </div>
  )
}

function CommandList() {
  return (
    <div className="command-window bg-gray-500 w-80 h-64"></div>
  )
}

function HelpButton() {
  return (
    <div>
      <button className="help w-40 h-20">
      <img src="/Images/help.png" alt="" />
      </button>
    </div>
  )
}

function PlayButton() {
  return (
    <div>
      <button className="play w-10 h-5">
      <img src="/Images/play.png" alt="" />
      </button>
    </div>
  )
}



class Game extends React.Component {
  render() {
    return (
      <div className="game-board grid h-screen place-items-center mx-20 my-15">
          <div className="section-1 flex ml-auto">
            <PlayButton />
            <HelpButton />
          </div>
          <div className="section-2 ml-auto">
            <CommandList />
          </div>
          <div className="section-3 mr-auto ml-40">
            <CommandPalette />
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
