import React, { useContext } from 'react';
import GameContext from '../GameContext';
import './End.css';

const End: React.FC = () => {
  const { onResetGame } = useContext(GameContext);

  return (
    <div className="End">
      <div>
        <button className="EndResumeButton" onClick={onResetGame}>PLAY AGAIN</button>
      </div>
    </div>
  );
};

export default End;
