import React, { Component } from 'react';
import Editor from '../components/Editor/Editor';
import FileBrowser from '../components/FileBrowser/FileBrowser';
import Options from '../components/Options/Options';

import styles from './Playground.scss';

export default class Playground extends Component {
    render() {
        return (
            <div className="Playground">
                    <FileBrowser />
                    <Editor />
                    <Options />
            </div>
        )
    }
}