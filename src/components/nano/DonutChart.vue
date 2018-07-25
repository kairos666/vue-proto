<script>
import { Doughnut } from 'vue-chartjs';
 
export default {
  extends: Doughnut,
  props: ['data', 'options'],
  data() {
      return {
        defaultOptions: {
          responsive: true, 
          maintainAspectRatio: true,
          legend: {
              position:'right'
          }
        }
      };
  },
  mounted () {
    this.renderChart(this.data, Object.assign({}, this.defaultOptions, this.options))
  }
}
</script>