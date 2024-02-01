function fetchDataAndUpdateChart() {
    fetch('/get-datachart')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          updateChart(data);
        })
        .catch(error => console.error('Error:', error));
}


function updateChart(data_df) {
 
    console.log(data_df)
    am5.ready(function() {
        
        var root = am5.Root.new("chartdiv");

        root.setThemes([
            am5themes_Animated.new(root),
          ]);


        var chart = root.container.children.push( 
          am5percent.PieChart.new(root, {
            layout: root.verticalHorizontal,
            centerX: am5.percent(50),
            x: am5.percent(50)
          }) 
        );
        
        // Create series
        var series = chart.series.push(
          am5percent.PieSeries.new(root, {
            name: "Series",
            valueField: "value",
            categoryField: "class",
            alignLabels: false
          })
        );
     

        
        
        // Add legend
        /*var legend = chart.children.push(am5.Legend.new(root, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          layout: root.horizontalLayout
        }));
        
        legend.data.setAll(series.dataItems);*/
    
    
            
    }); // end am5.ready()
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDataAndUpdateChart()
    
});
 