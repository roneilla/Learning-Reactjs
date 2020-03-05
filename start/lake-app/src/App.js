import React from "react";

function App() {
  return (
    <ul>
      {lakes.map((lake) => (
        <li key={lake.id}>
          {lake.name}, Trailhead: {lake.trailhead}
        </li>
      ))}
    </ul>
  );
}

export default App;
