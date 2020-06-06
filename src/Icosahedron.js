import React, { useState } from 'react'
import { animated, useSpring, config } from 'react-spring/three'

export default function Icosahedron() {
  const [hover, setHover] = useState(false)

  const { position, rotation } = useSpring({
    position: hover ? [0.2, 0.3, -1] : [0.2, 0.7, -1],
    rotation: hover ? [2, 0, 0] : [0, 0, 0],
    config: config.wobbly,
  })

  return (
    <animated.mesh
      position={position}
      rotation={rotation}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      receiveShadow
      castShadow
    >
      <icosahedronGeometry attach="geometry" args={[0.75, 1]} />
      <meshStandardMaterial
        attach="material"
        color="hsl(33, 60%, 50%)"
        roughness="0.6"
        flatShading={true}
      />
    </animated.mesh>
  )
}
