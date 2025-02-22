import { useState } from "react";
import AddTodo from "./pages/AddTodo";
import Todos from "./pages/Todos";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding:0 0 0 30px;
`;

function App() {

  const [TotalTodos, setTotalTodos] = useState([]);

  const handleReceivedTodo = (inputValue) => {
    if (inputValue !== '' && !TotalTodos.some(todo => todo.name === inputValue)) {
      const newTodo = {
        id: TotalTodos.length + 1, 
        key: TotalTodos.length + 1,
        name: inputValue
      };
      setTotalTodos(prevTodos => [...prevTodos, newTodo]);
  }
}

const ReceivedDeleteTodo = (idValue) => {
  setTotalTodos(prevState => prevState.filter(item => item.id !== idValue));
}

  return (
    <StyledDiv>
      <h2>Todo Application</h2>
      <AddTodo ReceiveTodo={handleReceivedTodo} />
      <Todos ReceivedDeleteTodo={ReceivedDeleteTodo} TotalTodos={TotalTodos} />
    </StyledDiv>
  );
}

export default App;
