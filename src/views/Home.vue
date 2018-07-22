<template>
  <div class="page-view page-view--home">
    <h1>Tableau de bord</h1>
    <div class="u-grid">
      <card class="u-grid-area u-grid-area--com">
        <template slot="content">
          <carousel autoplay loop pagination-color="#502f0e" pagination-active-color="#cfc910" :autoplay-timeout="4000" :per-page="1">
            <slide>
              <section class="vc-slide">
                <h2><strong>Mise à jour B&B BO</strong><br><small>12/10/2018 23:00 (GMT+1)</small></h2>
                <v1-text rows="2" />
              </section>
            </slide>
            <slide>
              <section class="vc-slide">
                <h2><strong>Résultats groupes<br>B&B Q3 2018</strong><br><small>08/07/2018 08:00 (GMT+1)</small></h2>
                <p>Les derniers chiffres consolidés sur la performance du groupe en 2018. <a href="#" title="PDF 1.2Mo">Téléchargez la plaquette</a></p>
              </section>
            </slide>
            <slide>
              <section class="vc-slide">
                <h2><strong>Guide pratique<br>accueillir un nouvel équipier</strong><br><small>22/07/2018 14:12 (GMT+1)</small></h2>
                <v1-text rows="2" />
              </section>
            </slide>
            <slide>
              <section class="vc-slide">
                <h2><strong>Guide pratique<br>remplir une fiche incident</strong><br><small>12/10/2018 23:00 (GMT+1)</small></h2>
                <v1-text rows="2" />
              </section>
            </slide>
          </carousel>
        </template>
      </card>
      <card class="u-grid-area u-grid-area--notifs">
        <template slot="content">
          <carousel autoplay loop pagination-color="#502f0e" pagination-active-color="#cfc910" :autoplay-timeout="4000" :per-page="1">
            <slide>
              <section class="vc-slide vc-slide--notif-alert">
                <h2><i class="material-icons">notification_important</i><br><strong>seuil prix élevé vis-à-vis concurrence</strong></h2>
                <v1-text rows="2" />
              </section>
            </slide>
            <slide>
              <section class="vc-slide vc-slide--notif-info">
                <h2><i class="material-icons">help</i><br><strong>maintenance BO programmée</strong></h2>
                <p>Maintenance BO programmée <a href="#" title="voir les détails">Voir les détails</a></p>
              </section>
            </slide>
            <slide>
              <section class="vc-slide vc-slide--notif-warning">
                <h2><i class="material-icons">warning</i><br><strong>quota remboursement atteint</strong></h2>
                <v1-text rows="2" />
              </section>
            </slide>
            <slide>
              <section class="vc-slide vc-slide--notif-info">
                <h2><i class="material-icons">help</i><br><strong>support indisponible jusqu'à 14h</strong></h2>
                <v1-text rows="2" />
              </section>
            </slide>
          </carousel>
        </template>
      </card>
      <card class="u-grid-area u-grid-area--tx-occupation">
        <h2 slot="title">Taux d'occupation</h2>
        <template slot="content">
          <v1-chart height="140" />
        </template>
        <menu class="actions actions--aright" slot="footer">
          <button type="button" class="button button-outline">semaine précédente</button>
          <button type="button" class="button button-outline">semaine suivante</button>
          <button type="button" class="button">voir détail</button>
        </menu>
      </card>
      <card class="u-grid-area u-grid-area--hotel-detail">
        <h2 slot="title">Fiche hôtel</h2>
        <template slot="content">
          <v1-text rows="5" />
          <v1-image center height="120px"/>
        </template>
      </card>
      <card class="u-grid-area u-grid-area--list-customers">
        <h2 slot="title">Clients de l'hôtel</h2>
        <template slot="content">
          <v1-avatar count="20" />
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/nano/Card';

export default {
  components: {
    Card
  }
}
</script>

<style scoped lang="scss">
  @import '../styles/_variables.scss';
  @import '../styles/_grid.scss';

  .u-grid-area--com {
    grid-area: 1 / 1 / 2 / 5;
  }
  .u-grid-area--notifs {
    grid-area: 2 / 1 / 3 / 5;
  }
  .u-grid-area--tx-occupation {
    grid-area: 3 / 1 / 5 / 5;
  }
  .u-grid-area--hotel-detail {
    grid-area: 1 / 5 / 4 / 7;
  }
  .u-grid-area--list-customers {
    grid-area: 4 / 5 / 7 / 7;
  }
</style>
