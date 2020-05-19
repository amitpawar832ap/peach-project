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

<style lang="css">
  ul.tabs_header > li {
    padding: 20px;
    display: inline-block;
    margin-right: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
  }

  .active {
    color:aliceblue;
  }

  /*ul.tabs__header > li.tab__selected {
    font-weight: bold;
    border-radius: 10px 10px 0 0;
    border-bottom: 8px solid transparent;
  }*/

  /*.tab {
    display: inline-block;
    color: black;
    padding: 20px;
    min-width: 800px;
    border-radius: 10px;
    min-height: 400px;
  }*/
  /*.tabs__light .tab{
    background-color: #fff;
  }
  .tabs__light li {
    background-color: #ddd;
    color: #aaa;
  }*/
  /*.tabs__light li.tab__selected {
    background-color: #fff;
    color: #83FFB3;
  }
  .tabs__dark .tab {
    background-color: #555;
    color: #eee;
  }
  .tabs__dark li {
    background-color: #ddd;
    color: #aaa;
  }
  .tabs__dark li.tab__selected {
    background-color: #555;
    color: white;
  }*/
</style>