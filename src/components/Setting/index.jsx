import  { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import FetchButton from "../FetchButton"

import styles from "./index.module.scss"

const Settings = () => {
    const apiUrl = "https://opentdb.com/api_category.php"
    
    const [options, setOptions] = useState("")

  
    const questionCategory = useSelector(state=> state.options.question_category);
    const questionDifficulty = useSelector(state=> state.options.question_difficulty);
    const questionType = useSelector(state=> state.options.question_type);
	const questionAmount = useSelector(state => state.options.amount_of_questions)

    const dispatch = useDispatch()

    useEffect(() => {
        const handleLoadingChange = value => {
            dispatch({
                type: "CHANGE_LOADING",
                loading: value
            })
        }
        handleLoadingChange(true);
        fetch(apiUrl)
            .then((res) => res.json())
            .then((response) => {
                handleLoadingChange(false);
                setOptions(response.trivia_categories);
            })
    }, [setOptions, dispatch]);

    const handleCategoryChange = (e) => {
        dispatch({
            type: "CHANGE_CATEGORY",
            value: e.target.value
        })
    }

   const handleDifficultyChange = (e) => {
    dispatch({
        type: "CHANGE_DIFFICULTY",
        value: e.target.value
    })
    }

    const handleTypeChange = (e) => {
        dispatch({
            type: "CHANGE_TYPE",
            value: e.target.value
        })
    }

    const handleNumberChange = (e) => {
        dispatch({
            type: "CHANGE_AMOUNT",
            value: e.target.value
        })
    }

 
    
        return (
        <div className={styles.card}>
            <div>
                    <h2>Select category:</h2>
                    <select value={questionCategory} onChange={handleCategoryChange} disabled>
                        <option>All</option>
                        {options &&
                            options.map((option) => (
                                <option value={option.id} key={option.id}>
                                    {option.name}
                                </option>
                            ))}
                    </select>
            </div>
            <div>
                    <h2>Select difficulty:</h2>       
                    <select value={questionDifficulty} onChange={handleDifficultyChange} disabled>
                        <option value="" key="diff-0">All</option>
                        <option value="easy" key="diff-1">Easy</option>
                        <option value="medium" key="diff-2">Medium</option>
                        <option value="hard" key="diff-3">Hard</option>
                    </select>        
            </div>
            <div>
                    <h2>Question type:</h2>       
                    <select value={questionType} onChange={handleTypeChange} disabled>
                        <option value="" key="type-0"> All </option>
                        <option value="multiple" key="type-1"> Multiple choice</option>
                        <option value="boolean" key="type-2"> True or False</option>
                    </select>        
            </div>
            <div>
                    <h2>Amount of questions:</h2>       
                        <input value={questionAmount} onChange={handleNumberChange} inputMode="numeric" disabled
                        type="number" min="1"></input>
            </div>
            <div>
            <FetchButton text="Let's start!" />
            </div>
        </div>
        );
}

export default Settings;