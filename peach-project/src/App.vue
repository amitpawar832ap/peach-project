<template>
  <div id="app" class="container-fluid h-100">
    <div class="row h-100">
      <div v-bind:class="{'col-3': !mobileView}">
        <ChatSideBar />
      </div>
      <div v-bind:class="{'col-9': !mobileView}" class="user-profile">
        <!-- <UserProfile /> -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ChatSideBar from "./components/ChatSideBar";

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
    ChatSideBar
  }
};
</script>

<style>
@media only screen and (max-device-width: 480px) {
}

#app {
  background: #a9a0e2;
}
.user-profile {
  background: #fff;
}
</style>
