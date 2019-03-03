import React, { Component } from 'react';

import FlexibleInfoBox from './FlexibleInfoBox';
import ButtonTab from './ButtonTab';
import ExecuteBtn from './ExecuteBtn';
import FixedInfoBox from './FixedInfoBox';
import ResultBox from './ResultBox';

import styles from './Options.scss';

export default class Options extends Component {
    render() {
        return (
            <div
                className="Options"     
            >
                <FlexibleInfoBox />
                <ButtonTab />
                <ExecuteBtn />
                <FixedInfoBox />
                <ResultBox />
            </div>
        )
    }
}