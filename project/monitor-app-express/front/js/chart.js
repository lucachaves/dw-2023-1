import Chart from 'chart.js/auto';

let chart;

export function createLineChart(canvaId) {
  const ctx = document.getElementById(canvaId);

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          borderWidth: 2,
          borderColor: '#1e293b',
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  return chart;
}

export function updateLineChart(times) {
  chart.data.labels = Object.keys(times);

  chart.data.datasets[0].data = times;

  chart.update();
}
