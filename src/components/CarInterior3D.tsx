import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Plane } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Car interior component with 3D visualization
const CarInteriorModel = ({ selectedCar }: { selectedCar: string }) => {
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
      {/* Dashboard */}
      <Box
        ref={dashboardRef}
        args={[4, 0.3, 1]}
        position={[0, 0, 1.5]}
      >
        <meshStandardMaterial
          color={selectedCar === 'luxury' ? '#2a2a2a' : '#1a1a1a'}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>

      {/* Steering Wheel */}
      <group ref={steeringRef} position={[0.5, 0.2, 0.8]}>
        <Sphere args={[0.02]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#333" />
        </Sphere>
        <Box args={[0.8, 0.03, 0.03]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
        </Box>
        <Box args={[0.03, 0.4, 0.03]} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
        </Box>
      </group>

      {/* Driver Seat */}
      <group ref={seatRef} position={[-0.8, -0.5, 0]}>
        <Box args={[0.6, 0.8, 0.6]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color={selectedCar === 'luxury' ? '#8B4513' : '#2F2F2F'} 
            roughness={0.8}
          />
        </Box>
        <Box args={[0.6, 0.1, 0.8]} position={[0, 0.45, 0.1]}>
          <meshStandardMaterial 
            color={selectedCar === 'luxury' ? '#8B4513' : '#2F2F2F'} 
            roughness={0.8}
          />
        </Box>
      </group>

      {/* Passenger Seat */}
      <group position={[0.8, -0.5, 0]}>
        <Box args={[0.6, 0.8, 0.6]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color={selectedCar === 'luxury' ? '#8B4513' : '#2F2F2F'} 
            roughness={0.8}
          />
        </Box>
        <Box args={[0.6, 0.1, 0.8]} position={[0, 0.45, 0.1]}>
          <meshStandardMaterial 
            color={selectedCar === 'luxury' ? '#8B4513' : '#2F2F2F'} 
            roughness={0.8}
          />
        </Box>
      </group>

      {/* Floor */}
      <Plane args={[5, 4]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </Plane>

      {/* Ceiling */}
      <Plane args={[5, 4]} rotation={[Math.PI / 2, 0, 0]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#2a2a2a" roughness={0.7} />
      </Plane>

      {/* Ambient lighting effect */}
      <Sphere args={[0.05]} position={[0, 1.5, 1]}>
        <meshBasicMaterial color="#00ffff" />
      </Sphere>
      <pointLight position={[0, 1.5, 1]} color="#00ffff" intensity={0.5} />
      
      {/* Text labels */}
      <Text
        position={[0, 1, 2]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {selectedCar === 'luxury' ? 'Premium Interior' : 'Sport Interior'}
      </Text>
    </group>
  );
};

const CarInterior3D = () => {
  const [selectedCar, setSelectedCar] = useState<'luxury' | 'sport'>('luxury');

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
            <span className="text-chrome">Interior</span> <span className="text-glow">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore the meticulously crafted interiors of our electric vehicles in 3D.
            Every detail designed for comfort, luxury, and innovation.
          </p>
          
          {/* Interior Type Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCar('luxury')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCar === 'luxury'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-card/80'
              }`}
            >
              Luxury Interior
            </button>
            <button
              onClick={() => setSelectedCar('sport')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCar === 'sport'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-card/80'
              }`}
            >
              Sport Interior
            </button>
          </div>
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
            camera={{ position: [3, 2, 3], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />
            
            <CarInteriorModel selectedCar={selectedCar} />
            
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