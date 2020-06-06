import React, { useState, useRef } from 'react'
import { animated, useSpring, config } from 'react-spring/three'

export default function PurpleIcosahedron() {
  const [hover, setHover] = useState(false)
  const clicked = useRef(false)

  const { scale } = useSpring({
    scale: hover ? [1.5, 1.5, 1.5] : [1, 1, 1],
    config: config.wobbly,
  })

  const [{ rotation }, animate] = useSpring(() => ({
    rotation: [-0.3, -0.7, 0.3],
    config: config.wobbly,
  }))

  const onClick = () => {
    animate({
      rotation: clicked.current ? [-0.3, -0.7, 0.3] : [-0.3, 4, 0.3],
    })
    clicked.current = !clicked.current
  }

  return (
    <animated.mesh
      position={[-1.8, 1.5, -2.5]}
      rotation={rotation}
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={onClick}
      receiveShadow
      castShadow
    >
      <icosahedronGeometry attach="geometry" args={[0.5, 0]} />
      <meshStandardMaterial
        attach="material"
        color="hsl(251, 95%, 70%)"
        roughness="0.6"
        flatShading={true}
      />
    </animated.mesh>
  )
}
