<template>
  <div class="page-view">
    <v1-grid guides flat size="12x10" gap="10">
      <v1-cell size="12x2">
        <v1-nav />
      </v1-cell>
      <v1-cell size="3x7" y="2">
        <v1-avatar />
        <v1-avatar />
      </v1-cell>
      <v1-cell size="2x7" y="2" x="10">
        <v1-image />
        <v1-image width="100px" />
        <v1-image height="100px" />
        <v1-image round />
        <v1-image center />
      </v1-cell>
      <v1-cell size="7x7" y="2" x="3">
        <v1-text />
        <v1-text rows="5" />
        <v1-chart height="300" />
        <v1-text center />
        <v1-text justify />
        <v1-chart margin="100" />
      </v1-cell>
      <v1-cell size="12x1" y="9">
        <v1-footer links="5" />
      </v1-cell>
    </v1-grid>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>
