import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Plane } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Car interior component with 3D visualization
const CarInteriorModel = () => {
  const seatRef = useRef<THREE.Group>(null);
  const dashboardRef = useRef<THREE.Mesh>(null);
  const steeringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (seatRef.current) {
      seatRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (steeringRef.current) {
      steeringRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group>
      {/* Car Body Frame */}
      <group>
        {/* Front windshield frame */}
        <Box args={[4, 0.1, 0.1]} position={[0, 1.5, 2]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </Box>
        
        {/* Side pillars */}
        <Box args={[0.1, 2, 0.1]} position={[-2, 0.5, 1.5]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </Box>
        <Box args={[0.1, 2, 0.1]} position={[2, 0.5, 1.5]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </Box>
        
        {/* Roof frame */}
        <Box args={[4, 0.1, 3]} position={[0, 1.8, 0]}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </Box>
      </group>

      {/* Dashboard */}
      <Box
        ref={dashboardRef}
        args={[4, 0.4, 1.2]}
        position={[0, 0, 1.8]}
      >
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.8}
          roughness={0.2}
        />
      </Box>

      {/* Central console */}
      <Box args={[0.8, 0.3, 1.5]} position={[0, -0.2, 0.3]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </Box>

      {/* Steering Wheel */}
      <group ref={steeringRef} position={[-0.6, 0.2, 1.2]}>
        {/* Steering wheel ring */}
        <mesh>
          <torusGeometry args={[0.4, 0.05, 8, 16]} />
          <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Steering column */}
        <Box args={[0.05, 0.05, 0.8]} position={[0, 0, -0.4]}>
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
        </Box>
      </group>

      {/* Driver Seat */}
      <group ref={seatRef} position={[-0.8, -0.5, 0]}>
        {/* Seat base */}
        <Box args={[0.6, 0.1, 0.6]}>
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </Box>
        {/* Seat back */}
        <Box args={[0.6, 0.8, 0.1]} position={[0, 0.35, -0.25]}>
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </Box>
        {/* Headrest */}
        <Box args={[0.4, 0.2, 0.1]} position={[0, 0.9, -0.2]}>
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </Box>
      </group>

      {/* Passenger Seat */}
      <group position={[0.8, -0.5, 0]}>
        {/* Seat base */}
        <Box args={[0.6, 0.1, 0.6]}>
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </Box>
        {/* Seat back */}
        <Box args={[0.6, 0.8, 0.1]} position={[0, 0.35, -0.25]}>
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </Box>
        {/* Headrest */}
        <Box args={[0.4, 0.2, 0.1]} position={[0, 0.9, -0.2]}>
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </Box>
      </group>

      {/* Door panels */}
      <Plane args={[1.5, 1.5]} rotation={[0, Math.PI / 2, 0]} position={[-2.2, 0.3, 0]}>
        <meshStandardMaterial color="#2a2a2a" roughness={0.7} />
      </Plane>
      <Plane args={[1.5, 1.5]} rotation={[0, -Math.PI / 2, 0]} position={[2.2, 0.3, 0]}>
        <meshStandardMaterial color="#2a2a2a" roughness={0.7} />
      </Plane>

      {/* Floor */}
      <Plane args={[5, 4]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </Plane>

      {/* Interior lighting */}
      <Sphere args={[0.03]} position={[0, 1.6, 0]}>
        <meshBasicMaterial color="#ffffff" />
      </Sphere>
      <pointLight position={[0, 1.6, 0]} color="#ffffff" intensity={0.3} />
      
      {/* Ambient blue accent lighting */}
      <Sphere args={[0.02]} position={[-1.8, 0, 0]}>
        <meshBasicMaterial color="#00ffff" />
      </Sphere>
      <Sphere args={[0.02]} position={[1.8, 0, 0]}>
        <meshBasicMaterial color="#00ffff" />
      </Sphere>
      <pointLight position={[-1.8, 0, 0]} color="#00ffff" intensity={0.4} />
      <pointLight position={[1.8, 0, 0]} color="#00ffff" intensity={0.4} />
      
      {/* Text label */}
      <Text
        position={[0, 1.2, 2.5]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        ElectricDrive Interior
      </Text>
    </group>
  );
};

const CarInterior3D = () => {

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-chrome">Car</span> <span className="text-glow">Interior</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the detailed interior structure of our premium electric vehicle.
            Every component crafted for luxury, comfort, and advanced technology.
          </p>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div 
          className="relative h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-background via-card to-background border border-border/50"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Canvas
            camera={{ position: [4, 3, 4], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.2} />
            
            <CarInteriorModel />
            
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={2}
              maxDistance={8}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
          
          {/* Controls overlay */}
          <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur-sm rounded-lg p-4 text-sm text-muted-foreground">
            <p>🖱️ Drag to rotate • 🔍 Scroll to zoom • ✋ Right-click to pan</p>
          </div>
        </motion.div>

        {/* Interior Features */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 rounded-lg bg-card/30 border border-border/50">
            <div className="text-4xl mb-4">🪑</div>
            <h3 className="text-xl font-semibold mb-2 text-chrome">Premium Seating</h3>
            <p className="text-muted-foreground">Hand-crafted leather seats with memory foam and heating/cooling systems</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/30 border border-border/50">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2 text-chrome">Smart Dashboard</h3>
            <p className="text-muted-foreground">AI-powered interface with holographic displays and gesture controls</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/30 border border-border/50">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold mb-2 text-chrome">Immersive Audio</h3>
            <p className="text-muted-foreground">3D spatial audio system with 32 speakers and active noise cancellation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarInterior3D;