// Your existing JavaScript code for fetching data and updating the pie chart
function fetchDataAndUpdatepie() {
fetch('/get-datapie')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      updatepie(data);
  })
  .catch(error => console.error('Error:', error));
}

function updatepie(data_df) {
console.log(data_df);
am5.ready(function () {
  var root = am5.Root.new("piediv");

  root.setThemes([
      am5themes_Animated.new(root),
  ]);

  var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
          layout: root.verticalHorizontal,
          centerX: am5.percent(50),
          x: am5.percent(50),
          text: "Pie Chart Title",
          fill: am5.color(0x000000)
          
      })
      
  );
  

  var series = chart.series.push(
      am5percent.PieSeries.new(root, {
          name: "Series",
          valueField: "value",
          categoryField: "class",
          alignLabels: false
      })
  );
  series.data.setAll(data_df);
  
  
series.labels.template.setAll({
fontSize: 20,
text: "{category}",
textType: "radial",
radius: 0,
centerX: am5.percent(100),
fill: am5.color(0x000000),

})

});

}


document.addEventListener('DOMContentLoaded', function () {
fetchDataAndUpdatepie();
});
