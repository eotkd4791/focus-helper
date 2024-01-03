import { FC, useEffect, useState } from 'react'
import { css } from '@emotion/react'

const PomodoroTimer: FC = () => {
	const [endTime] = useState(50)

	useEffect(() => {
		if (endTime > 0) {
			const timerId = setInterval(() => {}, 1000)
			return () => clearInterval(timerId)
		}
	}, [endTime])

	return (
		<div className="timer-container" css={timerContainer}>
			<div id="timer" className="timer" css={timer}>
				<div id="lines">
					{Array.from({ length: 30 })
						.fill(0)
						.map((_, i) => {
							return (
								<div
									key={i}
									className="line"
									css={i % 5 === 0 ? thickLine : thinLine}
									style={{ transform: `rotate(${i * 6}deg)` }}
								/>
							)
						})}
				</div>
				<div className="cover1" css={cover1} />
				<div id="num-container">
					{Array.from({ length: 6 })
						.fill(0)
						.map((_, i) => {
							const left = 45
							const right = 15
							const leftText = left + 5 * i

							return (
								<div
									key={i}
									css={numBox}
									style={{ transform: `rotate(${i * 30}deg)` }}
								>
									<span style={{ transform: `rotate(${-30 * i}deg)` }}>
										{leftText >= 60 ? leftText - 60 : leftText}
									</span>
									<span style={{ transform: `rotate(${-30 * i}deg)` }}>
										{right + 5 * i}
									</span>
								</div>
							)
						})}
				</div>
				<div id="fins">
					{Array.from({ length: endTime })
						.fill(0)
						.map((_, min) =>
							Array.from({ length: 60 })
								.fill(0)
								.map((_, sec) => (
									<div
										key={`${min} ${sec}`}
										css={fin}
										style={{
											transform: `rotate(${min * 6 + sec * 0.1}deg)`,
										}}
									/>
								)),
						)}
				</div>
				<div css={cover2} />
			</div>
		</div>
	)
}

export default PomodoroTimer

const timerContainer = css`
	color: rgb(50, 50, 50);
	font-family: 'Roboto', sans-serif;
	display: inline-block;
	padding: 40px;
	border-radius: 20%;
	border: 15px solid rgb(55, 55, 55);
	box-shadow:
		inset 0 0 3px 3px rgba(50, 50, 50, 0.3),
		inset 0 0 1px 2px rgba(50, 50, 50, 0.2);
`

const timer = css`
	position: relative;
	font-size: 20px;
	width: 15em;
	height: 15em;
`

const thinLine = css`
	width: 100%;
	height: 1px;
	position: absolute;
	top: calc(50% - 1px / 2);
	background: #000;
`

const thickLine = css`
	${thinLine}
	width: calc(100% + 0.4em);
	height: 3px;
	top: calc(50% - 3px / 2);
	left: calc(-0.4em / 2);
`

const cover1 = css`
	position: absolute;
	width: calc(100% - 4%);
	height: calc(100% - 4%);
	left: calc(4% / 2);
	top: calc(4% / 2);
	border-radius: 50%;
	background: #fff;
	z-index: 1;
`

const numBox = css`
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100% + 18%);
	height: 40px;
	top: calc(50% - 40px / 2);
	left: calc(-18% / 2);
	font-weight: 600;
`

const fin = css`
	width: 1px;
	height: calc(50% - 0.3em);
	position: absolute;
	top: 0.3em;
	left: calc(50% - 1px / 2);
	background: rgb(255, 57, 50);
	z-index: 2;
	transform-origin: bottom;
`

const cover2 = css`
	width: 18%;
	height: 18%;
	position: absolute;
	top: calc(50% - 18% / 2);
	left: calc(50% - 18% / 2);
	border-radius: 50%;
	background-color: #fff;
	z-index: 3;
	box-shadow:
		0 0 3px 3px rgba(50, 50, 50, 0.4),
		0 0 1px 2px rgba(50, 50, 50, 0.3);
`
