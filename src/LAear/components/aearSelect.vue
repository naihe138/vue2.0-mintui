/**
* @file
* @author 何文林
* @date 2017/7/10
*/
<template>
	<div id="">
		<div class="area_ctrl" :class="show ? 'slideInUp' : 'slideInDown'">
			<div class="area_btn_box">
				<div class="area_btn larea_cancel" @click="close">取消</div>
				<div class="area_btn larea_finish" @click="finish">确定</div>
			</div>
			<div class="area_roll_mask">
				<div class="area_roll">
					<div>
						<div top="0" class="gear area_province"
								 data-areatype="area_province"
								 data-type="provs"
								 :data-len="provsData.length"
								 val="5"
								 @touchstart="gearTouchStart"
								 @touchmove="gearTouchMove"
								 @touchend="gearTouchEnd">
							<div class="tooth" v-for="item in provsData">{{item.text}}</div>
						</div>
						<div class="area_grid">
						</div>
					</div>
					<div>
						<div class="gear area_city" top="0" data-areatype="area_city" data-type="city"
								 :data-len="citysData.length"
								 @touchstart="gearTouchStart"
								 @touchmove="gearTouchMove"
								 @touchend="gearTouchEnd"
								 val="5">
							<div class="tooth" v-for="item in citysData">{{item.text}}</div>
						</div>
						<div class="area_grid">
						</div>
					</div>
					<div>
						<div class="gear area_county" top="0" data-areatype="area_county" :data-len="distsData.length"
								 @touchstart="gearTouchStart"
								 @touchmove="gearTouchMove"
								 @touchend="gearTouchEnd"
								 val="5">
							<div class="tooth" v-for="item in distsData">{{item.text}}</div>
						</div>
						<div class="area_grid">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import './picker.css'
  import {provs_data, citys_data, dists_data} from './LAreaData2'
  export default{
    props: {
      show: {
        type: Boolean,
				default: false
			}
    },
    data () {
      return {
        provsData: provs_data,
        citysData: [],
        distsData: [],
        select: {
          provs: '',
          city: '',
          county: ''
        }
      }
    },
    methods: {
      close: function (e) {
        this.$emit('cancel')
        e.preventDefault();
      },
      finish: function (e) {
        this.$emit('confirm', this.select)
        e.preventDefault();
      },
      gearTouchStart(e) {
        e.preventDefault();
        var target = e.target;
        while (true) {
          if (!target.classList.contains("gear")) {
            target = target.parentElement;
          } else {
            break
          }
        }
        clearInterval(target["int_" + target.id]);
        target["old_" + target.id] = e.targetTouches[0].screenY;
        target["o_t_" + target.id] = (
          new Date()).getTime();
        var top = target.getAttribute('top');
        if (top) {
          target["o_d_" + target.id] = parseFloat(top.replace(/em/g, ""));
        } else {
          target["o_d_" + target.id] = 0;
        }
        target.style.webkitTransitionDuration = target.style.transitionDuration = '0ms';
      },
      //手指移动
      gearTouchMove(e) {
        e.preventDefault();
        var target = e.target;
        while (true) {
          if (!target.classList.contains("gear")) {
            target = target.parentElement;
          } else {
            break
          }
        }
        target["new_" + target.id] = e.targetTouches[0].screenY;
        target["n_t_" + target.id] = (
          new Date()).getTime();
        var f = (
                target["new_" + target.id] - target["old_" + target.id]) * 30 / window.innerHeight;
        target["pos_" + target.id] = target["o_d_" + target.id] + f;
        target.style["-webkit-transform"] = 'translate3d(0,' + target["pos_" + target.id] + 'em,0)';
        target.setAttribute('top', target["pos_" + target.id] + 'em');
        if (e.targetTouches[0].screenY < 1) {
          gearTouchEnd(e);
        }
      },
      gearTouchEnd(e) {
        e.preventDefault();
        var target = e.target;
        while (true) {
          if (!target.classList.contains("gear")) {
            target = target.parentElement;
          } else {
            break;
          }
        }
        var flag = (target["new_" + target.id] - target["old_" + target.id]) / (target["n_t_" + target.id] - target["o_t_" + target.id]);
        if (Math.abs(flag) <= 0.2) {
          target["spd_" + target.id] = (
            flag < 0 ? -0.08 : 0.08);
        } else {
          if (Math.abs(flag) <= 0.5) {
            target["spd_" + target.id] = (
              flag < 0 ? -0.16 : 0.16);
          } else {
            target["spd_" + target.id] = flag / 2;
          }
        }
        if (!target["pos_" + target.id]) {
          target["pos_" + target.id] = 0;
        }
        this.rollGear(target);
      },
      rollGear(target) {
        var _this = this
        var d = 0;
        var stopGear = false;

        function setDuration () {
          target.style.webkitTransitionDuration = target.style.transitionDuration = '200ms';
          stopGear = true;
        }

        clearInterval(target["int_" + target.id]);
        target["int_" + target.id] = setInterval(function () {
          var pos = target["pos_" + target.id];
          var speed = target["spd_" + target.id] * Math.exp(-0.03 * d);
          pos += speed;
          if (Math.abs(speed) > 0.1) {
          } else {
            var b = Math.round(pos / 2) * 2;
            pos = b;
            setDuration();
          }
          if (pos > 0) {
            pos = 0;
            setDuration();
          }
          var minTop = -(
            target.dataset.len - 1) * 2;
          if (pos < minTop) {
            pos = minTop;
            setDuration();
          }
          if (stopGear) {
            var gearVal = Math.abs(pos) / 2;
            _this.setGear(target, gearVal);
            clearInterval(target["int_" + target.id]);
          }
          target["pos_" + target.id] = pos;
          target.style["-webkit-transform"] = 'translate3d(0,' + pos + 'em,0)';
          target.setAttribute('top', pos + 'em');
          d++;
        }, 30);
      },
      setGear(target, val) {
        var _self = this
        var endVal = Math.round(val);
        var type = target.getAttribute('data-type')
        if (type === 'provs') {
          _self.select.provs = _self.provsData[endVal].text
          _self.resetCity(endVal)
          _self.resetCounty(0)
        } else if (type === 'city') {
          _self.resetCounty(endVal)
        } else {
          this.select.county = this.distsData[endVal].text
        }
      },
      resetCity(endVal) {
        var city = document.querySelector('.area_city')
        if (citys_data[this.provsData[endVal].value]) {
          this.citysData = citys_data[this.provsData[endVal].value]
          this.select.city = this.citysData[0] ? this.citysData[0].text : ''
				} else {
          this.citysData = []
				}
        city.setAttribute('top', 0);
        city.style["-webkit-transform"] = 'translate3d(0, 0, 0)';
      },
      resetCounty(endVal) {
        var county = document.querySelector('.area_county')
        if (this.citysData.length > 0 && this.citysData[endVal]) {
          this.distsData = dists_data[this.citysData[endVal].value]
          this.select.county = this.distsData[0].text
				} else {
          this.distsData = []
        }
        county.setAttribute('top', 0);
        county.style["-webkit-transform"] = 'translate3d(0, 0, 0)';
      }
    },
    created() {
      this.citysData = citys_data[this.provsData[0].value]
      this.distsData = dists_data[this.citysData[0].value]
      this.select.provs = this.provsData[0].text
      this.select.city = this.citysData[0].text
      this.select.county = this.distsData[0].text
    }
  }
</script>

<style scoped>
	.area_ctrl {
		font-size: 12px;
	}
</style>
