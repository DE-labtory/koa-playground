import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './FileTab.scss';

class FileTab extends Component {
    render() {
        return (
            <div>
                FileTab
            </div>
        )
    }
}

const mapStateToProps = state => {
    
}

export default connect()(FileTab);