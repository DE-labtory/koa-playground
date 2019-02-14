import React, { Component } from 'react';

import styles from './TextEditor.scss';

export default class TextEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        }
    }
    render() {
        //TODO state를 redux에서 불러오는 것으로 변경
        return (
            <div>
                <div>TextEditor</div>
                <textarea
                    value={this.state.text}
                    onChange={({target}) => {this.setState({
                        text: target.value
                    })}}
                />
            </div>
        )
    }
}