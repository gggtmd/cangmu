import {onBeforeUnmount, onMounted, ref} from "vue";

const useInterval = (fn, time) => {
  let bannerInterval = null

  // 下一步
  const next = () => {
    fn()
  }

  // 开启定时器
  const start = () => {
    if(bannerInterval === null) {
      bannerInterval = setInterval(() => {
        next()
      }, time)
    }
  }

  // 关闭定时器
  const stop = () => {
    clearInterval(bannerInterval)
    bannerInterval = null
  }

  onMounted(() => {
    start()
  })

  onBeforeUnmount(() => {
    stop()
  })

  return {next, start, stop}
}

export default useInterval
