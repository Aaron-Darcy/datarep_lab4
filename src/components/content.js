//imports
import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            //content Div
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Content;