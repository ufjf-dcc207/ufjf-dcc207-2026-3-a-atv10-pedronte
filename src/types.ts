export type Color = string;

export interface GameState {
  tubes: Color[][];
  selectedTubeIndex: number | null;
  isWinner: boolean;
}

export type GameAction = 
  | { type: 'CLICK_TUBE'; payload: number };