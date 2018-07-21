<template>
  <div class="page-view page-view--home">
    <h1>Tableau de bord</h1>
    <div class="u-grid">
      <article class="u-grid-area u-grid-area--tx-occupation">
        <h2>Taux d'occupation</h2>
        <v1-chart height="180" />
        <footer>
          <button>semaine précédente</button>
          <button>semaine suivante</button>
          <button>voir détail</button>
        </footer>
      </article>
      <article class="u-grid-area u-grid-area--hotel-detail">
        <h2>Fiche hôtel</h2>
        <v1-text rows="5" />
        <v1-image center />
      </article>
      <article class="u-grid-area u-grid-area--list-customers">
        <h2>Clients de l'hôtel</h2>
        <v1-avatar count="8" />
      </article>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  @import '../styles/_variables.scss';
  @import '../styles/_grid.scss';

  .u-grid-area--tx-occupation {
    grid-area: 1 / 1 / 3 / 5;
  }
  .u-grid-area--hotel-detail {
    grid-area: 1 / 5 / 4 / 7;
  }
  .u-grid-area--list-customers {
    grid-area: 4 / 5 / 7 / 7;
  }
</style>
