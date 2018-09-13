<script>
  export const enduranceChartData = {
    type: 'line',
    data: {
      labels: ['Sep. 1', 'Sep. 2', 'Sep. 3', 'Sep. 4', 'Sep. 5', 'Sep. 6'],
      datasets: [{
        label: 'Time',
        data: [12, 19, 10, 11, 9, 7],
        backgroundColor: "rgba(153,255,51,0.4)"
      }
      ]
    }
  }

  // data: [{
  //   x: new Date(),
  //   y: 1
  // }, {
  //   t: new Date(),
  //   y: 10
  // }],
  // labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
  // datasets: [
  //   { // one line graph
  //     label: 'Number of Moons',
  //     data: [0, 0, 1, 2, 67, 62, 27, 14],
  //     backgroundColor: [
  //       'rgba(54,73,93,.5)', // Blue
  //       'rgba(54,73,93,.5)',
  //       'rgba(54,73,93,.5)',
  //       'rgba(54,73,93,.5)',
  //       'rgba(54,73,93,.5)',
  //       'rgba(54,73,93,.5)',
  //       'rgba(54,73,93,.5)',
  //       'rgba(54,73,93,.5)'
  //     ],
  //     borderColor: [
  //       '#36495d',
  //       '#36495d',
  //       '#36495d',
  //       '#36495d',
  //       '#36495d',
  //       '#36495d',
  //       '#36495d',
  //       '#36495d',
  //     ],
  //     borderWidth: 3
  //   }
  // ]
  //   // },
  //   options: {
  //     // responsive: true,
  //     // lineTension: 1,
  //     // scales: {
  //     //   yAxes: [{
  //     //     ticks: {
  //     //       beginAtZero: true,
  //     //       padding: 25,
  //     //     }
  //     //   }]
  //     // }
  //     scales: {
  //       xAxes: [{
  //         time: {
  //           unit: 'day'
  //         }
  //       }]
  //     }

  //   }
  // }

  export default enduranceChartData;
</script>