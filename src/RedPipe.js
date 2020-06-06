import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'
import { rotateAboutPoint } from './utils'

export default function RedPipe({ color, args, ...props }) {
  const ref = useRef()

  useFrame(() => {
    rotateAboutPoint(
      ref.current,
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 1),
      0.011,
      true
    )
  })

  return (
    <mesh
      ref={ref}
      position={[-0.6, 0.8, 3]}
      rotation={[-0.3, 0, -0.5]}
      receiveShadow
      castShadow
    >
      <cylinderGeometry attach="geometry" args={[0.05, 0.05, 0.6, 32]} />
      <meshStandardMaterial
        attach="material"
        color="hsl(6,80%,35%)"
        roughness="0.6"
        // flatShading={true}
      />
    </mesh>
  )
}
