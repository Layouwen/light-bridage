export default {
  // 切换城市，并保存在localStorage中
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) { console.log(e) }
  }
}
