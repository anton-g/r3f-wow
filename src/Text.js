import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { polyInOut } from './utils'
import { useSpring, animated } from 'react-spring/three'
const typeface = require('./helvetiker_bold.typeface.json')

export default function Text() {
  const [font, setFont] = useState(null)

  const { position } = useSpring({
    from: { position: [-1.5, -0.4, 1] },
    to: { position: [-1.5, -0.4, 2.3] },
    loop: { reverse: !!font }, // Just setting this to true doesn't work for some reason 🤔
    config: {
      duration: 3000,
      easing: polyInOut,
    },
  })

  useEffect(() => {
    const loader = new THREE.FontLoader()
    const r = loader.parse(typeface)
    setFont(r)
  }, [])

  if (!font) return null

  return (
    <animated.mesh position={position} receiveShadow castShadow>
      <textGeometry
        attach="geometry"
        args={[
          'WOW',
          {
            font: font,
            size: 0.8,
            height: 0.5,
            curveSegments: 14,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.05,
            bevelOffset: 0,
            bevelSegments: 8,
          },
        ]}
      />
      <meshStandardMaterial
        attach="material"
        color={'hsl(211, 97%, 55%)'}
        roughness="0.67"
        flatShading={true}
      />
    </animated.mesh>
  )
}
