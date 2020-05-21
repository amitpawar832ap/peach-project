 <template>
  <div class="chat-sidebar">
    <div class>
      <div class="side-bar">
        <div class="header"></div>
        

        <div>
          <tabs>
            <autocomplete class="mb-3"
          :search="search"
          placeholder="Search for a user"
          aria-label="Search for a user"
        ></autocomplete>
            <tab title="Chats">
              <Users />
              <Users />
              <Users />
            </tab>
            <tab title="Matches"></tab>
            <tab title="Events"></tab>
            
          </tabs>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Autocomplete from "@trevoreyre/autocomplete-vue";
import Tab from "./Tab.vue";
import Tabs from "./Tabs.vue";
import Users from "./Users.vue";

export default {
  name: "ChatSideBar",
  methods: {
    search(input) {
      if (input.length < 1) {
        return [];
      }
      /*return countries.filter(country => {
        return country.toLowerCase()
          .startsWith(input.toLowerCase())
      })*/
    }
  },
  props: {
    msg: String
  },
  components: {
    Autocomplete,
    Tab,
    Tabs,
    Users
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body {
  height: 100%;
}


.side-bar {
  background: #a9a0e2;
}

.autocomplete {
  border-radius: 10px;
}

.header {
  height: 50px;
  background: #fff;
  margin-top: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
}
ul.tabs_header > li:first-child {
    display: none;
}
* {
  margin: 0;
  padding: 0;
}

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

  .user-label {
   font-weight: bold;
   font-size: 14px;
  }

.user {
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
  width: 70px;
  margin-left: 15px;
  margin-top: 15px;
}
</style>