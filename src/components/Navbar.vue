<template>
  <header class="nav-header">
    <a href="/" class="m-logo"><img src="/static/favicon.png" alt="" class="img-responsive"></a>
    <router-link class="button responsive-padding active" :to="{name: 'home'}" @click.native="open = false">
        <font-awesome-icon icon="home" /> Home
    </router-link>
    
    <router-link class="button responsive-padding active" :to="{name: 'Admin'}" v-show="loggedIn" rel="noopener noreferrer" style="float:right;" @click.native="open = false"><font-awesome-icon icon="tools" /> Admin</router-link>
    <router-link class="button responsive-padding active" :to="{name: 'signup'}" v-show="!loggedIn" rel="noopener noreferrer" target="_blank" style="float:right;" @click.native="open = false"><font-awesome-icon icon="user-plus" /> Signup</router-link>
    <router-link class="button responsive-padding active" :to="{name: 'signin'}" v-show="!loggedIn" rel="noopener noreferrer" target="_blank" style="float:right;" @click.native="open = false"><font-awesome-icon icon="sign-in-alt" /> Sign-In</router-link>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      loggedIn: true
    };
  }
};
</script>