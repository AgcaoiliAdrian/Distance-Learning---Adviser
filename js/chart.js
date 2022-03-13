// BAR GRAPH

var a = ["Enrolled", "Graduated"];
var b = [30, 40, 10];
var barColors = ["#ff8400", "#5a761d"];

new Chart("barStudent", {
  type: "bar",
  data: {
    labels: a,
    datasets: [
      {
        backgroundColor: barColors,
        data: b,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});


// PIE ENROLLEMENT
var x = ["Education", "Nursing"];
var y = [30, 40, 10];
var barColors = ["#ff8400", "#5a761d"];

new Chart("barStudents", {
  type: "bar",
  data: {
    labels: x,
    datasets: [
      {
        backgroundColor: barColors,
        data: y,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});

// PIE STATUS

var xValues = ["Nursing", "Education"];
var yValues = [50, 40];
var barColors = ["#ff8400", "#5a761d"];
new Chart("pieStatus", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: true },
  },
});
