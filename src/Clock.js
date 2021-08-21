import React, { Component } from 'react';


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({ time: new Date().toLocaleString() })
    }

    render() {
        return (
            <div>
                <h1>Welcome to {this.props.title}</h1>
                <h2>{this.state.time}</h2>
            </div>
        );
    }
}

export default Clock;


