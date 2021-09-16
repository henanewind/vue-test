let id = 0
const CycleCount = 2

export function WaitFor (x, callBackFun) {
  if (x > CycleCount) {
    clearTimeout(id)
    // over
    if (callBackFun) {
      callBackFun()
    }
    return
  }
  console.log('log... x =', x)

  //
  if (id > 0) {
    console.log('销毁 timer id =', x)
    clearTimeout(id)
  }
  id = setTimeout(() => {
    WaitFor(++x, callBackFun)
  }, 1000)
}
