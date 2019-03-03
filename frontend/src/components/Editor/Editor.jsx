import React, { Component } from 'react';

import CurrentFileInfo from './CurrentFileInfo';
import TextEditor from './TextEditor';

import styles from './Editor.scss';

export default class Editor extends Component {
    render() {
        return (
            <div
                className="Editor"        
            >
                <CurrentFileInfo />
                <TextEditor />
            </div>
        )
    }
}