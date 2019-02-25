import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';

import styles from './FileList.scss';
import actions from '../../redux/actions';

class FileList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isContextMenuOpened: false,
            contextMenuFileName: '',
        }

        this.handleContextMenu = this.handleContextMenu.bind(this);
    }

    handleContextMenu(e) {
        e.preventDefault();

        this.setState({
            isContextMenuOpened: true,
            contextMenuFileName: e.target.value,
        })
        console.log(e.target);
        // Open Context Menu
    }

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
                            onContextMenu={this.handleContextMenu}
                        >
                            <span
                                className="FileList-item-text"
                            >
                                {fileName}
                            </span>
                            <div
                                style={{
                                    display: (this.state.isContextMenuOpened && this.state.contextMenuFileName === currentFileName)? 'block': 'none'
                                }}
                            >
                                <span>
                                    Rename
                                </span>
                                <span>
                                    Delete
                                </span>
                            </div>
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