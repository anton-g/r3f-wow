// Remake of https://codepen.io/a-trost/pen/mdeLyRa by @trostcodes in react-three-fiber
import React from 'react'
import { Canvas } from 'react-three-fiber'
import {
  PerspectiveCamera,
  TrackballControls,
  Sky,
  Plane,
  softShadows,
} from 'drei'
import './styles.css'
import Lights from './Lights'
import Icosahedron from './Icosahedron'
import Octahedron from './Octahedron'
import Cylinder from './Cylinder'
import Helix from './Helix'
import Text from './Text'
import PinkTorus from './PinkTorus'
import Squiggly from './Squiggly'
import PurpleIcosahedron from './PurpleIcosahedron'
import RedPipe from './RedPipe'
import GreenPipe from './GreenPipe'
import BlueSphere from './BlueSphere'
import RedSphere from './RedSphere'

softShadows()

export default function App() {
  return (
    <Canvas shadowMap colorManagement pixelRatio={window.devicePixelRatio}>
      <BlueSphere />
      <Icosahedron />
      <PurpleIcosahedron />
      <Octahedron />
      <Text />
      <Cylinder />
      <GreenPipe />
      <RedPipe />
      <RedSphere />
      <Helix />
      <Squiggly />
      <PinkTorus />
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        args={[100, 100]}
        position={[0, -3, 0]}
        receiveShadow
      >
        <shadowMaterial attach="material" opacity={0.4} />
      </Plane>
      <Lights />
      <PerspectiveCamera
        fov={25}
        near={0.001}
        far={1000}
        position={[0, 0, 11]}
      />
      <TrackballControls panSpeed={0.4} />
      <Sky />
    </Canvas>
  )
}
