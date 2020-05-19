<template>
  <div id="app">
    <div class="row">
      <div v-bind:class="{'col-3': !mobileView}">
        <ChatSidebar />
      </div>
      <div v-bind:class="{'col-9': !mobileView}" class="user-profile">
        <!-- <UserProfile /> -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ChatSidebar from "./components/ChatSidebar";

export default {
  name: "App",

  created() {
    if (window.screen.width === 360) {
        this.mobileView = true;    
        }
    },

  data() {
    return {
      mobileView: false
    };
  },
  components: {
    ChatSidebar
  }
};
</script>

<style>
@media only screen and (max-device-width: 480px) {
}

#app {
  background: #a9a0e2;
  /*height: 1000px;*/
}
.user-profile {
  background: #fff;
}
</style>
