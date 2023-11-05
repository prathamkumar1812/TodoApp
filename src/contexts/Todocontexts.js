import { createContext, useContext } from 'react';
export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "todo message",
        isDone: false,
    }],
    addTODO: () => {},
    updateTODO: (id, todo) => {},
    deleteTODO: (id) => {},
    toggleCompleter: (id) => {}

});

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;