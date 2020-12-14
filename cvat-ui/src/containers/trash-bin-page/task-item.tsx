// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { connect } from 'react-redux';

import { TasksQuery, CombinedState, ActiveInference } from 'reducers/interfaces';

import TaskItemComponent from 'components/trash-bin-page/task-item';

import { getTasksAsync, deleteTaskAsync } from 'actions/tasks-actions';
import { cancelInferenceAsync } from 'actions/models-actions';

interface StateToProps {
    deleted: boolean;
    hidden: boolean;
    previewImage: string;
    taskInstance: any;
    activeInference: ActiveInference | null;
}

interface DispatchToProps {
    getTasks(query: TasksQuery): void;
    cancelAutoAnnotation(): void;
    deleteTask: (taskInstance: any) => void;
}

interface OwnProps {
    idx: number;
    taskID: number;
    taskInstance: any;
}

function mapStateToProps(state: CombinedState, own: OwnProps): StateToProps {
    const task = state.tasks.current[own.idx];
    const { deletes } = state.tasks.activities;
    const id = own.taskID;

    return {
        hidden: state.tasks.hideEmpty && task.instance.jobs.length === 0,
        deleted: id in deletes ? deletes[id] === true : false,
        previewImage: task.preview,
        taskInstance: task.instance,
        activeInference: state.models.inferences[id] || null,
    };
}

function mapDispatchToProps(dispatch: any, own: OwnProps): DispatchToProps {
    return {
        getTasks(query: TasksQuery): void {
            dispatch(getTasksAsync(query));
        },
        cancelAutoAnnotation(): void {
            dispatch(cancelInferenceAsync(own.taskID));
        },
        deleteTask: (taskInstance: any): void => {
            dispatch(deleteTaskAsync(taskInstance));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItemComponent);
