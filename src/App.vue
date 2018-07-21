<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/dashboard">BOB Dashboard</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'styles/_variables.scss';

body, html { margin:0; padding:0; }
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}
#nav {
  position:fixed;
  bottom:10px;
  left:10px;
  > * { display:none; }
  &:hover > * { display:inline; }

  a {
    display:none;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a + a:before { content:' | '; color:black; }
  &:before { content:'?'; float:left; margin-right:10px; display:block; background:#999; color:#fff; width:20px; height:20px; border-radius:50% 50%; }
}
</style>
