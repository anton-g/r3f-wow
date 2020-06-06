import React from 'react'

export default function Lights(props) {
  return (
    <>
      {/* <pointLight args={['#c2e8ff', 1, 20]} position={[5, 10, 5]} /> */}
      <pointLight args={['#fff0b8', 0.6, 30]} position={[-5, 10, 5]} />
      <hemisphereLight args={[0xffd1fd, 0x555555, 2]} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1}
        args={['#c2e8ff', 1, 20]}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
    </>
  )
}
