import React, { Component } from 'react';

import BrowserButtonTab from './BrowserButtonTab';
import FileList from './FileList';

import styles from './FileBrowser.scss';

export default class FileBrowser extends Component {
    render() {
        return (
            <div
                className="FileBrowser"
            >
                <BrowserButtonTab />
                <FileList />
            </div>
        )
    }
}