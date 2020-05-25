<template>
  <div id="app" class="container-fluid h-100">
    <div class="row h-100">
      <div v-bind:class="{'col-3': !mobileView}" class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3">
        <ChatSideBar />
      </div>
      <div
        v-bind:class="{'col-9': !mobileView}"
        class="user-profile col-12 col-sm-8 col-md-8 col-lg-8 col-xl-9"
      >
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
  background: #9c95e2;
}
.user-profile {
  background: #fff;
}
</style>
