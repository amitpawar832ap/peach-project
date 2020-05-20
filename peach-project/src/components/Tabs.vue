<template lang="html">
  <div>
    <ul class='tabs_header ml-3'>
      <li v-bind:class="{'active': selectedIndex == index}" v-for='(tab, index) in tabs' :key='tab.title' @click='selectTab(index)'>
        {{ tab.title }}
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
 /* ul.tabs_header > li {
    padding: 20px;
    display: inline-block;
    margin-right: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
  }

  .active {
    color:aliceblue;
  }*/
</style>