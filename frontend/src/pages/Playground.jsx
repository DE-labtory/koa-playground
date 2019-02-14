import React, { Component } from 'react';
import Editor from '../components/Editor/Editor';
import FileBrowser from '../components/FileBrowser/FileBrowser';

export default class Playground extends Component {
    render() {
        return (
            <div>
                <FileBrowser />                
                <Editor />
            </div>
        )
    }
}