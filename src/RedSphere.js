import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export default function RedSphere() {
  const ref = useRef()
  useFrame(
    (state) =>
      (ref.current.position.y =
        Math.sin(state.clock.getElapsedTime() / 4) * Math.PI + 0.4)
  )

  return (
    <mesh position={[-1.9, -1.7, 0.5]} ref={ref} receiveShadow castShadow>
      <sphereGeometry attach="geometry" args={[0.2, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color="hsl(6,80%,35%)"
        roughness="0.6"
      />
    </mesh>
  )
}
