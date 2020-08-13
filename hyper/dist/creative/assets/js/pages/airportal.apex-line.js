const { reverse } = require("lodash");

// Chart 1 start
var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];      // 색상이 따로 지정되지 않았을 때 색상 지정
(dataColors = $("#line-chart-datalabel").data("colors")) && (colors = dataColors.split(","));   // 사용자 지정 값이 있다면 그 값을 color에 넣음
var options = {
    chart: {
        height: 600,        // 차트 높이
        type: "line",       // 차트 종류
        zoom: {             // 줌가능
            enabled: !0
        },
        toolbar: {          //툴바 표시
            show: !0
        }
    },
    colors: colors,         // 위의 컬러
    dataLabels: {           //
        enabled: !0         // 데이터 값 숫자로 표시
    },
    stroke: {
        width: 3,           // 선 굵기
        curve: "straight"   // 선은 각지게
    },
    series: [{      // series data 값과 이름
        name: "KE",
        data: [28, 27, 26, 15, 10, 20, 30, 28, 27, 26, 15, 10, 20]
    }, {
        name: "OZ",
        data: [12, 11, 14, 18, 17, 13, 13, 11, 14, 18, 17, 13, 13]
    }, {
        name: "TW",
        data: [5, 10, 15, 20, 30, 35, 40, 40, 35, 20, 25, 30, 35]
    }, {
        name: "LJ",
        data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 45, 40, 35]
    }],
    title: {    // 제목에 대한 설정
        text: "HAN 항공사별 가격 추이 (가격/월)",
        align: "center",
        style: {
            fontSize: '20px'
        }
    },
    grid: {
        row: {
            colors: ["transparent", "transparent"],
            opacity: .2
        },
        borderColor: "#f1f3fa"
    },
    markers: {
        style: "inverted",
        size: 3
    },
    xaxis: {    // x축 옵션
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ang", "Sep", "Oct", "Nov", "Dec"],
        title: {
            text: "Month"
        }
    },
    yaxis: {        // y축
        title: {
            text: "Ticket Price ($)"
        },
        min: 5,
        max: 50
    },
    legend: {       // 범례
        position: "top",
        horizontalAlign: "left",
        floating: !0,
        offsetY: -25,
        offsetX: -5

    },
    responsive: [{  // 반응형
        breakpoint: 1200,
        options: {
            chart: {
                toolbar: {
                    show: !1
                }
            },
            legend: {
                show: !1
            }
        }
    }]
};
(chart = new ApexCharts(document.querySelector("#line-chart-datalabel"), options)).render();
// Chart 1 end

// Chart 2 Start
colors = ["#727cf5"];
(dataColors = $("#line-chart-syncing").data("colors")) && (colors = dataColors.split(","));
var optionsline2 = {
        chart: {
            type: "line",
            height: 300,
            id: "fb",
            group: "social"
        },
        colors: colors,
        stroke: {
            width: [3],
            curve: "straight"
        },
        toolbar: {
            tools: {
                selection: !1
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            followCursor: !1,
            theme: "dark",
            x: {
                show: !1
            },
            marker: {
                show: !1
            },
            y: {
                title: {
                    formatter: function () {
                        return ""
                    }
                }
            }
        },
        series: [{
            data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
                min: 10,
                max: 30
            })
        }],
        xaxis: {
            type: "datetime"
        },
        grid: {
            row: {
                colors: ["transparent", "transparent"],
                opacity: .2
            },
            borderColor: "#f1f3fa"
        }
    },
    chartline2 = new ApexCharts(document.querySelector("#line-chart-syncing"), optionsline2);
chartline2.render();

colors = ["#6c757d"];
(dataColors = $("#line-chart-syncing2").data("colors")) && (colors = dataColors.split(","));
options = {
    chart: {
        height: 300,
        type: "line",
        id: "yt",
        group: "social"
    },
    colors: colors,
    dataLabels: {
        enabled: !1
    },
    toolbar: {
        tools: {
            selection: !1
        }
    },
    tooltip: {
        followCursor: !1,
        theme: "dark",
        x: {
            show: !1
        },
        marker: {
            show: !1
        },
        y: {
            title: {
                formatter: function () {
                    return ""
                }
            }
        }
    },
    stroke: {
        width: [3],
        curve: "smooth"
    },
    series: [{
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    fill: {
        gradient: {
            enabled: !0,
            opacityFrom: .6,
            opacityTo: .8
        }
    },
    legend: {
        position: "top",
        horizontalAlign: "left"
    },
    xaxis: {
        type: "datetime"
    },
    grid: {
        row: {
            colors: ["transparent", "transparent"],
            opacity: .2
        },
        borderColor: "#f1f3fa"
    }
};

function generateDayWiseTimeSeries(e, t, a) {
    for (var o = 0, r = []; o < t;) {
        var s = e,
            n = Math.floor(Math.random() * (a.max - a.min + 1)) + a.min;
        r.push([s, n]), e += 864e5, o++
    }
    return r
}(chart = new ApexCharts(document.querySelector("#line-chart-syncing2"), options)).render();
// Chart 2 End

// Chart 3 Start
var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
(dataColors = $("#line-chart-datalabel2").data("colors")) && (colors = dataColors.split(","));
var options = {
    chart: {
        height: 600,
        type: "line",
        zoom: {
            enabled: !0
        },
        toolbar: {
            show: !0
        }
    },
    colors: colors,
    dataLabels: {
        enabled: !1
    },
    stroke: {
        width: 2,
        curve: "stepline"
    },
    series: [{
        name: "KE",
        data: [28, 27, 26, 15, 10, 20, 30, 28, 27, 26, 15, 10, 20]
    }, {
        name: "OZ",
        data: [12, 11, 14, 18, 17, 13, 13, 11, 14, 18, 17, 13, 13]
    }, {
        name: "TW",
        data: [5, 10, 15, 20, 30, 35, 40, 40, 35, 20, 25, 30, 35]
    }, {
        name: "TW",
        data: [50, 40, 35, 20, 25, 30, 35, 50, 40, 35, 20, 25, 30]
    }],
    title: {
        text: "HAN 항공사별 가격 변동 그래프",
        align: "center",
        style: {
            fontSize: '20px'
        }
    },
    grid: {
        row: {
            colors: ["transparent", "transparent"],
            opacity: .2
        },
        borderColor: "#f1f3fa"
    },
    markers: {
        style: "inverted",
        size: 6
    },
    xaxis: {
        labels: {
            /**
             * Allows users to apply a custom formatter function to xaxis labels.
             *
             * @param { String } value - The default value generated
             * @param { Number } timestamp - In a datetime series, this is the raw timestamp 
             * @param { index } index of the tick / currently executing iteration in xaxis labels array
             */
            formatter: function (value, timestamp, index) {
                return moment(new Date(timestamp)).format("DD MMM YYYY")
            }
        }
    },
    yaxis: {
        title: {
            text: "Ticket Price ($)"
        },
        min: 5,
        max: 50
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        floating: !0,
        offsetY: -25,
        offsetX: -5

    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: !1
                }
            },
            legend: {
                show: !1
            }
        }
    }]
};
(chart = new ApexCharts(document.querySelector("#line-chart-datalabel2"), options)).render();
for (var ts2 = 14844186e5, dates = [], spikes = [5, -5, 3, -3, 8, -8], i = 0; i < 120; i++) {
    var innerArr = [ts2 += 864e5, dataSeries[1][i].value];
    dates.push(innerArr)
}
// Chart 3 End

