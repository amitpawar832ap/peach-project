<template>
  <div class="">
    <diV>
       <img src="../assets/demo.jpg" class="center">
       <div class="profile-details">
         <label>Suresh (25)</label>
         <p>TKIET Warana</p>
       </div>
    </div>
  </div>
</template>
<script>
export default {
   name: 'UserProfile'
}
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  height: 300px;
}

img {
  border-radius: 10% !important;
}

p {
  font-size: x-small;
  margin-left: 15px;
}

label {
  font-weight: bold;
  font-size: small;
  margin-left: 15px;
}

.profile-details{
    width: 20%;
    background: #fff;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    margin-top: -60px;
    width: 22%;
    position: absolute;
    margin-left: 390px;
    border-radius: 10px 10px 20px 20px;
}
</style>