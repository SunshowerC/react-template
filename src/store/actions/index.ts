type IAction = () => { type: string }

export const add: IAction = () => ({
  type: '+'
  //   payload: {
  //     id: ++nextTodoId,
  //     content
  //   }
})

export const multiple: IAction = () => ({
  type: 'x'
})
