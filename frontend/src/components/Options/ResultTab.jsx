import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions'

import styles from './ResultTab.scss';

class ResultTab extends Component {
    render() {
        return (
            <div>
                <button>
                    Result Tab
                </button>
            </div>
        )
    }
}

export default connect(null, null)(ResultTab);