 <template>
  <div class="chat-sidebar">
    <div class>
      <div class="side-bar">
        <div class="filter-box d-flex align-items-center justify-content-between">
          <img src="../assets/like-icon.png" />
          <img src="../assets/filter-icon.png" />
        </div>

        <div>
          <tabs>
            <autocomplete class="mb-2" :search="search" placeholder="Search" aria-label="Search"></autocomplete>
            <tab title="Chats">
              <User />
              <User />
              <User />
              <User />
              <User />
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
import User from "./User.vue";

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
    User
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body {
  height: 100%;
}
.autocomplete {
  border-radius: 10px;
}
.autocomplete > .autocomplete-input {
  border-radius: 11px;
  padding: 8px 12px 8px 48px;
  background-color: #e0ddf8;
}
.filter-box {
  height: 50px;
  background: #fff;
  margin-top: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  padding: 0 20px;
}
p {
  font-size: 14px;
}
</style>