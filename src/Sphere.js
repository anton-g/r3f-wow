import React from 'react'

export default function Sphere({ color, args, ...props }) {
  return (
    <mesh {...props} receiveShadow castShadow>
      <sphereGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} roughness="0.6" />
    </mesh>
  )
}
