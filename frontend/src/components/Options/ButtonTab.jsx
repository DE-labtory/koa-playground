import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions'

import styles from './ButtonTab.scss';

class ButtonTab extends Component {
    render() {
        return (
            <div>
                <button 
                >
                    button
                </button>
            </div>
        )
    }
}

export default connect(null, null)(ButtonTab);