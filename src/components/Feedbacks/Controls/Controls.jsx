const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        (options.map((option, index)=> {
                return (
                    <button type="button" key={index} name={option} onClick={onLeaveFeedback}> {option}</button>
            )
        }))
    )
}

export default FeedbackOptions