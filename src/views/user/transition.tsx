import React from 'react'
import Transition from 'react-transition-group/Transition'

const duration = 500

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

// 父组件传入 in 值，决定是否触发 显示/隐藏
// duration 决定过度时间有多长
// 触发了过渡后，state in 状态变更： exited -> entering -> entered; out 状态变更： entered -> exiting -> exited
const Fade = ({ in: inProp }) => (
  <Transition in={inProp} enter={false} timeout={duration}>
    {state => (
      <div>
        <h1>state: {state}</h1>
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          I'm a fade Transition!
        </div>
      </div>
    )}
  </Transition>
)

export default Fade
