 <template>
  <div class="chat-sidebar">
    <div class="">
      <div class="side-bar">
        <div class="header ml-3 mr-2"></div>
        <autocomplete
          :search="search"
          placeholder="Search for a user"
          aria-label="Search for a user"
        ></autocomplete>

        <div>
          <tabs>
            <tab title="Chats">
              <Users/>
              <Users/>
              <Users/>
            </tab>
            <tab title="Matches">
              
            </tab>
            <tab title="Events">
              
            </tab>
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
  name: "ChatSidebar",
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

html,body {
    height: 100%;
}

.side-bar{
   min-height: 100vh;
}

.side-bar {
  background: #a9a0e2;
  /*height: 1000px;*/
}

.autocomplete {
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 10px;
}

.header {
  height: 50px;
  background: #fff;
  margin-top: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
}

 * {
    margin: 0;
    padding: 0;
  }
</style>


