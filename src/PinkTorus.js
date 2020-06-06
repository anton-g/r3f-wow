// See https://codesandbox.io/s/r3f-sky-g5373 for example this is based on
import React, { useState } from 'react'
import { MeshWobbleMaterial, Torus } from 'drei'
import { a, useSpring } from '@react-spring/three'

const AnimatedTorus = a(Torus)
const AnimatedWobbleMaterial = a(MeshWobbleMaterial)

export default function PinkTorus() {
  const [active, set] = useState(false)
  const { f } = useSpring({
    f: Number(active),
    from: { f: Number(true) },
    config: { mass: 5, tension: 400, friction: 150 },
  })

  const minFactor = 2
  const maxFactor = 1
  const size = 1
  const x = f.to([0, 1], [size / minFactor, size / maxFactor])
  const y = f.to([0, 1], [size / minFactor, size / maxFactor])
  const z = f.to([0, 1], [size / minFactor, size / maxFactor])
  const factor = f.to([0, 0.1, 0.5, 0.9, 1], [0, 1, 2, 1, 0])

  return (
    <AnimatedTorus
      args={[0.3, 0.15, 16, 32]}
      position={[1, -0.8, 3.5]}
      scale-x={x}
      scale-y={y}
      scale-z={z}
      onClick={(e) => {
        e.stopPropagation()
        set(!active)
      }}
    >
      <AnimatedWobbleMaterial color="hotpink" factor={factor} speed={8} />
    </AnimatedTorus>
  )
}
