<template>
  <article class="card">
    <header>
      <slot name="title" />
    </header>
    <div class="card__content">
      <slot name="content" />
    </div>
    <footer>
      <slot name="footer" />
    </footer>
  </article>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  @import '@/styles/_variables.scss';
  @import '@/styles/_utils.scss';

  .card { display:flex; flex-direction:column; min-height:100%;
    header, footer { flex:0 1 25px;
      &:empty { display:none; }
    }
    header { border-bottom:1px solid lighten($black-lite, 50%); padding-bottom:($gutter/2); }
    footer { border-top:1px solid lighten($black-lite, 50%); padding-top:($gutter/2); }
    .card__content { flex:1 1 100%; overflow-x:hidden; }
    header .button { margin-bottom:0; padding:0 2px; line-height:inherit; height:auto; box-sizing:border-box;
      .material-icons { font-size:2rem; position:relative; top:2px; }
    }
  }
</style>
