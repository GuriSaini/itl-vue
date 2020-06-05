<template>
    <v-container :fluid=true class="p-10" style="background-color:#00D657; color:#ffffff">
        <v-row>
            <v-col cols="12" :md="3" class="p-5">
                <h3>Main Services</h3>
                <ul v-for="(mainService,i) in mainServices" :key="i">
                    <a href=""><li>{{mainService.name}}</li></a>
                </ul>
            </v-col>
            <v-col cols="12" :md="3">
                <h3>Main Features</h3>
                <ul v-for="(mainFeature,i) in mainFeatures" :key="i">
                    <a href=""><li>{{mainFeature.name}}</li></a>
                </ul>
            </v-col>
            <v-col cols="12" :md="3">
                <h3>Directories</h3>
                <ul v-for="(directories,i) in Directories" :key="i">
                    <a href=""><li>{{directories.name}}</li></a>
                </ul>
            </v-col>
            <v-col cols="12" :md="3">
                <h3>Company</h3>
                <ul v-for="(company,i) in Company" :key="i">
                    <a href=""><li>{{company.name}}</li></a>
                </ul>
            </v-col>
        </v-row>
        <v-row class="text-center mt-3">
            <v-col >
                <h3> Desgin by </h3>
            </v-col>
        </v-row>

    </v-container>
        
</template>
<script>
export default {
    name:'Footer',
    data:()=>({
        mainServices:[
            {name:'Find a Reliable Pet Host',path:''},
            {name:'Day Care Services',path:''},
            {name:'Grooming Services',path:''},
            {name:'Pet Trainings Services',path:''},
            {name:'Find a Reliable Pet Host',path:''},
            {name:'Walkies & Exercise Services',path:''}
        ],
        mainFeatures:[
            {name:'Pet Tube',path:''},
            {name:'Pet 0 Gram',path:''},
            {name:'Pet Pad',path:''},
            {name:'Pet Lovers',path:''},
            {name:'Perfect Match Your Pets',path:''},
            
        ],
        Directories:[
            {name:'Local vets directory',path:''},
            {name:'Find your pet/lost pet',path:''},
            {name:'Adopt & Rescue A Pet',path:''},
            {name:'Report Pet cruelty',path:''},
            {name:'Wires',path:''},
            {name:'Pet Insurance for sale',path:''},
            {name:'Pet Park locations',path:''},
            {name:'Local Pet Shop Directory',path:''},
            {name:'Animal Charities',path:''},
            {name:'Pet Events',path:''},
            {name:'Positions vacant in pet space',path:''},
        ],
        Company:[
            {name:'About Us',path:''},
            {name:'Our mission',path:''},
            {name:'Positions Vacant ',path:''},
            {name:'Advertise With Us',path:''},
            {name:'Contact Us',path:''},
            {name:'Phone ',path:''},
            {name:'Email',path:''}
        ],
    }),
}
</script>
<style scoped>
  h3{
      font-weight: 800;
  }
  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul a li {
    padding: 5px;
}
ul a{
    text-decoration: none;
    color:#ffffff
}
ul a:hover{
    text-decoration: underline;
    color: #FAEF60;
}
</style>