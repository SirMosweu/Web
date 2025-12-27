// DARK MODE
const toggle = document.getElementById('themeToggle');
if (localStorage.theme === 'dark') document.documentElement.classList.add('dark');

toggle?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
});

// CHARTS
new Chart(revenueChart, {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      label: 'Revenue ($M)',
      data: [9.8,10.4,10.9,11.6,12.0,12.4],
      borderColor: '#2563EB',
      tension: 0.4
    }]
  }
});

new Chart(usageChart, {
  type: 'bar',
  data: {
    labels: ['Data','Voice','SMS'],
    datasets: [{
      data: [62,28,10],
      backgroundColor: ['#2563EB','#06B6D4','#93C5FD']
    }]
  }
});

new Chart(regionChart, {
  type: 'doughnut',
  data: {
    labels: ['Urban','Suburban','Rural'],
    datasets: [{
      data: [55,30,15],
      backgroundColor: ['#2563EB','#06B6D4','#93C5FD']
    }]
  }
});

new Chart(churnChart, {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      data: [1.8,1.9,2.0,2.1,2.2,2.3],
      borderColor: '#DC2626',
      tension: 0.4
    }]
  }
});
