import react, { useState, useEffect } from "react"

import "./index.module.scss"

const Settings = () => {
    const apiUrl = "https://opentdb.com/api_category.php"
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState("")
    const [questionCategory, setQuestionCategory] = useState("")

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


    if (!loading) {
        return (
            <div>
                <div>
                    <h2>Select Category:</h2>
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
            </div>
        );
    } else {
        <p>
            loading...
        </p>
    }
}

export default Settings;