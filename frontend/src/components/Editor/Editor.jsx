import React, { Component } from 'react';

import FileTab from './FileTab';
import TextEditor from './TextEditor';

import styles from './Editor.scss';

export default class Editor extends Component {
    render() {
        return (
            <div
                style={{
                    border: '1px solid black'
                }}
                className="Editor"        
            >
                <FileTab />
                <TextEditor />
            </div>
        )
    }
}