import React from 'react'
import { useSpring, animated } from 'react-spring/three'
import { polyInOut } from './utils'

export default function Cylinder() {
  const { position, rotation } = useSpring({
    from: { position: [1.3, 1.3, 2], rotation: [0.5, 0, -0.2] },
    to: { position: [1.4, 1.6, 2.3], rotation: [6.75, 6, -0.2] },
    loop: { reverse: true },
    config: {
      duration: 3000,
      easing: polyInOut,
    },
  })

  return (
    <animated.mesh
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
    >
      <cylinderGeometry attach="geometry" args={[0.25, 0.25, 0.15, 32]} />
      <meshStandardMaterial
        attach="material"
        color="hsl(220, 84%, 76%)"
        roughness="0.6"
        // flatShading={true}
      />
    </animated.mesh>
  )
}
