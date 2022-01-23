import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Question = () => {
    const [options, setOptions] = useState([])
    const [answerSelected, setAnswerSelected] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    const score = useSelector(state => state.score)
    const questions = useSelector(state => state.questions)
    const questionIndex = useSelector(state => state.index)

    const dispatch= useDispatch()

    const question = questions[questionIndex]
    const answer = question.correct_answer

    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max))
    }

    useEffect(() =>{
        if (!question) {
            return;
        }
        let answers = [...question.incorrect_answer]
        answers.splice(getRandomInt(question.incorrect_answers.length), 0, question.correct_answer)
        setOptions(answers)
    }, [question])


    const handleListItemClick = event => {
        setAnswerSelected(true)
        setSelectedAnswer(event.target.textContent)
        if (event.target.textContent === answer) {
            dispatch ({
                type: "SET_SCORE",
                score: score + 1
            })
        }
        if (questionIndex + 1 <= questions.length) {
            setTimeout(() => {
                setAnswerSelected(false)
                setSelectedAnswer(null)
                dispatch({
                    type : "SET_INDEX",
                    index: questionIndex + 1,
                })
            }, 2000)
        }

    }
    return(
        <div>
            <p>Question {questionIndex + 1}</p>
                <h3>{question.question}</h3>
                <ul>
                    {options.map((option, i) =>{
                        <li key={i} onClick={handleListItemClick}> 
                        {option}
                        </li>
                    })}
                </ul>
                <div>
                    <h3>Score: {score} / {questions.length}</h3>
                </div>
        </div>
    )
}

export default Question