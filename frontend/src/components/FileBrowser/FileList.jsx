import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './FileList.scss';
import actions from '../../redux/actions';

class FileList extends Component {
    render() {
        const { fileList } = this.props;

        return (
            <ul>
                { Object.keys(fileList).map(file => (
                    <li
                        key={file}
                        onClick={() => this.props.selectFile(file)}
                    >
                        {file}
                        <button
                            key={file + 'delete btn'}
                            onClick={() => this.props.deleteFile(file)}
                        >
                            delete
                        </button>
                    </li>

                )) }
            </ul>
        )
    }
}


const mapStateToProps = state => ({
    fileList: state.playgroundReducer.fileList,
})

const mapDispatchToProps = {
    deleteFile: actions.playgroundActions.deleteFile,
    renameFile: actions.playgroundActions.renameFile,
    selectFile: actions.playgroundActions.selectFile,
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList);