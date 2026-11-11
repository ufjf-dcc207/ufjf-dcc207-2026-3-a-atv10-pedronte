import type { GameState, GameAction, Color } from './types';

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

function checkWinner(tubes: Color[][]): boolean {
  for (const tube of tubes) {
    if (tube.length > 0) {
      if (tube.length !== 4) return false;
      
      const firstColor = tube[0];
      const allSame = tube.every(color => color === firstColor);
      if (!allSame) return false;
    }
  }
  return true;
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'CLICK_TUBE': {
      if (state.isWinner) return state;

      const clickedIndex = action.payload;

      if (state.selectedTubeIndex === clickedIndex) {
        return { ...state, selectedTubeIndex: null };
      }

      if (state.selectedTubeIndex === null) {
        if (state.tubes[clickedIndex].length > 0) {
          return { ...state, selectedTubeIndex: clickedIndex };
        }
        return state;
      }

      const sourceIndex = state.selectedTubeIndex;
      const targetIndex = clickedIndex;
      
      const sourceTube = [...state.tubes[sourceIndex]];
      const targetTube = [...state.tubes[targetIndex]];

      const colorToMove = sourceTube[sourceTube.length - 1];
      const topTargetColor = targetTube[targetTube.length - 1];

      const isValidMove = targetTube.length < 4 && (!topTargetColor || topTargetColor === colorToMove);

      if (isValidMove) {
        sourceTube.pop();
        targetTube.push(colorToMove);

        const newTubes = [...state.tubes];
        newTubes[sourceIndex] = sourceTube;
        newTubes[targetIndex] = targetTube;

        const isWinner = checkWinner(newTubes);

        return {
          ...state,
          tubes: newTubes,
          selectedTubeIndex: null, 
          isWinner
        };
      } else {
        if (state.tubes[clickedIndex].length > 0) {
          return { ...state, selectedTubeIndex: clickedIndex };
        }
      }

      return { ...state, selectedTubeIndex: null };
    }
    
    default:
      return state;
  }
}