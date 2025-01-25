'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const GalaxyBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const sizes = []

    for (let i = 0; i < 10000; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(2000))
      vertices.push(THREE.MathUtils.randFloatSpread(2000))
      vertices.push(THREE.MathUtils.randFloatSpread(2000))

      sizes.push(THREE.MathUtils.randFloat(1, 3))
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      sizeAttenuation: true
    })

    const stars = new THREE.Points(geometry, material)
    scene.add(stars)

    camera.position.z = 1000

    const animate = () => {
      requestAnimationFrame(animate)

      stars.rotation.x += 0.0005
      stars.rotation.y += 0.0005

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
}

export default GalaxyBackground