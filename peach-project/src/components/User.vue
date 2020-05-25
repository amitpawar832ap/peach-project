<template lang="html">
  <div class='user'>
      <div class='d-flex align-items-center p-2'>
          <div class="user-thumbnail">
              <img src="../assets/demo.jpg">
          </div>
          <div class="user-thumbnail-content col">
            <router-link class="nav-link" to="/user-profile">
              <label class='user-label'>Suresh</label>
              <p class="mb-0">Hi, how are you?</p>
            </router-link>
          </div>
      </div>
  </div>
</template>
<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Tab'
    }
  },
  data () {
    return {
      isActive: true
    }
  }
}
</script>

<style scoped>
.user-label {
   font-weight: bold;
   font-size: 14px;
   margin-bottom: 0;
}

.user{
    background: #E0DDF8;
    border-radius: 15px;
    margin-bottom: 8px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
}
.user:hover{
  background: #ffffff;
}
p {
  font-size: 14px;
}

.user-thumbnail img {
  border-radius: 30%;
  width: 50px;
  height: 50px;
}
.user-thumbnail-content .nav-link{
    padding: 0 0 3px 0;
    color: inherit;
}
</style>