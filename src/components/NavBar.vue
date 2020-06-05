<template>
  <div class="navbar-aussiepetz">
    <v-toolbar dark color="#00D657">
       <v-app-bar-nav-icon class="d-flex d-sm-flex d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
 <!-- large View -->
      <v-toolbar-items class="d-none d-sm-none d-md-flex">
        <v-autocomplete
          v-model="select"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="Search"
          solo-inverted
          style="margin-top: 6px;"
        >
    </v-autocomplete>
        <v-chip
         class="text-center v-chip v-size--own"
         color="#fff"
         outlined
        >
        Become<br> a host pet
       </v-chip>
       <v-chip
         class="text-center v-chip v-size--own"
         color="#fff"
         outlined
        >
        Aussie <br> pets BnB Services
       </v-chip>
        <v-btn text to="">Perfect Match</v-btn>
         <v-menu
            v-model="value"
            :open-on-hover=true
            :offset-y=true
         >
      <template v-slot:activator="{ on }">
        <v-btn text
          v-on="on"
        >
          Pet Hub
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in pethubitems"
          :key="index"
        >
         <router-link to="#"><v-list-item-title>{{ item.title }}</v-list-item-title></router-link>
        </v-list-item>
      </v-list>
       </v-menu>
       <v-btn text to="">Shop</v-btn>
         <v-btn text to="">Advertise with US</v-btn>
        <v-menu
            v-model="value"
            :open-on-hover=true
            :offset-y=true
         >
      <template v-slot:activator="{ on }">
        <v-btn text
          v-on="on"
        >
          Directory
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in pethubitems"
          :key="index"
        >
         <router-link to="#"><v-list-item-title>{{ item.title }}</v-list-item-title></router-link>
        </v-list-item>
      </v-list>
       </v-menu>
         <v-menu
            v-model="value"
            :open-on-hover=true
            :offset-y=true
         >
      <template v-slot:activator="{ on }">
        <v-btn text
          v-on="on"
        >
          Account
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
         <router-link to="/login"><v-list-item-title>Sing In</v-list-item-title></router-link>
        </v-list-item>
        <v-list-item>
         <router-link to="#"><v-list-item-title>Sing Up</v-list-item-title></router-link>
        </v-list-item>
      </v-list>
       </v-menu>
      </v-toolbar-items>
       <!-- End View -->
    <!-- Mobile View -->
      <v-toolbar-items class="d-flex d-sm-flex d-md-none">
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

       </v-toolbar-items>
    </v-toolbar>
    <!-- End Mobile View -->
    <v-navigation-drawer
      v-model="drawer"
      :absolute=true
      :height=555
      :fixed=true
      :app=true
      :clipped=true
      class="overflow-hidden d-flex d-sm-flex d-md-none"
      style="z-index:99"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
        >
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link to="/login"><v-list-item-title>SingIn</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
        states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],
        drawer: null,
        item: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
          { title: 'About', icon: 'question_answer' },
          { title: 'About', icon: 'question_answer' },
          { title: 'About', icon: 'question_answer' },
          { title: 'About', icon: 'question_answer' },
          { title: 'About', icon: 'question_answer' },
          { title: 'About', icon: 'question_answer' },
          { title: 'About', icon: 'question_answer' },
          { title: 'About', icon: 'question_answer' },
          { title: 'About', icon: 'question_answer' },
          { title: 'About', icon: 'question_answer' }
        ],
        pethubitems: [
        { title: 'Click Me',path:''},
        { title: 'Click Me',path:'' },
        { title: 'Click Me',path:'' },
        { title: 'Click Me 2',path:''},
      ]
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    }
};
</script>

<style scoped>
.v-btn:not(.v-btn--round).v-size--default {
    padding: 0 7px;
}
.theme--dark.v-btn.v-btn--outlined.v-btn--text {
    border-color: rgb(255, 255, 255);
    border-radius: 12px;
}
.v-btn__content {
    font-weight: 600;
}
.v-navigation-drawer--temporary {
    
    /* height: 45%!important; */
}
.v-chip.v-size--own {
    border-radius: 10px;
    font-size: 16px;
    height: 47px;
    margin-top: 8px;
    margin-left: 10px;
}
.v-toolbar__content{
  padding: 23px!important;
}

</style>
