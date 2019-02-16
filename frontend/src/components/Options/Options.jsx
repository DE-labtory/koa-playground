import React, { Component } from 'react';

import ButtonTab from './ButtonTab';
import ResultTab from './ResultTab';

import styles from './Options.scss';

export default class Options extends Component {
    render() {
        return (
            <div
                style={{
                    border: '1px solid black'
                }}       
                className="Options"     
            >
                Options
                <ButtonTab />
                <ResultTab />
            </div>
        )
    }
}