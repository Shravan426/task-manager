import { useState } from 'react';
import { TextInput, Button, Paper, Group } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

interface TaskFormProps {
    onTaskCreate: (task: string) => void;
}

export default function TaskForm({ onTaskCreate}: TaskFormProps) {
    const [task,setTask] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(task.trim()) {
            onTaskCreate(task);
            setTask('');
            showNotification({title:'Task added',message:'Your task has been added sucessfully!'});
        }
    };

    return (
        <Paper p="md" shadow='xs'>
            <form onSubmit={handleSubmit}>
                <TextInput value={task} onChange={(e) => setTask(e.currentTarget.value)} placeholder='Enter your task' label="New Task" required />
                <Group mt="md">
                    <Button>Add Task</Button>
                </Group>
            </form>
        </Paper>
    );
}