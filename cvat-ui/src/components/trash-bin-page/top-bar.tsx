// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { useHistory } from 'react-router';
import { Row, Col } from 'antd/lib/grid';
import Input from 'antd/lib/input';
import Text from 'antd/lib/typography/Text';

interface VisibleTopBarProps {
    onSearch: (value: string) => void;
    searchValue: string;
}

export default function TopBarComponent(props: VisibleTopBarProps): JSX.Element {
    const { searchValue, onSearch } = props;

    const history = useHistory();

    return (
        <>
            <Row type='flex' justify='start' align='middle'>
                <Col offset={4} md={11} lg={9} xl={8} xxl={7}>
                    <Text className='cvat-title'>Tasks</Text>
                    <Input.Search defaultValue={searchValue} onSearch={onSearch} size='large' placeholder='Search' />
                </Col>                
            </Row>
        </>
    );
}