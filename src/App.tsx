type Props = {}

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EventEmitter from './utils/EventEmitter'
let counter = 0
const App = (props: Props) => {
	const navigate = useNavigate()

	useEffect(() => {
		EventEmitter.subscribe('increaseCounter', handleIncreaseCounter.bind(this))
		return () => {}
	}, [])

	const handleIncreaseCounter = () => {
		console.log('Event Recieved')
		counter++
	}

	return (
		<div className="container">
			<br />
			Hello World
			<br />
			<button
				onClick={() => {
					navigate('/home')
				}}
			>
				Click Here to GO to HOME page
			</button>
			Counter{counter}
		</div>
	)
}

export default App
