import React  from 'react';
import { GRID_SIZE } from '../../constans';
import Game from '../game/Game';
import GameContext from '../game/GameContext';
import './App.css';
import useGame from '../game/useGame';



const App: React.FC = () => {
  const { snake, setGameState, gameState, fruit, handleResetGame } = useGame();

  return (
    <div className="App">
      <GameContext.Provider value={{
        state: gameState,
        onStateChange: setGameState,
        onResetGame: handleResetGame,
      }}>
        <Game gridSize={GRID_SIZE} snake={snake} fruit={fruit} state={gameState} />
      </GameContext.Provider>
    </div>
  );
};

export default App;
