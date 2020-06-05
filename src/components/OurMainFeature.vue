<template>
    <v-container  grid-list-xs class="mt-5">
      <v-row> 
          <v-col cols-12 >
            <div  class="heading text-center">
                 <h2>ALL FEATURES & SERVICES</h2>
            </div>
          </v-col>
      </v-row>
      <v-row class="pt-2 pb-2 pl-10 pr-10">
          <v-col cols="12" class="ma-auto p-10" :md="4">
            <v-list flat>
                <v-list-item-group v-model="item" color="#2C7873">
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-icon class="text-center">
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="12" :md="5"> 
              <div class="image-feature">
              <img src="@/assets/images/img_1.png" class="ml-10" alt="">
              </div>
          </v-col>
          <v-col cols="12" class="ma-auto p-10" :md="3">
              <v-list flat>
                <v-list-item-group v-model="item" color="#2C7873">
                    <v-list-item
                    v-for="(item, i) in items2"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
          </v-col>
      </v-row>
        <v-row class="pt-2 pb-2 pl-10 pr-10">
          <v-col cols="12" class="ma-auto p-10" :md="4">
              <v-list flat>
                <v-list-item-group v-model="item" color="#2C7873">
                    <v-list-item
                    v-for="(item, i) in items3"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="12" :md="1"></v-col>
          <v-col cols="12" :md="4"> 
             <v-list flat class="">
                <v-list-item-group v-model="item" color="#2C7873">
                    <v-list-item
                    v-for="(item, i) in items4"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="12" class="ma-auto p-10" :md="3">
              <v-list flat>
                <v-list-item-group v-model="item" color="#2C7873">
                    <v-list-item
                    v-for="(item, i) in items5"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
          </v-col>
      </v-row>
        
      <v-row class="mt-5">
        <v-col cols-12 >
            <div  class="heading text-center">
                 <h2> Aussie Petz <font color="#000000">is Quick & Easy</font></h2>
            </div>
          </v-col>
      </v-row>
      <v-row justify="space-around" class="mt-3 p-3">
        <v-col :cols=12 :md=4 v-for="(quickeasy,i) in QuickEasy" :key="i">

            <v-card
             class="mx-auto"
            >
                <v-card-text
                 class="text-center"
                >
                    <v-avatar color="#00D657" size="150">
                     <v-icon
                     style="color:#ffffff; font-size: 48px;"
                     >{{quickeasy.icon}}</v-icon>
                 </v-avatar>
                </v-card-text>


                 <v-card-title 
                 class="text-center"
                 style="display: block"
                 >
                    {{quickeasy.title}}
                 </v-card-title>
                 <v-card-text
                  class="text-justify"
                 >
                   {{quickeasy.desc}}
                 </v-card-text>
                
            </v-card>
        
        </v-col>  
      </v-row>




    </v-container>
</template>
<script>
export default {
    name:"OurMainFeature",
    data: () => ({
      
      items: [
        { text: 'Find a Reliable Pet Host', icon: 'mdi-folder-remove'},
        { text: 'Day Care Services', icon: 'mdi-account' },
        { text: 'Grooming Services', icon: 'mdi-flag' },
        { text: 'Pet Training Services', icon: 'mdi-flag' },
        { text: 'House Setting Services', icon: 'mdi-flag' },
        
      ],
      items2: [
        { text: 'Local vets directory', icon: 'mdi-folder-remove'},
        { text: 'Pet Park locations', icon: 'mdi-account' },
        { text: 'Local Pet Shop Directory', icon: 'mdi-flag' },
        { text: 'Animal Charities', icon: 'mdi-flag' },
        { text: 'Pet Insurance for sale ', icon: 'mdi-flag' },
        
      ],
      items3: [
        { text: 'Walkies & Exercise Services', icon: 'mdi-folder-remove'},
        { text: 'Win Prizes', icon: 'mdi-account' },
        { text: 'Aussie Pet BnB March', icon: 'mdi-flag' },
        { text: 'One Stop shop for Pet Products', icon: 'mdi-flag' },
        { text: 'Virtual Assistant Desk ', icon: 'mdi-flag' },
        
      ],
      items4: [
        { text: 'Pet Tube', icon: 'mdi-folder-remove'},
        { text: 'Pet 0 Gram', icon: 'mdi-account' },
        { text: 'Pet Pad', icon: 'mdi-flag' },
        { text: 'Pet Events', icon: 'mdi-flag' },
        { text: 'Perfect Match Your Pets', icon: 'mdi-flag' },
        
      ],
      items5: [
        { text: 'Find your pet / lost pets', icon: 'mdi-folder-remove'},
        { text: 'Adopt & Rescue A Pet', icon: 'mdi-account' },
        { text: 'Pets Wanting New Homes', icon: 'mdi-flag' },
        { text: 'Report Pet cruelty', icon: 'mdi-flag' },
        { text: 'Wires', icon: 'mdi-flag' },
        
      ],

      QuickEasy:[
          {title:"Search for your requirement", desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et", icon:"mdi-magnify"},
          {title:"Make a Booking", desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et", icon:"mdi-weight"},
          {title:"Enjoy Peace of Mind", desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et", icon:"mdi-paw"},
      ]

    }),
}
</script>
<style scoped>
   .image-feature img{
      width: 70%;
   }
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
    .v-list-item__icon {

    margin: 5px 0;
    }
    .v-icon.v-icon {
    border: 2px solid #FAEF60 ;
    border-radius: 50%;
    padding: 5px;
}
.theme--light.v-icon {
    color: #00D657;
}
.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 13px;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    /* color: rgba(0, 0, 0, 0.87) !important; */
    color: #2C7873!important;
}


</style>