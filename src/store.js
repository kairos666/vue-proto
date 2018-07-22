import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartData: {
      txocc: {
        labels: ['résa. directe', 'résa. web', 'résa. plateforme externe', 'disponibilités'],
        datasets: [
          {
            label: 'Tx Occupation',
            backgroundColor: [ '#cfc910', '#00acd2', '#502f0e', '#ffffff' ],
            data: [23, 34, 12, 31]
          }
        ]
      },
      roomRates: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [
          {
            label: 'ch. simple',
            backgroundColor: '#cfc910',
            data: new Array(31).fill('fake').map(() => { return Math.random()*40 + 25 })
          },
          {
            label: 'ch. double',
            backgroundColor: '#00acd2',
            data: new Array(31).fill('fake').map(() => { return Math.random()*40 + 49 })
          },
          {
            label: 'ch. triple',
            backgroundColor: '#502f0e',
            data: new Array(31).fill('fake').map(() => { return Math.random()*40 + 55 })
          }
        ]
      }
    }
  },
  mutations: {

  },
  actions: {

  }
})
