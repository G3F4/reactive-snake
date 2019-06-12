import React from 'react';
import './Cell.css';

interface GameProps {
  snakeCell: boolean;
}

const Cell: React.FC<GameProps> = ({ snakeCell }) => snakeCell ? (
  <div className="SnakePart" />
) : (
  <div className="GridCell" />
);

export default Cell;
