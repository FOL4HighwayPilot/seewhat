// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { Link } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';
import { Row, Col } from 'antd/lib/grid';
import Icon from 'antd/lib/icon';

import { EmptyTasksIcon } from 'icons';

export default function EmptyListComponent(): JSX.Element {
    return (
        <div className='cvat-empty-trash-bin-list'>
            <Row type='flex' justify='center' align='middle'>
                <Col>
                    <Icon className='cvat-empty-trash-bin-icon' component={EmptyTasksIcon} />
                </Col>
            </Row>
            <Row type='flex' justify='center' align='middle'>
                <Col>
                    <Text strong>No tasks deleted yet ...</Text>
                </Col>
            </Row>           
            <Row type='flex' justify='center' align='middle'>
                <Col>
                    <Link to='/tasks'>go to task list</Link>
                    <Text type='secondary'> or </Text>
                    <Link to='/projects'>go to project list</Link>
                </Col>
            </Row>
        </div>
    );
}
