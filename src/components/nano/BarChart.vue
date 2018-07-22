<script>
import { Bar } from 'vue-chartjs';
 
export default {
  extends: Bar,
  props: ['data', 'options'],
  data() {
      return {
        defaultOptions: {
            responsive: true, 
            maintainAspectRatio: true,
            legend: {
                position:'right'
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            min: 20,
                            stepSize: 10
                        }
                    }
                ]
            }
        }
      };
  },
  mounted () {
    this.renderChart(this.data, Object.assign({}, this.defaultOptions, this.options))
  }
}
</script>