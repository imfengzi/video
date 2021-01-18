export default {
  namespace: 'user',
  state: {
    username: '',
    todos: [
      {
        text: 'Consider using Redux',
        completed: true,
      },
      {
        text: 'Keep all state in a single tree',
        completed: false,
      },
    ],
  },
  reducers: {
    setUsername(state, username) {
      return {...state, username};
    },
    addTodos(state, data) {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: data,
            completed: true,
          },
        ],
      };
    },
  },
};
