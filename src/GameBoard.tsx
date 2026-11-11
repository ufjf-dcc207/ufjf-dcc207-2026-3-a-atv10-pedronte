import { useContext } from 'react';
import { GameContext } from './GameContext';
import { Tube } from './Tube';
import './GameBoard.css';

export function GameBoard() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GameBoard deve ser usado dentro de um GameProvider");
  }

  const { state, dispatch } = context;

  return (
    <div className="game-board">
      {state.tubes.map((tube, index) => (
        <Tube
          key={index}
          items={tube}
          isSelected={state.selectedTubeIndex === index}
          onClick={() => dispatch({ type: 'CLICK_TUBE', payload: index })}
        />
      ))}
    </div>
  );
}