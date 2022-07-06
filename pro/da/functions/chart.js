
const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
  
    const config = {
      type: 'polarArea',
      data: data,
      options: {}
    };
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  
  //chrat line
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
  
    const dataa1 = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
  
    const config1 = {
      type: 'line',
      data: data,
      options: {}
    };
    const myChart1 = new Chart(
      document.getElementById('myChart1'),
      config1
    );
