import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'
import { rotateAboutPoint } from './utils'

export default function GreenPipe() {
  const ref = useRef()

  useFrame(() => {
    rotateAboutPoint(
      ref.current,
      new THREE.Vector3(0, -1.3, 0),
      new THREE.Vector3(0, 0, 1),
      0.01,
      true
    )
  })

  return (
    <mesh
      ref={ref}
      position={[-0.3, -2, -0.6]}
      rotation={[0.5, 0, -0.5]}
      castShadow
      receiveShadow
    >
      <cylinderGeometry attach="geometry" args={[0.07, 0.07, 0.5, 32]} />
      <meshStandardMaterial
        attach="material"
        color="hsl(94, 92%, 50%)"
        roughness="0.6"
        // flatShading={true}
      />
    </mesh>
  )
}
