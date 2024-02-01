
  // Function to fetch data from the server
function fetchDataAndUpdateFunnel() {
    fetch('/get-dataFunnal')  // Change the endpoint to your server route
        .then(response => response.json())
        .then(data => {
            updateFunnel(data);
        })
        .catch(error => console.error('Error:', error));
}

// Function to update the funnel chart with fetched data
function updateFunnel(data_df) {
    am5.ready(function () {
        var root = am5.Root.new("charthotizontol");

        root.setThemes([
            am5themes_Animated.new(root),
        ]);

        var chart = root.container.children.push(
            am5percent.SlicedChart.new(root, {
                layout: root.horizontalLayout
            })
        );

        // Create series
        var series = chart.series.push(
            am5percent.FunnelSeries.new(root, {
                name: "Series",
                valueField: "value",  // Corrected: Use "value" instead of "class"
                categoryField: "category",  // Corrected: Use "class" instead of "value"
                orientation: "vertical"
            })
        );
        series.slices.template.setAll({
            strokeOpacity: 0,
            fillGradient: am5.LinearGradient.new(root, {
              rotation: 0,
              stops: [{ brighten: -0.4 }, { brighten: 0.4 }, { brighten: -0.4 }]
            })
        });

        // Set data from the server
        series.data.setAll(data_df);

        // Optional: Hide labels
        series.labels.template.set("visible", true);
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    fetchDataAndUpdateFunnel();
});
// Function to fetch data from the server
function fetchDataAndUpdateFunnel() {
    fetch('/get-dataFunnal')  // Change the endpoint to your server route
        .then(response => response.json())
        .then(data => {
            updateFunnel(data);
        })
        .catch(error => console.error('Error:', error));
}

// Function to update the funnel chart with fetched data
function updateFunnel(data_df) {
    am5.ready(function () {
        var root = am5.Root.new("charthotizontol");

        root.setThemes([
            am5themes_Animated.new(root),
        ]);

        var chart = root.container.children.push(
            am5percent.SlicedChart.new(root, {
                layout: root.horizontalLayout
            })
        );

        // Create series
        var series = chart.series.push(
            am5percent.FunnelSeries.new(root, {
              alignLabels: false,  
              name: "Series",
                valueField: "value",  // Corrected: Use "value" instead of "class"
                categoryField: "category",  // Corrected: Use "class" instead of "value"
                orientation: "vertical"
            })
        );

        series.slices.template.setAll({
  strokeOpacity: 0,
  fillGradient: am5.LinearGradient.new(root, {
    rotation: 0,
    stops: [{ brighten: -0.4 }, { brighten: 0.4 }, { brighten: -0.4 }]
  })
});

        
        series.appear();

// Create legend
// https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
var legend = chart.children.push(
  am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50,
    marginTop: 15,
    marginBottom: 15
  })
);
legend.data.setAll(series.dataItems);
chart.appear(1000, 100);

        // Set data from the server
        series.data.setAll(data_df);

        // Optional: Hide labels
        series.labels.template.set("visible", true);
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    fetchDataAndUpdateFunnel();
});


