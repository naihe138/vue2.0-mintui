/**
 * @file
 * @author 何文林
 * @date 2017/7/10
 */
export const toggle = {
  data () {
    return {
      isShowing: false
    }
  },
  methods: {
    toggleShow () {
      this.isShowing = !this.isShowing
    }
  }
}
