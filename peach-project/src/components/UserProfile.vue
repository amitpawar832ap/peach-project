<template>
  <div class="d-flex align-items-center justify-content-center h-100">
    <div class="p-3">
      <img src="../assets/close-u-profile.png" class="">
    </div>
    <diV class="user-profile-wrap">
       <img src="../assets/demo.jpg" class="img-align">
       <div class="profile-details d-flex justify-content-between align-items-center">
         <div>
            <label>Suresh (25)</label>
            <p>TKIET Warana</p>
         </div>
         <div>
            <img src="../assets/star-icon.png"/>
         </div>
       </div>
    </div>
    <div class="p-3">
      <img src="../assets/like-u-profile.png" class="">
    </div>
  </div>
</template>
<script>
export default {
   name: 'UserProfile'
}
</script>

<style scoped>
.user-profile-wrap{
  position: relative;
}
.user-profile-wrap > .img-align {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  height: 300px;
  border-radius: 10% !important;
}
.profile-details {
    background: #fff;
    position: absolute;
    bottom: 10px;
    width: calc(100% - 20px);
    margin: 0 10px;
    border-radius: 0 0px 20px 20px;
    padding: 10px 17px;
}
.profile-details label {
  font-weight: bold;
  font-size: small;
} 
.profile-details p {
  font-size: x-small;
  margin-bottom: 0;
}
</style>