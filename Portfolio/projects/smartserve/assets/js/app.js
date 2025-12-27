// Monthly Contributions Line Chart
const financeCtx = document.getElementById('financeChart');
if (financeCtx) {
  new Chart(financeCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Income ($)',
        data: [5200, 6100, 7400, 6800, 7900, 8420],
        borderWidth: 2,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
}

// Member Status Doughnut Chart
const memberCtx = document.getElementById('memberChart');
if (memberCtx) {
  new Chart(memberCtx, {
    type: 'doughnut',
    data: {
      labels: ['Active', 'Inactive'],
      datasets: [{
        data: [420, 60]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}
