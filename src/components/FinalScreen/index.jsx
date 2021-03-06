import styles from "../Setting/index.module.scss"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FetchButton from '../FetchButton'


const FinalScreen = () => {
  const score = useSelector((state) => state.score)

  const dispatch = useDispatch()

  const replay = () => {
    dispatch({
      type: 'SET_INDEX',
      index: 0,
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  const settings = () => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: [],
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  return (
    <div className={styles.card}>
      <h3>Final Score: {score}</h3>
      <button onClick={replay}>Try again</button>
      <FetchButton text="Ask me new questions" />
      <button onClick={settings}>Back to settings</button>
    </div>
  )
}
export default FinalScreen