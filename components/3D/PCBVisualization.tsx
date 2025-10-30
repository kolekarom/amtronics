"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
import { useRef, useEffect } from "react"
import type * as THREE from "three"

function PCBBoard() {
  const meshRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = 0.3
      meshRef.current.rotation.y = 0.5
    }
  }, [])

  return (
    <group ref={meshRef}>
      {/* Main PCB Board */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 3, 0.1]} />
        <meshStandardMaterial color="#1a472a" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Circuit Traces */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[3.8, 2.8]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.3} />
      </mesh>

      {/* Components - Blue */}
      {[
        [-1.2, 0.8, 0.15],
        [0.5, 1.2, 0.15],
        [-0.8, -0.9, 0.15],
      ].map((pos, i) => (
        <mesh key={`blue-${i}`} position={pos as [number, number, number]}>
          <boxGeometry args={[0.3, 0.3, 0.2]} />
          <meshStandardMaterial color="#0066CC" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}

      {/* Components - Orange */}
      {[
        [1.2, -0.5, 0.15],
        [-0.3, 0.2, 0.15],
        [0.8, 0.5, 0.15],
      ].map((pos, i) => (
        <mesh key={`orange-${i}`} position={pos as [number, number, number]}>
          <boxGeometry args={[0.25, 0.25, 0.18]} />
          <meshStandardMaterial color="#FF6B35" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}

      {/* Connectors */}
      {[
        [-1.8, 0, 0.15],
        [1.8, 0, 0.15],
      ].map((pos, i) => (
        <mesh key={`connector-${i}`} position={pos as [number, number, number]}>
          <boxGeometry args={[0.2, 0.8, 0.15]} />
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
    </group>
  )
}

export default function PCBVisualization() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <Environment preset="studio" />
        <PCBBoard />
        <OrbitControls autoRotate autoRotateSpeed={4} enableZoom={true} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
      </Canvas>
    </div>
  )
}
