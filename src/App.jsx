import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [matrix, setMatrix] = useState(Array(9).fill(''));
  const [clickOrder, setClickOrder] = useState([]);
  const colors = ['red', 'blue', 'yellow', 'purple', 'pink', 'cyan', 'lime', 'brown', 'magenta'];

  const handleBoxClick = (index) => {
    // Change the color of the clicked box to green
    const updatedMatrix = [...matrix];
    updatedMatrix[index] = 'green';
    setMatrix(updatedMatrix);

    // Update the click order
    const updatedClickOrder = [...clickOrder, index];
    setClickOrder(updatedClickOrder);

    // Check if all boxes have been clicked
    if (updatedClickOrder.length === 9) {
      // Change colors to orange in the order of original clicks
      const orangeMatrix = updatedClickOrder.map((clickIndex) => 'orange');
      setMatrix(orangeMatrix);
      
      // Reset the click order for the next round
      setClickOrder([]);
    }
  };

  return (
    <div className="container">
      <h1>Click to Change Colors</h1>
      <div className="matrix">
        {matrix.map((color, index) => (
          <div
            key={index}
            className={`box ${color}`}
            onClick={() => handleBoxClick(index)}
          >
            Box {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
