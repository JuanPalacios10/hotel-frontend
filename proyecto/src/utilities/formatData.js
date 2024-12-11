export const formatLoginData = (data) => {
  if (!(data instanceof Object)) return

  const dataKeys = Object.keys(data)

  return {
    username: data[dataKeys[0]],
    password: data[dataKeys[1]]
  }
}

export const formatRegisterData = (data) => {
  if (!(data instanceof Object)) return

  const dataKeys = Object.keys(data)

  return {
    username: data[dataKeys[0]],
    email: data[dataKeys[1]],
    phone: data[dataKeys[2]],
    password: data[dataKeys[3]]
  }
}
