import { createContext } from 'react';
import { GameState } from '../../enums';

export interface GameContextProps {
  state: GameState;

  onResetGame(): void;
  onStateChange(state: GameState): void;
}

const GameContext = createContext<GameContextProps>({
  state: GameState.MENU,

  // tslint:disable-next-line:no-empty
  onResetGame() {},
  onStateChange(_state: GameState) {},
});

export default GameContext;
