import React from 'react'

export const About = () => {
    return (
        <div className="container my-5">
            <h1>About this Application</h1>
            <p className="lead">
                This is a simple Todo List web application built using React.
                It allows you to manage daily tasks, add new items, and delete completed ones.
            </p>
            <hr />
            <h4>Features:</h4>
            <ul>
                <li>Add new todos</li>
                <li>Delete completed todos</li>
                <li>Local storage persistence</li>
            </ul>
        </div>
    )
}