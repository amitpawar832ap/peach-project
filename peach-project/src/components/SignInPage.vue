<template>
  <div class="sign-in">

    <div>
      <p class="title">{{hello}}</p>
    </div>

    <div>
     <p class="meet-people">Meet new people</p>
    </div>

    <div>
      <p class="label">Mauris in ante elementum ipsum mattis cursus. Integer vel.</p>
    </div>
    <div class="form-group">
        <input type="text" class="form-control" name="phone" id="phone" v-model="phone" />
    </div>

    <button @click="getAccessByPhone()" type="submit" class="btn">
      <span class="btn-txt">GET STARTED BY PHONE NUMBER</span>
    </button>
     
    <a v-bind:href = 'localhost' class="facebook">{{link}}</a> 

     <ul>
      <li v-bind:key="language.name" v-for="language in openLanguages">
        {{language.name}}
      </li>
    </ul>
  </div>
</template>

<script>
//import axios from 'axios'
//import gql from 'graphql-tag'

export default {
  
  name: 'SignInPage',

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown {
    position: relative;
    display: inline-block;
}
.dropdown::before {
    position: absolute;
    content: " \2193";
    top: 0px;
    right: -8px;
    height: 20px;
    width: 20px;
}
 .facebook {
    position: absolute;
    width: 165px;
    height: 18px;
    left: 351px;
    top: 529px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;

    color: rgba(255, 255, 255, 0.7);
 }
 .btn{
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    background: #6769D1;
    margin-left: 250px;
    margin-top: 460px;
    border-radius: 10px;
    width: 23%;
    height: 50px;
    color: #FFFFFF;
 }
 .form-control {
    width: 23%;
    margin-left: 250px;
    margin-top: 400px;
    position: absolute;
    height: 45px;
 }
 .signup {
    position: relative;
    width: 1440px;
    height: 900px;
    background: #a9a0e2;
 }
 .label{
    position: absolute;
    width: 800px;
    height: 80px;
    left: 200px;
    top: 293px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 0%;
    /* or 0px */

    display: flex;
    align-items: center;
    text-align: center;

    /* white */

    color: #FFFFFF;
    opacity: 0.8;
 }

 .meet-people {
    position: absolute;
    width: 441px;
    height: 68px;
    left: 213px;
    top: 216px;

    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 67px;

    display: flex;
    align-items: center;
    color: #FFFFFF;
    text-shadow: 0px 0.5px 1px rgba(85, 86, 116, 0.4);
 }
 .title {
   /* Peach */

position: absolute;
width: 90px;
height: 42px;
left: 392px;
top: 84px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 42px;
display: flex;
align-items: center;
text-align: center;

  /* white */
  color: #FFFFFF;
  /* 0.5 */
  text-shadow: 0px 0.5px 1px rgba(85, 86, 116, 0.4);
}
</style>


