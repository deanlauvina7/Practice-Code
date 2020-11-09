import React from 'react';

const Header = (props) => {
  return (
    <Header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.TotalPlayers}</span>
    </Header>
  );
};

export default Header;
