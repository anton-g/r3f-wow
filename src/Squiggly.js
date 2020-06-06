import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

var curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(-0.4, 0, 0),
  new THREE.Vector3(-0.6, -0.4, 0),
  new THREE.Vector3(-0.9, -0.3, 0),
  new THREE.Vector3(-0.9, 0.1, 0),
  new THREE.Vector3(-1.2, 0.05, 0),
  new THREE.Vector3(-1.2, 0.05, 0),
])

export default function Squiggly() {
  const group = useRef()
  const spin = useRef(false)
  useFrame(() => {
    if (spin.current)
      group.current.rotateOnAxis(new THREE.Vector3(1, 0, 0), 0.03)
  })

  return (
    <group
      position={[-1.2, -1.1, 1.8]}
      rotation={[0, 0.5, 0]}
      ref={group}
      onClick={() => (spin.current = !spin.current)}
    >
      <mesh rotation={[0, -Math.PI / 2, 0]} castShadow receiveShadow>
        <torusGeometry attach="geometry" args={[0.13, 0.03, 16, 32]} />
        <meshStandardMaterial
          attach="material"
          color="hsl(228, 100%, 50%)"
          roughness="0.6"
        />
      </mesh>
      <mesh position={[0.7, 0.4, 0]} receiveShadow castShadow>
        <tubeGeometry attach="geometry" args={[curve, 64, 0.05, 32, false]} />
        <meshStandardMaterial attach="material" color="hsl(94, 92%, 50%)" />
      </mesh>
    </group>
  )
}
