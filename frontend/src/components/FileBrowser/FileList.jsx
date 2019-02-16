import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';

import styles from './FileList.scss';
import actions from '../../redux/actions';

class FileList extends Component {
    render() {
        const { fileListObject, currentFileName } = this.props;

        return (
            <ul
                className="FileList"
            >
                { 
                    Object.keys(fileListObject).map(fileName => (
                        <li
                            key={fileName}
                            className={ClassNames({
                                "FileList-item": true,
                                "FileList-item-selected": currentFileName === fileName,
                            })}
                            onClick={() => this.props.selectFile(fileName)}
                        >
                            <span
                                className="FileList-item-text"
                            >
                                {fileName}
                            </span>
                        </li>
                    )) 
                }
            </ul>
        )
    }
}


const mapStateToProps = state => ({
    fileListObject: state.playgroundReducer.fileListObject,
    currentFileName: state.playgroundReducer.currentFileName,
})

const mapDispatchToProps = {
    deleteFile: actions.playgroundActions.deleteFile,
    selectFile: actions.playgroundActions.selectFile,
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList);