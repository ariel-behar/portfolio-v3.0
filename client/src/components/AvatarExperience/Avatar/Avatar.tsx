/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/models/650745a68a5f0e10f77629cd.glb --types 
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'
import { useControls } from 'leva'

export type ActionName = 'Crouch' | 'Idle' | 'Wave' | 'Salute'

interface GLTFAction extends THREE.AnimationClip {
	name: ActionName;
}

type GLTFResult = GLTF & {
	nodes: {
		Wolf3D_Hair: THREE.SkinnedMesh
		Wolf3D_Outfit_Top: THREE.SkinnedMesh
		Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
		Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
		Wolf3D_Body: THREE.SkinnedMesh
		EyeLeft: THREE.SkinnedMesh
		EyeRight: THREE.SkinnedMesh
		Wolf3D_Head: THREE.SkinnedMesh
		Wolf3D_Teeth: THREE.SkinnedMesh
		Hips: THREE.Bone
	}
	materials: {
		Wolf3D_Hair: THREE.MeshStandardMaterial
		Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
		Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
		Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
		Wolf3D_Body: THREE.MeshStandardMaterial
		Wolf3D_Eye: THREE.MeshStandardMaterial
		Wolf3D_Skin: THREE.MeshStandardMaterial
		Wolf3D_Teeth: THREE.MeshStandardMaterial
	}
	animations: GLTFAction[]
}

interface Props {
	isInView: boolean;
}

export function Avatar({
	isInView,
	...props
}: Props) {
	const { scene } = useGLTF('models/avatar/avatar.glb')
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
	const { nodes, materials } = useGraph(clone) as GLTFResult

	const groupRef = useRef<THREE.Group>()

	const { headFollow, cursorFollow } = useControls({
		headFollow: false,
		cursorFollow: false
	})

	const { animation } = useControls({
		animation: {
			value: 'Idle',
			options: ['Crouch', 'Idle', 'Wave', 'Salute']
		}
	})

	const { animations: wavingGesture } = useFBX("animations/waving.fbx")
	const { animations: breathingIdle } = useFBX("animations/breathing-idle.fbx")
	const { animations: crouchToStand } = useFBX("animations/crouch-to-stand.fbx")
	const { animations: salute } = useFBX("animations/salute.fbx")

	wavingGesture[0].name = 'Wave'
	breathingIdle[0].name = 'Idle'
	crouchToStand[0].name = 'Crouch'
	salute[0].name = 'Salute'

	const { actions } = useAnimations([wavingGesture[0], breathingIdle[0], crouchToStand[0], salute[0]], groupRef)

	useEffect(() => {
		actions["Crouch"].reset().play()

		setTimeout(() => {
            actions["Salute"].crossFadeFrom(actions["Crouch"], 1, true).play()

			setTimeout(() => {
				actions["Idle"].crossFadeFrom(actions["Salute"], 1, true).play()
			}, 2800);
        }, 1500);

	}, [isInView])

	// useEffect(() => {
	// 	actions[animation].reset().fadeIn(0.5).play()

	// 	return () => {
	// 		actions[animation].reset().fadeOut(0.5)
	// 	}
	// }, [animation])

	useFrame(state => {
		if (headFollow) {
			groupRef.current.getObjectByName("Head").lookAt(state.camera.position)
		}
		if (cursorFollow) {
			const target = new THREE.Vector3(state.pointer.x, state.pointer.y, 1)

			groupRef.current.getObjectByName("Head").lookAt(target)
			groupRef.current.getObjectByName("Spine2").lookAt(target)
		}
	})

	return (
		<group {...props} dispose={null} ref={groupRef} position-y={-1}>
			<primitive object={nodes.Hips} />
			<skinnedMesh
				geometry={nodes.Wolf3D_Hair.geometry}
				material={materials.Wolf3D_Hair}
				skeleton={nodes.Wolf3D_Hair.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Top.geometry}
				material={materials.Wolf3D_Outfit_Top}
				skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
				material={materials.Wolf3D_Outfit_Bottom}
				skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
				material={materials.Wolf3D_Outfit_Footwear}
				skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Body.geometry}
				material={materials.Wolf3D_Body}
				skeleton={nodes.Wolf3D_Body.skeleton}
			/>
			<skinnedMesh name="EyeLeft"
				geometry={nodes.EyeLeft.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeLeft.skeleton}
				morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
				morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
			/>
			<skinnedMesh name="EyeRight"
				geometry={nodes.EyeRight.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeRight.skeleton}
				morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
				morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
			/>
			<skinnedMesh name="Wolf3D_Head"
				geometry={nodes.Wolf3D_Head.geometry}
				material={materials.Wolf3D_Skin}
				skeleton={nodes.Wolf3D_Head.skeleton}
				morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
				morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
			/>
			<skinnedMesh name="Wolf3D_Teeth"
				geometry={nodes.Wolf3D_Teeth.geometry}
				material={materials.Wolf3D_Teeth}
				skeleton={nodes.Wolf3D_Teeth.skeleton}
				morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
				morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
			/>
		</group>
	)
}

export default Avatar;

useGLTF.preload('models/avatar/avatar.glb')
