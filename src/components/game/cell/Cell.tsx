import React from 'react';
import './Cell.css';

interface GameProps {
  snakeCell?: boolean;
}

const Cell: React.FC<GameProps> = ({ snakeCell = false }) => snakeCell ? (
  <div className="SnakePart" />
) : (
  <div className="Cell" />
);

export default Cell;
