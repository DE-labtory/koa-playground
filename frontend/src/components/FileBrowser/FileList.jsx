import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './FileList.scss';
import actions from '../../redux/actions';

class FileList extends Component {
    render() {
        const { fileListObject } = this.props;

        return (
            <ul>
                { 
                    Object.keys(fileListObject).map(fileName => (
                        <li
                            key={fileName}
                        >
                            <span
                                onClick={() => this.props.selectFile(fileName)}
                            >
                                {fileName}
                            </span>
                            <button
                                onClick={() => this.props.deleteFile(fileName)}
                            >
                                delete
                            </button>
                        </li>
                    )) 
                }
            </ul>
        )
    }
}


const mapStateToProps = state => ({
    fileListObject: state.playgroundReducer.fileListObject,
})

const mapDispatchToProps = {
    deleteFile: actions.playgroundActions.deleteFile,
    selectFile: actions.playgroundActions.selectFile,
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList);