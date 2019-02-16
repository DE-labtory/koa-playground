import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions'

import styles from './ButtonTab.scss';

class ButtonTab extends Component {


    render() {
        return (
            <div>
                <button 
                    onClick={this.props.addFile}
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