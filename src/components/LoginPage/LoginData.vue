<template>
    <v-container :fluid="true">
        <v-row no-gutters>
            <v-col :cols='12' :md='6' class="text-center">
                <div class="login-hading mt-10">
                <h2>Welcome To Aussie Petz Login Form</h2>
                </div>
                <div class="content mt-4">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget</p>
                </div>
                <div class="login-image">
                     <img  class="v-image" src="images/cat1.png"/>
                </div>
            </v-col>
            <v-col :cols='12' :md='6' class="text-center">
                <div class="form-heading mt-10">
                    <h2>Login Here</h2>
                </div>
                <div class="content mt-4">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget</p>
                </div>
                <div class="login-form">

                        <v-tabs
                        v-model="tab"
                        background-color="deep-purple accent-4"
                        centered
                        dark
                        icons-and-text
                        >
                        <v-tab href="#tab-1">
                            Sing In 
                        
                        </v-tab>

                        <v-tab href="#tab-2">
                            Sing Up
                        </v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tab">
                         <v-tab-item value="tab-1" class="mt-5">
                                <form ref="loginForm" @submit="submit" class="form-size">
                                    <v-text-field
                                        v-model="email"
                                        :rules="emailrule"
                                        :error-messages="errorEmail"
                                        label="Enter E-mail / Mobile number"
                                        required
                                        @input="$v.email.$touch()"
                                        @blur="$v.email.$touch()"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="password"
                                        :rules="passwordrule"
                                        :error-messages="errorPass"
                                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="show1 ? 'text' : 'password'"
                                        label="Enter Password"
                                        hint="Password"
                                        counter
                                        @click:append="show1 = !show1"
                                        required
                                        @input="$v.password.$touch()"
                                    ></v-text-field>
                                    <v-btn class="mr-4" dark color="#00D657" type="submit">Login</v-btn>
                                </form>
                         </v-tab-item>
                         <v-tab-item value="tab-2">
                                 <!-- Sing up Form -->
                                <form action=""></form>

                         </v-tab-item>
                        </v-tabs-items>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required,email,password} from 'vuelidate/lib/validators'
export default {
    name:"LoginData",
    mixins: [validationMixin],
     validations: {
      email: { required, email },
      password: { required, password},
    },

    data: () => ({
        show1: false,
        tab: null,
        email: '',
        password:'',
        errorEmail:[],
        errorPass:[],
        value:'',
        passwordrule: [],
        emailrule:[]
        
    }),
    watch:{
       email:function(val){
            this.email = val;
           },
       password:function(val){
           this.password = val;
       }
    },
    methods: {
      submit: function(e){
          var ep_emailval = this.email;
          var newvaule;
          if(this.vaildNumber(ep_emailval)) {
            // console.log("is phone");
            if((ep_emailval.length < 10) || (ep_emailval.length > 10) || (!this.vaildNumber(ep_emailval)))
            {
              this.errorEmail.pop();
              this.errorEmail.push('Please enter a valid phone number.');
            } else{
                newvaule = ep_emailval
            }
            }
            else
                {    
                //   console.log("is email");
                  if (this.validEmail(ep_emailval) == false) {
                    this.errorEmail.pop();
                    this.errorEmail.push("Please enter valid email address.");
                   }else {
                       newvaule = ep_emailval;
                   }
                }
         if(newvaule != null && this.password != null){
                alert(newvaule + " " + this.password)
                this.email = '';
                this.password='';
                this.errorEmail.pop();
                
         }
         e.preventDefault();
         
      },
        
        

      validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    vaildNumber: function(value){
        var re = /^\d*$/;
        return re.test(value);
    },
    }
}
</script>
<style scoped>
.container{
    padding: 0%;
}
.col {
    padding: 20px;
}
.col-12{
    padding: 20px;
}

.v-image {
  width: 70%;
}
.login-form{
    width: 90%;
    margin: auto;
    margin-top: 27px;
    padding: 10px;
}
.v-tab {
    max-width: 100%;
}
.form-size{
    width:70%; 
    padding:10px;
    margin: auto;
}
@media only screen and (max-width: 600px){
    .login-form{
    width: 100%;
    margin: auto;
    margin-top: 27px;
    padding: 10px;
}
.form-size{
    width:100%; 
    padding:10px;
    margin: auto;
}
}
</style>