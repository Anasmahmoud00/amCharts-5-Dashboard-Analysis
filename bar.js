// function fetchDataAndUpdateBar() {
//     fetch('/get-databar')
//         .then(response => response.json())
//         .then(data => {
//             updateDataBar(data);
//         })
//         .catch(error => console.error('Error:', error));
// }


// function updateDataBar(data) {
//     am5.ready(function() {

//         var root = am5.Root.new("bardiv");
//         root.setThemes(  [am5themes_Animated.new(root)]  );

//         var chart = root.container.children.push(
//             am5xy.XYChart.new(root, {
//             panX: false,
//             panY: false,
//             wheelX: "panX",
//             wheelY: "zoomX"
//         }));

//         var X_Axis_parameters = {
//             maxDeviation: 0,
//             baseInterval: { timeUnit: "month" , count: 1},
//             renderer: am5xy.AxisRendererX.new(root, {minGridDistance: 5}),
//             tooltip: am5.Tooltip.new(root, {})
//         }

//         var Designed_xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, X_Axis_parameters ));

//         var Y_Axis_parameters = {
//             renderer: am5xy.AxisRendererY.new(root, {}),
//             baseValue: 100
//         }

//         var Designed_yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, Y_Axis_parameters));

//         var cursor_parameters = {behavior: "zoomX"}
//         var cursor = chart.set("cursor" , am5xy.XYCursor.new(root, cursor_parameters));
//         cursor.lineY.set("visible" , false);

//         var Scrollbar_parameters = {orientation: "horizontal"}
//         chart.set("scrollbarX" , am5.Scrollbar.new(root , Scrollbar_parameters));

//         data_params = {
//             name: "Series",
//             xAxis: Designed_xAxis,
//             yAxis: Designed_yAxis,
//             valueXField: "class",
//             valueYField: "value",
//             tooltip: am5.Tooltip.new(root , {labelText: "{valueY}" })
//         }

//         var my_data_series_1 = chart.series.push(am5xy.LineSeries.new(root, data_params));
//         var my_data_series_2 = chart.series.push(am5xy.ColumnSeries.new(root, data_params));

//         my_data_series_1.bullets.push(function(root)
//         {
//             return am5.Bullet.new(root,
//                 {sprite: am5.Circle.new(root, {radius: 9 , fill: am5.color("#ff0000")})}
//                 );
//         }
//         );

//         my_data_series_1.set("fill" , am5.color(0xff0000));
//         my_data_series_2.set("fill" , am5.color(0x0000ff));

//         my_data_series_1.data.setAll(data);
//         my_data_series_2.data.setAll(data);

//         my_data_series_1.appear(1000);
//         my_data_series_2.appear(1000);
//         chart.appear(1000, 1000);




//     });
// }




// document.addEventListener('DOMContentLoaded', function() {
//     fetchDataAndUpdateBar()
// });