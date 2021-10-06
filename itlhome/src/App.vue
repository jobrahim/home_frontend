<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
     @import "@/sass/utility/anims.scss";
    @import "@/sass/utility/fonts.scss";
    @import "@/sass/utility/normalize.scss";
    @import "@/sass/utility/bootstrap.scss";
    @import "@/sass/utility/utility.scss";

    @import "@/sass/typography/icons.scss";
    @import "@/sass/typography/typography.scss";

    @import '~vue-datetime/dist/vue-datetime.css';

    @import "@/sass/components/button.scss";
    @import "@/sass/components/datetime.scss";
    @import "@/sass/components/form.scss";
    @import "@/sass/components/grid.scss";
    @import "@/sass/components/layout.scss";
    @import "@/sass/components/table.scss";
    @import "@/sass/components/paginator.scss";

    @import "@/sass/misc.scss";
}
</style>
