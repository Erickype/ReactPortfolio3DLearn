import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43];
    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7]
    }
    screenScale = [1, 1, 1]

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition] = adjustIslandForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div>
      <Canvas className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island
            position={islandPosition}
            scale={islandScale}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
