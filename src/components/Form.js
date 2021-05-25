import React from 'react'

function form(props) {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" placeholder="City ..." value={props.inputCity} onChange={props.handleChange} />
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default form
