let myChart = document.getElementById('myChart').getContext('2d');
let barChart = new Chart(myChart,{
    type:'bar',//pie,line
     data:{
        labels:['2010','2011','2012','2013','2014','2015'],
        datasets:[{
          label:'Population',
          data:[63,156,93,117,70,32],
          backgroundColor:'#126DB3',
          borderWidth:1,
          borderColor : '#fff'
        }]
      },
      options:{
      	scales:{
      		yAxes:[{
      			ticks:{
      				beginAtZero:true
      			}
      		}],
      		xAxes:[{
      			barPercentage:0.3
      		}]
      	}
      }
    });


let myDoughnut = document.getElementById('myDoughnut').getContext('2d');
let doughnutChart = new Chart(myDoughnut,{
	type:'doughnut',
	data:{
		labels:['ASeries','BSeries','CSeries'],
		datasets:[{
			label:'Population',
			data:[45,80,20],
			backgroundColor:['#F9B763','#FF5B5B','#3CA38B'],
			BorderWidth:3,
			borderColor : '#fff'
		}]
	},
	options:{}
});

let mylineGraph = document.getElementById('mylineGraph').getContext('2d');
let lineChart = new Chart(mylineGraph,{
	type:'line',
	data:{
		labels:['ASeries','BSeries','CSeries','DSeries','ESeries'],
		datasets:[{
			label:'Africe',
			data:[{x:90,y:50},{x:60,y:35},{x:40,y:76},{x:53,y:80},{x:0,y:50}],
			BorderWidth:3,
			borderColor:'#188AE2',
			color:'green',
			fill:false
		},{
			data:[{x:66,y:9},{x:54,y:12},{x:87,y:90},{x:65,y:23},{x:45,y:78}],
			label:'Europe',
			borderColor:'#008000',
			fill:false
		}]
	},
	options:{}
});