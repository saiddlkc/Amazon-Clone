import React from "react";
import json from "../../database/data.json";
const Cameras = () => {
  return (
    <div>
      {json.cameras.map((camera) => {
        return (
          <div key={camera.id}>
            <h2>{camera.title}</h2>
            <img src={camera.images[0]} alt={camera.title} />
            <p>
              {camera.price.value} {camera.price.currency}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cameras;
