//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import VideosContext from '../../contexts/VideosContext'

function EnterVideo({ videoWidth, videoHeight }) {
	const { videos } = useContext(VideosContext)

	const orientationPicker = () => {
		if (window.innerWidth >= window.innerHeight) return true
		else return false
	}

	const isLandscape = orientationPicker()

	const picker = () => {
		if (isLandscape) return Math.floor(Math.random() * 3)
	}

	const pick = picker()

	const cssChange = () => {
		let chosenColor = 0
		if (videos[pick].VideoColor == 'Red') {
		chosenColor = 0
		console.log(videos[pick].VideoColor)

		} else if (videos[pick].VideoColor == 'Yellow') {
			chosenColor = 1
		} else if (videos[pick].VideoColor == 'Brown') {
			chosenColor = 2
		} else if (videos[pick].VideoColor == 'Pink') {
			chosenColor = 3
		}

		/* Keys */
		const keyMainColor = '--main-color'
		const keySecColor = '--sec-color'
		const keyThirdColor = '--third-color'
		const keyMainColorHover = '--third-color-hover'

		/* Values */
		const valMainColor1 = '#bc3d36'
		const valSecColor1 = '#53565a'
		const valThirdColor1 = '#ba716d'
		const valMainColorHover1 = '#ba716d'

		const valGlobalHover = '#f8f7f2'

		const valMainColor2 = '#e8b733'
		const valSecColor2 = '#f8f7f2'
		const valThirdColor2 = '#103B58'
		const valMainColorHover2 = '#e6cb81'

		const valMainColor3 = '#9a6f39'
		const valSecColor3 = '#f8f7f2'
		const valThirdColor3 = '#FFD551'
		const valMainColorHover3 = '#9d876b'

		switch (chosenColor) {
			case 0:
				document
					.querySelector(':root')
					.style.setProperty(keyMainColor, valMainColor1)
				document
					.querySelector(':root')
					.style.setProperty(keySecColor, valSecColor1)
				document
					.querySelector(':root')
					.style.setProperty(keyThirdColor, valThirdColor1)
				document
					.querySelector(':root')
					.style.setProperty(keyMainColorHover, valMainColorHover1)
				break
			case 1:
				document
					.querySelector(':root')
					.style.setProperty(keyMainColor, valMainColor2)
				document
					.querySelector(':root')
					.style.setProperty(keySecColor, valSecColor2)
				document
					.querySelector(':root')
					.style.setProperty(keyThirdColor, valThirdColor2)
				document
					.querySelector(':root')
					.style.setProperty(keyMainColorHover, valMainColorHover2)
				break
			case 2:
				document
					.querySelector(':root')
					.style.setProperty(keyMainColor, valMainColor3)
				document
					.querySelector(':root')
					.style.setProperty(keySecColor, valSecColor3)
				document
					.querySelector(':root')
					.style.setProperty(keyThirdColor, valThirdColor3)
				document
					.querySelector(':root')
					.style.setProperty(keyMainColorHover, valMainColorHover3)
				break
		}
	}

	useEffect(() => {
		cssChange()
	}, [])
	return (
		<>
			<section className='main'>
				<div className='main-container'>
					<video
						id='video-main'
						width={videoWidth}
						height={videoHeight}
						loop
						autoPlay
						muted
					>
						<source src={videos[pick].VideoId} type='video/mp4'></source>
					</video>
					<div className='video-overlay' id='video-text1'>
						{videos[pick].Sentence1Part1}
						<br />
						{videos[pick].Sentence1Part2}
					</div>
					<div className='video-overlay2' id='video-text2'>
						{videos[pick].Sentence2}
					</div>
				</div>
			</section>
		</>
	)
}

//EnterVideo.defaultProps = {
//}

//EnterVideo.propTypes = {
//}

export default EnterVideo
