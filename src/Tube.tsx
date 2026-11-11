import './Tube.css';
import type { Color } from './types'; 

export interface TubeProps {
  items: Color[];
  isSelected: boolean;
  onClick: () => void;
}

export function Tube({ items, isSelected, onClick }: TubeProps) {
  return (
    <div 
      className={`tube ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      {items.map((color, idx) => (
        <div 
          key={idx} 
          className="item" 
          style={{ backgroundColor: color }} 
        />
      ))}
    </div>
  );
}