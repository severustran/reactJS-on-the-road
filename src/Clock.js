import React, {Component} from 'react';

class Clock extends React.Component {
    render() {
        return (
            <h1>It is {new Date().toLocaleTimeString()}</h1>
        )
    }
}

export default Clock;