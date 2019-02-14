import React, { Component } from 'react';

import ButtonTab from './ButtonTab';
import FileList from './FileList';

import styles from './FileBrowser.scss';

export default class FileBrowser extends Component {
    render() {
        return (
            <div>
                <ButtonTab />
                <FileList />
            </div>
        )
    }
}