import React, { useState } from 'react'
import { animated, useSpring, config } from 'react-spring/three'

export default function Octahedron() {
  const [hover, setHover] = useState(false)

  const { scale } = useSpring({
    scale: hover ? [1.5, 1.5, 1.5] : [1, 1, 1],
    config: config.wobbly,
  })

  return (
    <animated.mesh
      position={[-0.1, -1.2, -2]}
      rotation={[0, 0.5, 1.2]}
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      receiveShadow
      castShadow
    >
      <octahedronGeometry attach="geometry" args={[0.3, 0]} />
      <meshStandardMaterial
        attach="material"
        color="hsl(190, 100%, 70%)"
        roughness="0.3"
        flatShading={true}
      />
    </animated.mesh>
  )
}
