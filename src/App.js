import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Text } from "drei";
import Effects from "./Effects";
import Scene from "./Scene";

function App() {
  return (
    <Canvas
      shadowMap
      colorManagement
      camera={{ position: [0, 0, 20], zoom: 1 }}
      concurrent
    >
      <color args={["#010101"]} attach="background" />
      <Suspense fallback="Loading">
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
