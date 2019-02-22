import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions'

import styles from './FixedInfoBox.scss';

class FixedInfoBox extends Component {
    render() {
        return (
            <div className="FixedInfoBox">
                <span className="FixedInfoBox-text">
                    에디터에서 작성한 코드를 Compile하면 Bytecode로 변환됩니다
                </span>
            </div>
        )
    }
}

export default connect(null, null)(FixedInfoBox);