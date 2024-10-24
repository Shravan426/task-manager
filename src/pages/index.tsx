import { useState } from "react";
import Layout from "./components/Layout";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Home() {
  const [tasks,setTasks] = useState<string[]>([]);

  const handleTaskCreate = (task: string) => {
    setTasks([...tasks,task]);
  };

  const handleTaskDelete = (taskToDelete: string) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <Layout>
      <TaskForm onTaskCreate={handleTaskCreate}/>
      <TaskList tasks={tasks} onTaskDelete={handleTaskDelete}/>
    </Layout>
  );
}