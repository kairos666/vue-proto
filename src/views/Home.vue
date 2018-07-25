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
      <card class="u-grid-area u-grid-area--room-rates">
        <h2 slot="title">Evolution du prix moyen de la chambre - juillet 2018<button type="button" class="button button-outline float-right"><i class="material-icons">visibility</i></button></h2>
        <template slot="content">
          <bar-chart :width="800" :height="160" class="dynamic-chart" :data="$store.state.chartData.roomRates" :options="{ responsive: false, maintainAspectRatio: false }"></bar-chart>
        </template>
        <menu class="actions actions--aright" slot="footer">
          <button type="button" class="button button-outline float-left"><i class="material-icons">keyboard_arrow_left</i> mois précédent</button>
          <button type="button" class="button button-outline float-right">mois suivant <i class="material-icons">keyboard_arrow_right</i></button>
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
      <card class="u-grid-area u-grid-area--stats3">
        <h2 slot="title">Tx occupation<button type="button" class="button button-outline float-right"><i class="material-icons">visibility</i></button></h2>
        <template slot="content">
          <donut-chart class="dynamic-chart" :height="150" :data="$store.state.chartData.txocc"></donut-chart>
        </template>
        <template slot="footer">
          <figure class="indicator indicator-small">69%</figure>
        </template>
      </card>
      <card class="u-grid-area u-grid-area--stats2">
        <h2 slot="title">Tx concrétisation<button type="button" class="button button-outline float-right"><i class="material-icons">visibility</i></button></h2>
        <template slot="content">
          <figure class="indicator">46.2%
            <figcaption>juillet (209 réservations, 453 appels)</figcaption>
          </figure>
        </template>
      </card>
      <card class="u-grid-area u-grid-area--stats1">
        <h2 slot="title">Indice de fréqu.<button type="button" class="button button-outline float-right"><i class="material-icons">visibility</i></button></h2>
        <template slot="content">
          <figure class="indicator indicator-very-big">2.14</figure>
        </template>
      </card>
      <card class="u-grid-area u-grid-area--stats4">
        <h2 slot="title">CA ce jour<button type="button" class="button button-outline float-right"><i class="material-icons">visibility</i></button></h2>
        <template slot="content">
          <figure class="indicator indicator-small">64.2€
            <figcaption>/ clients</figcaption>
          </figure>
          <figure class="indicator indicator-small">3402€
            <figcaption> global</figcaption>
          </figure>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/nano/Card';
import DonutChart from '@/components/nano/DonutChart';
import BarChart from '@/components/nano/BarChart';

export default {
  components: {
    Card,
    DonutChart,
    BarChart
  }
}
</script>

<style scoped lang="scss">
  @import '../styles/_variables.scss';
  @import '../styles/_grid.scss';

  .dynamic-chart { margin-top:$gutter/2; }

  .u-grid-area--com {
    grid-area: 1 / 1 / 2 / 5;
  }
  .u-grid-area--notifs {
    grid-area: 2 / 1 / 3 / 5;
  }
  .u-grid-area--stats1 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .u-grid-area--stats2 {
    grid-area: 4 / 1 / 5 / 3;
  }
  .u-grid-area--stats3 {
    grid-area: 3 / 3 / 5 / 5;
  }
  .u-grid-area--stats4 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .u-grid-area--room-rates {
    grid-area: 5 / 1 / 7 / 5;
  }
  .u-grid-area--hotel-detail {
    grid-area: 1 / 5 / 4 / 7;
  }
  .u-grid-area--list-customers {
    grid-area: 4 / 5 / 7 / 7;
  }
</style>
