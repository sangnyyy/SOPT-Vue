<template>
<v-container>
    <v-layout row wrap>
        <v-flex x12 sm7 offset-sm3>
            <v-card>
                <v-card-text>
                    <v-container fluid>
                        <form @submit.prevent="onSignIn">
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-text-field name="email" label="Email" v-model="email" id="email" required>
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-text-field name="password" label="Password" id="password" v-model="password" type="password" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                              <v-flex xx12>
                                <v-btn type="submit" color="success">
                                    Sign in
                                </v-btn>
                              </v-flex>
                            </v-layout>
                        </form>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password :'',
        }
    },
    computed:{
    },
    methods:{
        onSignIn(){
            const object = {
                user_id:this.email,
                user_pw:this.password
            }
            this.$store.dispatch('signIn',object)
        }
    }
}
</script>

<style>

</style>
