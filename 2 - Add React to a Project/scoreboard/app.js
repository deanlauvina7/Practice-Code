const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  )
};

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>

      <Counter />
    </div>
  );
}

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore() {
    this.setState(prevState => {
      return {
        score: prevState.score + 1
      };
    });
  }

  decrementScore() {
    this.setState(prevState => {
      return {
        score: prevState.score - 1
      };
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
      <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
    </div>
    );
  };
}; 

class App extends React.Component { 

  state = {
    players: [
      {
        name: "Dean",
        id: 1
      },
      {
        name: "Bebe",
        id: 2
      },
      {
        name: "Mom",
        id: 3
      },
      {
        name: "Dad",
        id: 4
      }
    ]
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
  
        {/* Players list */ }
        {this.state.players.map(player => 
          <Player
            name={player.name}
            score={player.score}
            key={player.id.toString()}
          />
        )}
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);