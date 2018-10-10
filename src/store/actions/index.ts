type IAction = () => { type: string }
import { PLUS, MULTIPLE } from './types'

export const add: IAction = () => ({
  type: PLUS
  //   payload: {
  //     id: ++nextTodoId,
  //     content
  //   }
})

export const multiple: IAction = () => ({
  type: MULTIPLE
})
