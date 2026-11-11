import { useContext } from 'react';
import { GameProvider, GameContext } from './GameContext.tsx';
import { GameBoard } from './GameBoard.tsx';
import './App.css';

function GameContent() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GameContent deve ser usado dentro de um GameProvider");
  }

  const { state } = context;

  return (
    <div className="app-container">
      <h1 className="title">Magic Sort</h1>
      <p className="subtitle">Organize as cores para que cada tubo tenha apenas uma cor.</p>
      
      {state.isWinner && (
        <h2 className="winner-message">🎉 Parabéns, você venceu! 🎉</h2>
      )}

      <GameBoard />
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}

export default App;