import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions'

import styles from './ButtonTab.scss';

class ButtonTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newFileName: '',
        }
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.newFileName}
                    onChange={(e) => this.setState({
                        newFileName: e.target.value,
                    })}
                />
                <button 
                    onClick={() => {
                        this.props.addFile(this.state.newFileName)
                        this.setState({
                            newFileName: '',
                        })
                    }}
                >
                    New
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addFile: actions.playgroundActions.addFile,
}

export default connect(null, mapDispatchToProps)(ButtonTab);