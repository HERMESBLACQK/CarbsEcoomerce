function getChartColorsArray(e) {
  if (null !== document.getElementById(e)) {
    var t = document.getElementById(e).getAttribute("data-colors");
    if (t)
      return (t = JSON.parse(t)).map(function (e) {
        var t = e.replace(" ", "");
        return -1 === t.indexOf(",")
          ? getComputedStyle(document.documentElement).getPropertyValue(t) || t
          : 2 == (e = e.split(",")).length
          ? "rgba(" +
            getComputedStyle(document.documentElement).getPropertyValue(e[0]) +
            "," +
            e[1] +
            ")"
          : t;
      });
    console.warn("data-colors atributes not found on", e);
  }
}
var options,
  chart,
  linechartcustomerColors = getChartColorsArray("customer_impression_charts"),
  chartDonutBasicColors =
    (linechartcustomerColors &&
      ((options = {
        series: [
          {
            name: "Orders",
            type: "area",
            data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
          },
          {
            name: "Earnings",
            type: "bar",
            data: [
              89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57,
              42.36, 88.51, 36.57,
            ],
          },
          {
            name: "Refunds",
            type: "line",
            data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
          },
        ],
        chart: { height: 310, type: "line", toolbar: { show: !1 } },
        stroke: { curve: "straight", dashArray: [0, 0, 8], width: [0.1, 0, 2] },
        fill: { opacity: [0.03, 0.9, 1] },
        markers: { size: [0, 0, 0], strokeWidth: 2, hover: { size: 4 } },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisTicks: { show: !1 },
          axisBorder: { show: !1 },
        },
        grid: {
          show: !0,
          xaxis: { lines: { show: !0 } },
          yaxis: { lines: { show: !1 } },
          padding: { top: 0, right: -2, bottom: 15, left: 10 },
        },
        legend: {
          show: !0,
          horizontalAlign: "center",
          offsetX: 0,
          offsetY: -5,
          markers: { width: 9, height: 9, radius: 6 },
          itemMargin: { horizontal: 10, vertical: 0 },
        },
        plotOptions: {
          bar: { columnWidth: "20%", barHeight: "100%", borderRadius: [8] },
        },
        colors: linechartcustomerColors,
        tooltip: {
          shared: !0,
          y: [
            {
              formatter: function (e) {
                return void 0 !== e ? e.toFixed(0) : e;
              },
            },
            {
              formatter: function (e) {
                return void 0 !== e ? "$" + e.toFixed(2) + "k" : e;
              },
            },
            {
              formatter: function (e) {
                return void 0 !== e ? e.toFixed(0) + " Sales" : e;
              },
            },
          ],
        },
      }),
      (chart = new ApexCharts(
        document.querySelector("#customer_impression_charts"),
        options
      )).render()),
    getChartColorsArray("#store-visits-source")),
  swiper =
    (chartDonutBasicColors &&
      ((options = {
        series: [44, 55, 41, 17, 15],
        labels: ["Direct", "Social", "Email", "Other", "Referrals"],
        chart: { height: 333, type: "donut" },
        legend: { position: "bottom" },
        stroke: { show: !1 },
        dataLabels: { dropShadow: { enabled: !1 } },
        colors: chartDonutBasicColors,
      }),
      (chart = new ApexCharts(
        document.querySelector("#store-visits-source"),
        options
      )).render()),
    new Swiper(".selling-product", {
      slidesPerView: "auto",
      spaceBetween: 15,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      autoplay: { delay: 2500, disableOnInteraction: !1 },
    }));
function currentTime() {
  var e = 12 <= new Date().getHours() ? "pm" : "am",
    t =
      12 < new Date().getHours()
        ? new Date().getHours() % 12
        : new Date().getHours(),
    r =
      new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes();
  return t < 10 ? "0" + t + ":" + r + " " + e : t + ":" + r + " " + e;
}
setInterval(currentTime, 1e3);

console.log(1e6);