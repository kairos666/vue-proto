<template>
  <header class="main-header">
    <div class="home-link">
      <router-link to="/"><img src="../assets/bb-logo.png">Back-Office</router-link>
    </div>
    <menu class="main-navigation">
      <ul>
        <li><router-link to="/">tableau de bord</router-link></li>
        <li><router-link to="/about">gestion</router-link></li>
        <li><router-link to="/dashboard">clientèle</router-link></li>
        <li><router-link to="/dashboard">information</router-link></li>
      </ul>
    </menu>
    <menu class="account-menu">
      <button type="button" :class="{ 'is-active': isProfileOpen }" @click.prevent="onProfileToggle"><i class="material-icons">account_circle</i></button>
      <div class="profile-dropdown" :class="{ 'is-visible': isProfileOpen }">
        <v1-avatar />
        <a href="#" title="modifier compte"><i class="material-icons">create</i>modifier compte</a>
        <hr>
        <label>choix de langue</label>
        <select>
          <option selected>FR</option>
          <option>EN</option>
          <option>IT</option>
          <option>DE</option>
        </select>
      </div>
    </menu>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isProfileOpen: false
    };
  },
  methods: {
    onProfileToggle(evt) {
      this.isProfileOpen = !this.isProfileOpen;
      evt.currentTarget.blur();
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../styles/_variables.scss';
  @import '../styles/_utils.scss';
  menu { margin:0; padding-left:0; }

  .main-header { display:flex; padding:$gutter; background-color:$beige;
    .home-link, .account-menu { flex:0 0 auto; }
    .main-navigation { flex:1 0 auto; text-align:center; }
  }

  .home-link {
    a { display:inline-block; line-height:$logo-size; text-decoration:none; font-size:2.5rem; font-weight:bold; color:$black; padding-right:$gutter; border-radius:35px; transition: background-color 0.3s ease;
      &:hover, &:focus, &:active { background-color:$white; }
    }
    img { width:$logo-size; height:$logo-size; float:left; margin-right:$gutter; position:relative; top:2px; }
  }

  .main-navigation {
    ul { list-style:none; margin:12px 0 0; padding-left:0;
      li { display:inline-block; }
    }
    a { text-decoration:none; font-size:1.8rem; font-weight:bold; color:$black; padding:$gutter $gutter ($gutter/2); display:block; 
      &:hover, &:focus, &:active { border-bottom:3px solid $black-lite; }
      &.router-link-active { border-bottom:3px solid $green; }
    }
  }

  .account-menu { position:relative;
    > button { @include btn-reset; position:relative; top:3px; cursor:pointer; outline:none; color:darken($beige, 20%); transition: color .3s ease;
      &.is-active, &:hover, &:focus, &:active { color:$black-lite; }
      .material-icons { font-size:6rem; }
    }
    .profile-dropdown { display:none; position:absolute; text-align:right;  top:100%; right:0; padding:$gutter; background-color:$black-lite; color:$white; border-radius:5px;
      &.is-visible { display:block; }
      a { color:$white; text-decoration:none; transition:color .3s ease; margin-top:$gutter; display:inline-block;
        .material-icons { position:relative; top:7px; margin-right:$gutter/2; }
        &:hover, &:focus, &:active { color: $green; }
      }
      label { margin-right:$gutter; margin-top:$gutter; }
      select { margin-top:$gutter; background-color:$white; }
    }
  }
</style>
