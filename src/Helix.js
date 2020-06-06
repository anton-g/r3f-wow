import React from 'react'
import { HelixCurve } from './helixCurve'
import { useSpring, animated } from 'react-spring/three'

const helix = new HelixCurve()

export default function Helix() {
  const { rotation } = useSpring({
    from: { rotation: [-1, -1, -1.7] },
    to: { rotation: [-1, -1, -9.5] },
    loop: { reverse: true },
    config: {
      tension: 90,
      friction: 8,
    },
  })

  return (
    <animated.mesh
      position={[1.1, 1, 1.5]}
      rotation={rotation}
      castShadow
      receiveShadow
    >
      <tubeBufferGeometry
        attach="geometry"
        args={[helix, 100, 0.03, 10, false]}
      />
      <meshStandardMaterial
        attach="material"
        color="hsl(6,80%,35%)"
        roughness="0.6"
        // flatShading={true}
      />
    </animated.mesh>
  )
}
