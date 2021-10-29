import { extend } from "react-three-fiber";
import { shaderMaterial } from "drei";

import vertex from "./vertex.glsl";
import fragment from "./fragment.glsl";

const NoiseMaterial = shaderMaterial({ time: 0, opacity: 1 }, vertex, fragment);

extend({ NoiseMaterial });