// Chart 4 Start
colors = ["#0acf97", "#fa5c7c"];
(dataColors = $("#combo-candlestick").data("colors")) && (colors = dataColors.split(","));
var optionsCandlestick = {
        chart: {
            height: 600,
            type: "candlestick",
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !1
            }
        },
        series: [{
            data: seriesData
        }],
        plotOptions: {
            candlestick: {
                colors: {
                    upward: colors[0],
                    downward: colors[1]
                }
            }
        },
        xaxis: {
            type: "datetime"
        },
        grid: {
            borderColor: "#f1f3fa"
        }
    },
    chartCandlestick = new ApexCharts(document.querySelector("#combo-candlestick"), optionsCandlestick);
chartCandlestick.render();
var dataColors;
colors = ["#727cf5", "#ffbc00"];
(dataColors = $("#combo-col-candlestick").data("colors")) && (colors = dataColors.split(","));
var chart;
options = {
    chart: {
        height: 300,
        type: "bar",
        toolbar: {
            show: !1,
            autoSelected: "selection"
        },
        selection: {
            xaxis: {
                min: new Date("20 Jan 2017").getTime(),
                max: new Date("10 Dec 2017").getTime()
            },
            fill: {
                color: "#6c757d",
                opacity: .4
            },
            stroke: {
                color: "#6c757d"
            }
        },
        events: {
            selection: function (o, a) {
                chartCandlestick.updateOptions({
                    xaxis: {
                        min: a.xaxis.min,
                        max: a.xaxis.max
                    }
                }, !1, !1)
            }
        }
    },
    dataLabels: {
        enabled: !1
    },
    plotOptions: {
        bar: {
            columnWidth: "80%",
            colors: {
                ranges: [{
                    from: -1e3,
                    to: 0,
                    color: colors[0]
                }, {
                    from: 1,
                    to: 1e4,
                    color: colors[1]
                }]
            }
        }
    },
    series: [{
        name: "volume",
        data: seriesDataLinear
    }],
    xaxis: {
        type: "datetime",
        axisBorder: {
            offsetX: 13
        }
    },
    yaxis: {
        labels: {
            show: !1
        }
    },
    grid: {
        borderColor: "#f1f3fa"
    }
};
(chart = new ApexCharts(document.querySelector("#combo-col-candlestick"), options)).render();
colors = ["#727cf5", "#ffbc00"];
(dataColors = $("#combo-bar-candlestick").data("colors")) && (colors = dataColors.split(","));
options = {
  chart: {
      height: 300,
      type: "bar",
      toolbar: {
          show: !1,
          autoSelected: "selection"
      },
      selection: {
          xaxis: {
              min: new Date("20 Jan 2017").getTime(),
              max: new Date("10 Dec 2017").getTime()
          },
          fill: {
              color: "#6c757d",
              opacity: .4
          },
          stroke: {
              color: "#6c757d"
          }
      },
      events: {
          selection: function (o, a) {
              chartCandlestick.updateOptions({
                  xaxis: {
                      min: a.xaxis.min,
                      max: a.xaxis.max
                  }
              }, !1, !1)
          }
      }
  },
  dataLabels: {
      enabled: !1
  },
  plotOptions: {
      bar: {
          columnWidth: "80%",
          colors: {
              ranges: [{
                  from: -1e3,
                  to: 0,
                  color: colors[0]
              }, {
                  from: 1,
                  to: 1e4,
                  color: colors[1]
              }]
          }
      }
  },
  series: [{
      name: "volume",
      data: seriesDataLinear
  }],
  xaxis: {
      type: "datetime",
      axisBorder: {
          offsetX: 13
      }
  },
  yaxis: {
    labels: {

      show: !1
    }
  },
  grid: {
      borderColor: "#f1f3fa"
  }
};
(chart = new ApexCharts(document.querySelector("#combo-bar-candlestick"), options)).render();
// Chart 4 End