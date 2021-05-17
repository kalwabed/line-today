export const getAllData = async () => {
  try {
    return await (await fetch('https://cors.bridged.cc/https://today.line.me/id/portaljson')).json()
  } catch (err) {
    console.error(err)
  }
}
