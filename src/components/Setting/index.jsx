import react, { useState, useEffect } from "react"

import styles from "./index.module.scss"

const Settings = () => {
    const apiUrl = "https://opentdb.com/api_category.php"
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState("")
    const [questionCategory, setQuestionCategory] = useState("")
    const [questionDifficulty, setQuestionDifficulty] = useState("")
    const [questionType, setQuestionType] = useState("");
	const [numberOfQuestions, setNumberOfQuestions] = useState(10);


    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((response) => {
                setLoading(false);
                setOptions(response.trivia_categories);
            })
    }, [setOptions]);

    const handleCategoryChange = (e) => {
        setQuestionCategory(e.target.value)
    }

   const handleDifficultyChange = (e) => {
        setQuestionDifficulty(e.target.value)
    }

    const handleTypeChange = (e) => {
        setQuestionType(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNumberOfQuestions(e.target.value)
    }

 
    if (!loading) {
        return (
        <div className={styles.card}>
            <div>
                    <h2>Select category:</h2>
                    <select value={questionCategory} onChange={handleCategoryChange}>
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
                    <select value={questionDifficulty} onChange={handleDifficultyChange}>
                        <option value="" key="diff-0">All</option>
                        <option value="easy" key="diff-1">Easy</option>
                        <option value="medium" key="diff-2">Medium</option>
                        <option value="hard" key="diff-3">Hard</option>
                    </select>        
            </div>
            <div>
                    <h2>Question type:</h2>       
                    <select value={questionType} onChange={handleTypeChange}>
                        <option value="" key="type-0"> All </option>
                        <option value="multiple" key="type-1"> Multiple choice</option>
                        <option value="boolean" key="type-2"> True or False</option>
                    </select>        
            </div>
            <div>
                    <h2>Amount of questions:</h2>       
                        <input value={numberOfQuestions} onChange={handleNumberChange}
                        type="number" min="1"></input>
            </div>
        </div>
        );
    } else {
        <p>
            loading...
        </p>
    }
}

export default Settings;