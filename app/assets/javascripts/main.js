function main() {
  var Systems = ["linux", "linux64", "win", "win64", "mac"];

  function calcPercentDiff(currentValue, previousValue) {
    return -Math.round(((currentValue - previousValue) / previousValue) * 1000) / 10;
  }

  var previousPoint = null;
  var days = Object.keys(data);//.sort(); //already sorted in query

  function getDisplays() {
    return Systems.map(function (sys) {
      var sysdata = days.map(function (day) {
        var value = data[day][sys];
        if (value)
          return [+new Date(day), value];
      });

      return {
        lines: {show: true},
        points: {show: true, fillColor: "#ffffff"},
        borderWidth: 1.5,
        borderColor: "#BEBEBE",
        markingsLineWidth: .75,
        hoverable: true,
        clickable: true,
        shadowSize: 0,
        label: sys,
        data: sysdata.filter(function (d) { return d })
      };
    });
  }

  function getMinDistance(elt,ranges) {
    var keys = Object.keys(data);
    var full_rng = new Date(keys[keys.length - 1]) - new Date(keys[0]);
    var rng = ((typeof ranges == "undefined") ? full_rng : ranges.xaxis.to - ranges.xaxis.from);
    var scale = rng / full_rng;
    return (elt.width()/scale)/6;
  }

  function drawGraph(elt) {
    var options = {
      yaxis: {
        tickDecimals: 2,
        tickFormatter: function (val, axis) {
          return (val / 1024 / 1024).toFixed(axis.tickDecimals) + " mb";
        }
      },
      xaxis: {
        mode: "time",
        color: "transparent"
      },
      legend: {position: "nw",hideable:true},
      selection: { mode: "xy" },
      grid: {hoverable: true, clickable: true},
      series: {
        downsample: {
          threshold: getMinDistance(elt)
        }
      }
    };

    function showToolTip(x, y, contents) {
      var tipWidth = 165;
      var tipHeight = 75;
      var xOffset = 5;
      var yOffset = 5;
      var ie = document.all && !window.opera;
      var iebody = (document.compatMode == "CSS1Compat")
                   ? document.documentElement
                   : document.body;
      var scrollLeft = ie ? iebody.scrollLeft : window.pageXOffset;
      var scrollTop = ie ? iebody.scrollTop : window.pageYOffset;
      var docWidth = ie ? iebody.clientWidth - 15 : window.innerWidth - 15;
      var docHeight = ie ? iebody.clientHeight - 15 : window.innerHeight - 8;
      y = (y + tipHeight - scrollTop > docHeight)
          ? y - tipHeight - 5 - (yOffset * 2)
          : y // account for bottom edge;

      // account for right edge
      if (x + tipWidth - scrollLeft > docWidth) {
        $('<div id="tooltip">' + contents + '<\/div>').css({
          top: y + yOffset,
          right: docWidth - x + xOffset,
        }).appendTo("body").fadeIn(200);
      } else {
        $('<div id="tooltip">' + contents + '<\/div>').css({
          top: y + yOffset,
          left: x + xOffset,
        }).appendTo("body").fadeIn(200);
      }
    }

    window.flot_plot = $.plot(elt, getDisplays(), options);

    var selecting = false;
    // zooming
    elt.bind("plotselected", function (event, ranges) {
      window.flot_plot = $.plot(elt, getDisplays(), $.extend(true, {}, options, {
          xaxis: { min: ranges.xaxis.from, max: ranges.xaxis.to },
          yaxis: { min: ranges.yaxis.from, max: ranges.yaxis.to },
          series: { downsample: { threshold: getMinDistance(elt,ranges) } },
          legend: { hidden: window.flot_plot.getOptions().legend.hidden }
      }));

      selecting = true;
      setTimeout(function () {
        selecting = false;
      }, 0);
    });

    elt.bind("plotclick", function (event, pos, item) {
      if (!item || selecting)
        return;

      var index = item.dataIndex;

      function pad(num) {
        return num > 9 ? num : "0" + num;
      }

      function formatDate(date) {
        var d = new Date(date);
        return (d.getYear() + 1900) + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
      }

      if (index > 0) {
        var date = formatDate(item.datapoint[0]);
        var prevdate = formatDate(item.series.data[index - 1][0]);
        window.open("http://hg.mozilla.org/mozilla-central/pushloghtml?startdate=" + prevdate + "&enddate=" + date);
      }
    });

    elt.bind("plothover", function (event, pos, item) {
      if (selecting)
        return;

      if (!item) {
        $("#tooltip").remove();
        previousPoint = null;
        return;
      }

      if (previousPoint &&
          (previousPoint[0] == item.datapoint[0]) &&
          (previousPoint[1] == item.datapoint[1])) {
        return;
      }

      previousPoint = item.datapoint;
      $("#tooltip").remove();

      var index = item.dataIndex;
      var value = Math.round(item.datapoint[1]*10 / (1024*1024))/10;
      var text = "size: " + value + " mb<br/>";

      if (index > 0) {
        var prevValue = Math.round(item.series.data[index - 1][1]*10 / (1024*1024))/10;
        var diff = Math.round((value - prevValue) * 10) / 10;
        var pdiff = calcPercentDiff(value, prevValue);
        var better = pdiff < 0 ? "worse" : "better";
        pdiff = Math.abs(pdiff);
        if (diff === diff) {
          text += String.fromCharCode(916) + ": " + diff + " mb";
          text += " (" + pdiff + "% " + better + ")<br/>";
        }
      }

      text += "sys: " + Systems[item.seriesIndex] + "<br/>";
      text += "(click to show pushlog)";
      showToolTip(item.pageX, item.pageY, text);
    });
  }

  drawGraph($("#graph"));
}
