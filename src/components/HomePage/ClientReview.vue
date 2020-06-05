<template>
    <v-container grid-list-xs>
        <v-row class="mt-5">
             <v-col>
                    <div class="heading text-center">
                        <h2>CLIENT REVIEWS</h2>
                    </div>
                </v-col>
        </v-row>
        <v-row class="d-flex d-sm-flex d-md-none">
            <v-col :cols=12 :md=4>
                <div class="toy-mob">
                    <img src="../../assets/images/toy.png" alt="">
                </div>
                <div class="cat-mob">
                    <img src="../../assets/images/cat.png" alt="">
                </div>
            
                
            </v-col>
            <v-col :cols=12 :md=8>
                <carousel :responsive="{0:{items:1},600:{items:2},1000:{items:1}}" v-bind:nav="false" v-bind:margin=5 :autoplayHoverPause="true" :autoplaySpeed=500 v-bind:autoplay='true' v-bind:dots="true" v-bind:loop='true'>
                <div class="item" v-for="(review,i) of reviews" :key="i">
                    <v-card
                        class="mx-auto"
                        color="#00D657"
                        dark
                        
                        
                    >
                        <v-card-text class="headline font-weight-bold">
                        "{{review.desc}}"
                        </v-card-text>

                        <v-card-actions>
                        <v-list-item class="grow">
                            <v-list-item-avatar color="grey darken-3">
                            <v-img
                                class="elevation-6"
                                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>{{review.name}}</v-list-item-title>
                                </v-list-item-content>
                            
                             </v-list-item>
                        </v-card-actions>
                    </v-card>
                </div>
                </carousel>
            </v-col>
        </v-row>
        <v-row class="d-none d-sm-none d-md-flex">
            <v-col :cols=12 :md=4>
                <div class="toy">
                    <img src="../../assets/images/toy.png" alt="">
                </div>
                <div class="cat">
                    <img src="../../assets/images/cat.png" alt="">
                  
                </div>
                
            </v-col>
            <v-col :cols=12 :md=8 class="ma-auto">
                <carousel :responsive="{0:{items:1},600:{items:2},1000:{items:2}}" v-bind:nav="false" v-bind:margin=5 :autoplayHoverPause="true" v-bind:autoWidth="false" v-bind:autoplay='true' v-bind:dots="true" v-bind:loop='true'>
                <div class="item" v-for="(review,i) of reviews" :key="i">
                    <v-card
                        class="mx-auto"
                        color="#00D657"
                        dark
                        
                    >
                        <v-card-text class="headline font-weight-bold">
                        "{{review.desc}}"
                        </v-card-text>

                        <v-card-actions>
                        <v-list-item class="grow">
                            <v-list-item-avatar color="grey darken-3">
                            <v-img
                                class="elevation-6"
                                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>{{review.name}}</v-list-item-title>
                                </v-list-item-content>
                            
                             </v-list-item>
                        </v-card-actions>
                    </v-card>
                </div>
                </carousel>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import carousel from 'vue-owl-carousel'


export default {
    name:'ClientReview',
    components:{carousel},

    data :()=>({
        reviews:[
            {name:"Evan You",desc:"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",image:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"},
            {name:"ABC You",desc:"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",image:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"},
            {name:"EFD You",desc:"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",image:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"},
            {name:"EFD You",desc:"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",image:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"},
            {name:"EFD You",desc:"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",image:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}
        ]
    })
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
    .cat img {
            width: 76%;
    float: right;
    margin-right: -36px;
    margin-top: 21px;
    border-bottom: 2px solid #00D657;
    }
    .toy img{
        float: right;
    margin-top: -57px;
    margin-right: -15px;
    }
    .cat-mob img{
        width: 50%;
        margin-top: 20px;
        border-bottom: 2px solid #00D657;
    }
   .toy-mob img{
       margin-top: -50px;
   }
</style>