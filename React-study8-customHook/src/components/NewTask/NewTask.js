import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/useHttp";

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHttp();

  const enterTaskHandler = (taskText) => {
    const requestConfig = {
      url: "https://react-practice-ccc77-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      body: JSON.stringify({ text: taskText }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const createTask = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    };

    sendRequest(requestConfig, createTask);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
