import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import "./styles.css";
import { useState, useEffect } from 'react';
import { getNextState } from './logic/core';
import { getRules } from './logic/rules';


function Box({x, y, z}) {
	return (
		<mesh position={[x, y, z]}>
			<boxBufferGeometry attach="geometry" args={[0.9, 0.9, 0.9]} />
			<meshPhongMaterial attach="material" color="hotpink" />
		</mesh>
	);
}



function PositionedBoxes() {
  const [positions, setPositions] = useState([
    [0, 0, 0],
	[2, 0, 0],
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
	  console.log('interval');
      setPositions(prevPositions => {
		
		const next =  getNextState(prevPositions, getRules())
		return next;
	});
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setPositions]);

  return <Boxes key={positions.length} positions={positions} />;
}

function Boxes({positions = []}) {
	return (
		<>
			{positions.map((position, index) => (
				<Box key={index} x={position[0]} y={position[1]} z={position[2]} />
			))}
		</>
	)
}



createRoot(document.getElementById('root')).render(
	<Canvas>
		<OrbitControls />
		<Stars />
		<ambientLight intensity={0.5} />
		<directionalLight
			position={[0, 1, 0]}
			color="white"
			intensity={0.8}
			castShadow
			shadow-mapSize-width={1024}
			shadow-mapSize-height={1024}
			shadow-camera-far={50}
			shadow-camera-left={-10}
			shadow-camera-right={10}
			shadow-camera-top={10}
			shadow-camera-bottom={-10}
		/>
		<spotLight position={[10, 15, 10]} angle={0.3} />
		<PositionedBoxes />
	</Canvas>
);