<template>
    <v-container :fluid=true grid-list-xs>
        <v-row no-gutters>
          <v-container grid-list-xs>
              <v-row>  
                <v-col>
                    <div class="heading text-center">
                        <h2>Our Main Service</h2>
                    </div>
                </v-col>
              </v-row>
              <v-row>
                  <v-col class="">
                    <v-tabs
                        v-model="tab"
                        background-color="#ffffff"
                        centered
                        dark
                        icons-and-text
                        >
                        <v-tabs-slider></v-tabs-slider>

                        <v-tab href="#tab-1">
                            Pet Hosting <br>
                            At Sitter’s Home
                            <v-icon>mdi-home</v-icon>
                        </v-tab>

                        <v-tab href="#tab-2">
                            Pet Sitting 
                            <br>
                            At Pet’s home
                            <v-icon>mdi-heart</v-icon>
                        </v-tab>

                        <v-tab href="#tab-3">
                            Pet Day Care <br>
                            Services
                            <v-icon>mdi-account-box</v-icon>
                        </v-tab>
                        <v-tab href="#tab-4">
                            House Visits <br>
                            gardens/plants
                            <v-icon>mdi-account-box</v-icon>
                        </v-tab>
                        <v-tab href="#tab-5">
                            Exercise & <br>
                            walkies services
                            <v-icon>mdi-account-box</v-icon>
                        </v-tab>
                        <v-tab href="#tab-6">
                            Pet Grooming <br>
                            Services
                            <v-icon>mdi-account-box</v-icon>
                        </v-tab>
                        <v-tab href="#tab-7">
                            Pet Training<br>
                            services
                            <v-icon>mdi-account-box</v-icon>
                        </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                        <v-tab-item
                            v-for="i in 7"
                            :key="i"
                            :value="'tab-' + i"
                        >
                            <v-card flat>
                            <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                        </v-tab-item>
                        </v-tabs-items>
                </v-col>
              </v-row>
          </v-container>
        </v-row>
        
    </v-container>
</template>

<script>
export default {
    name:"OurMainService",
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icons: false,
        centered: true,
        grow: false,
        vertical: false,
        prevIcon: false,
        nextIcon: false,
        right: false,
        tabs: 7,
      }
     
    }
}
</script>
<style scoped>


  .heading h2{
    color: #00D657;
    font-weight: 800;
    text-align: center;
    font-size: 1.5em;
}

    .heading h2:before,
    .heading h2:after {
    background-color: #FAEF60;
    content: "";
    display: inline-block;
    height: 2px;
    position: relative;
    vertical-align: middle;
    width: 5%;
    }

    .heading h2:before {
    right: 0.5em;
    margin-left: -50%;
    }

    .heading h2:after {
    left: 0.5em;
    margin-right: -50%;
    }
    .col-border{
        border: 1px solid green;
        border-radius: 10px;
    }
    .v-slide-group__wrapper{
        height: 100px;
    }
    .v-tabs-bar__content a{
        border-radius: 10px;
        height: 70px;
        margin-top: 0px;
        color: #4caf50;
    }
    .v-tabs-slider {
    background-color: yellow;
}
.v-tabs-items{
    margin-top: 45px;
}

.theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon{
    color: gray;
}

.v-slide-group__wrapper{
    height: 100px;
}
.v-tabs{
    height: 100px;
}
.theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active){
    color: gray;
}
</style>