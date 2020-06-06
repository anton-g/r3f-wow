import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring/three'

export default function BlueSphere() {
  const [clicked, setClicked] = useState(false)

  const { scale } = useSpring({
    scale: clicked ? [2, 2, 2] : [1, 1, 1],
    config: {
      tension: 300,
      friction: 4,
    },
  })

  return (
    <animated.mesh
      position={[0, 2, 0]}
      scale={scale}
      onClick={() => setClicked(!clicked)}
      castShadow
      receiveShadow
    >
      <animated.sphereGeometry attach="geometry" args={[0.25, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color="hsl(228, 100%, 50%)"
        roughness="0.6"
      />
    </animated.mesh>
  )
}
