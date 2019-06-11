import React from 'react';
import './App.css';

const GRID_SIZE = 50;

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Grid">
        {Array.from({ length: GRID_SIZE })
          .map(() => (
            <div className="GridRow">
              {Array.from({ length: GRID_SIZE })
                .map(() => (
                  <div className="GridCell">
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;
