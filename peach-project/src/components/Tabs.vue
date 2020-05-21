<template lang="html">
  <div>
    <ul class='tabs_header d-flex justify-content-center'>
      <li v-bind:class="{'active': selectedIndex == index}" v-for='(tab, index) in tabs' :key='tab.title' @click='selectTab(index)' class="col text-center">
        <span>{{ tab.title }}</span>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: []         // all of the tabs
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.selectTab(0)
},
methods: {
    selectTab (i) {
      this.selectedIndex = i;
      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
 }

}
</script>

<style lang="css" scoped>
 ul.tabs_header{
    padding: 0;
 }
 ul.tabs_header > li {
    display: inline-block;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    padding: 10px;
}
.active {
    color:aliceblue;
}
ul.tabs_header > li:first-child {
    display: none;
}
ul.tabs_header > li.active span{
  position: relative;
}
ul.tabs_header > li.active span:after {
    content: "";
    border-bottom: 2px solid #fff;
    width: 20px;
    position: absolute;
    bottom: -4px;
    left: 0;
}
</style>