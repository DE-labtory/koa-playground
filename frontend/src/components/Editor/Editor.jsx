import React, { Component } from 'react';

import FileTab from './FileTab';
import TextEditor from './TextEditor';

import styles from './Editor.scss';

export default class Editor extends Component {
    render() {
        return (
            <div
                className="Editor"        
            >
                <FileTab />
                <TextEditor />
            </div>
        )
    }
}