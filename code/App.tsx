import { Data, animate, Override, Animatable } from 'framer'

const data = Data({
  scale: Animatable(1),
  password: '',
  inputOpacity: Animatable(0.33),
})

export const Key: Override = props => {
  let keyCharacter = props.children[0].props.children[0].props.text
  return {
    onTap() {
      animate.ease(data.inputOpacity, 1, {
        duration: 0.3,
      })
      let newPassword = data.password
      newPassword += keyCharacter
      data.password = newPassword
    },
  }
}

export const InputString: Override = props => {
  return {
    text: data.password,
    opacity: data.inputOpacity,
  }
}

export const BackSpace: Override = props => {
  return {
    onTap() {
      let newPassword = data.password
      newPassword = newPassword.slice(0, -1)
      if (newPassword == '')
        animate.ease(data.inputOpacity, 0.33, {
          duration: 0.3,
        })
      data.password = newPassword
    },
  }
}
