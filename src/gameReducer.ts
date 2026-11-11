import type { GameState, GameAction } from './types'; 

export const initialState: GameState = {
  tubes: [
    ['red', 'blue', 'green', 'red'],
    ['blue', 'green', 'red', 'blue'],
    ['green', 'red', 'green', 'blue'],
    [],
    []
  ],
  selectedTubeIndex: null,
  isWinner: false
};

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'CLICK_TUBE':
      if (state.selectedTubeIndex === action.payload) {
        return { ...state, selectedTubeIndex: null };
      }
      return { ...state, selectedTubeIndex: action.payload };
    default:
      return state;
  }
}