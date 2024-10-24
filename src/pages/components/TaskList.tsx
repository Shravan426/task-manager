import {Card,Text,Group,Button} from '@mantine/core';

interface TaskListProps {
    tasks: string[];
    onTaskDelete: (task: string) => void;
}

export default function TaskList({ tasks, onTaskDelete}: TaskListProps) {
    return (
        <>
        {tasks.length === 0 ? (
            <Text>No tasks yet</Text>
        ):(
            tasks.map((task,index) => (
                <Card key={index} shadow='sm' padding="lg" mt="md">
                    <Group>
                        <Text>{task}</Text>
                        <Button color="red" onClick={() => onTaskDelete(task)}>Delete</Button>
                    </Group>
                </Card>
            ))
        )}
        </>
    );
}