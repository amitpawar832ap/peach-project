<template lang="html">
  <div class='user ml-3 mr-2'>
      <div class='row'>
          <div class='col-3'>
              <img src="../assets/demo.jpg">
          </div>
           <div class='col-8'>
            <router-link class="nav-link" to="/user-profile">
            <label class='user-label mt-2'>Suresh</label>
            <p>Hi how are you?</p>
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
/* .user-label {
   font-weight: bold;
   font-size: 14px;
}

.user{
  height: 70px;
  background: #fff;
  border-radius: 15px;
  margin-bottom: 10px;
}

p {
  margin-top: -10px !important;
  font-size: 14px;
}

img {
  border-radius: 50%;
  width: 50px;
  margin-left: 15px;
  margin-top: 5px;
} */
</style>