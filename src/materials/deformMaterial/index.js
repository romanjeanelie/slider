import { extend } from "react-three-fiber";
import { shaderMaterial } from "drei";

import vertex from "./vertex.glsl";
import fragment from "./fragment.glsl";

const DeformMaterial = shaderMaterial({ time: 0, hover: 0, intensity: 0, map: null, mouse: [0, 0], hover: false }, vertex, fragment);

extend({ DeformMaterial });
