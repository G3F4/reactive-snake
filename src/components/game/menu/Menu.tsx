import React, { useCallback, useContext } from 'react';
import { GameState } from '../../../enums';
import GameContext from '../GameContext';
import './Menu.css';

const Menu: React.FC = () => {
  const { state, onStateChange } = useContext(GameContext);
  const handleResume = useCallback(() => {
    if (state === GameState.MENU) {
      onStateChange(GameState.PLAY);
    }
  }, [state, onStateChange]);

  return (
    <div className="Menu">
      <div>
        <button className="MenuResumeButton" onClick={handleResume}>RESUME</button>
      </div>
    </div>
  );
};

export default Menu;
