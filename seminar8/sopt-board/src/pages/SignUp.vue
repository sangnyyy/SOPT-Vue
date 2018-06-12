<template>
<v-container>
    <v-layout row wrap>
        <v-flex x12 sm7 offset-sm3>
            <v-card>
                <v-card-text>
                    <v-container fluid>
                        <form @submit.prevent="onSignUp">
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
                                <v-flex xs12>
                                    <v-text-field name="comfirmPassword" label="Comfirm Password" v-model="comfirmPassword" :rules="[checkPassword]" id="comfirmPassword" type="password" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                              <v-flex xx12>
                                <v-btn type="submit" color="success">
                                    Sign up
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
            comfirmPassword :''
        }
    },
    computed:{
        checkPassword(){
            return this.password !== this.comfirmPassword?'비밀번호 확인 틀립니다':true
        }
    },
    methods:{
        onSignUp(){
            const object = {
                user_id:this.email,
                user_pw:this.password
            }
            this.$store.dispatch('signUp',object)
        }
    }
}
</script>

<style>

</style>
