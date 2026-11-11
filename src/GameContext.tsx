import { createContext, useReducer, type ReactNode, type Dispatch } from 'react'; 
import { gameReducer, initialState } from './gameReducer';
import type { GameState, GameAction } from './types';

export interface GameContextProps {
  state: GameState;
  dispatch: Dispatch<GameAction>;
}

export const GameContext = createContext<GameContextProps | undefined>(undefined);

export interface GameProviderProps {
  children: ReactNode;
}

export function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}