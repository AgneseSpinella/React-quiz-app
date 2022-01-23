import styles from "./App.module.scss"
import { useSelector } from 'react-redux'

import Settings from './components/Setting';
import Question from "./components/Question";
import FinalScreen from "./components/FinalScreen";



function App() {
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  let component = ""

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />
  } else if (!questions.length) {
    component = <Settings />
  } else {
    component = <FinalScreen />
  }

  return (
    <div className="App">
      <div className="app-container">{component}</div>
    </div>
  )
}

export default App