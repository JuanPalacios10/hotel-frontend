export const formatLoginData = (data) => {
  if (!(data instanceof Object)) return

  const dataArr = Object.entries(data)[1]

  return {
    username: dataArr[0],
    password: dataArr[1]
  }
}
