'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  hue: number
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set initial canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasDimensions()

    // Create particles
    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 1,
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 - 1.5,
      hue: Math.random() * 60 + 200,
    })

    const particles: Particle[] = Array.from({ length: 100 }, createParticle)

    // Update particle position and properties
    const updateParticle = (particle: Particle) => {
      particle.x += particle.speedX
      particle.y += particle.speedY
      
      if (particle.size > 0.2) particle.size -= 0.1

      // Bounce off walls
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

      // Reset particle when too small
      if (particle.size <= 0.2) {
        Object.assign(particle, createParticle())
      }
    }

    // Draw single particle
    const drawParticle = (particle: Particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `hsl(${particle.hue}, 100%, 50%)`
      ctx.fill()
    }

    // Animation loop
    const animate = () => {
      // Add fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw all particles
      particles.forEach(particle => {
        updateParticle(particle)
        drawParticle(particle)
      })

      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

export default AnimatedBackground