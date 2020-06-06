import React, { useState } from 'react'
import { animated, useSpring, config } from 'react-spring/three'

export default function Octahedron({ color, args, ...props }) {
  const [hover, setHover] = useState(false)

  const { scale } = useSpring({
    scale: hover ? [1.5, 1.5, 1.5] : [1, 1, 1],
    config: config.wobbly,
  })

  return (
    <animated.mesh
      {...props}
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      receiveShadow
      castShadow
    >
      <octahedronGeometry attach="geometry" args={args} />
      <meshStandardMaterial
        attach="material"
        color={color}
        roughness="0.3"
        flatShading={true}
      />
    </animated.mesh>
  )
}
