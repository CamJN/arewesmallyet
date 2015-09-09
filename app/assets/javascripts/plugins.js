(function () {

  function insertReleaseTicks(plot) {
    plot.hooks.draw.push(function (plot, ctx) {
      //$('.release').remove();
      var graph = document.getElementById('graph');
      [].slice.call(document.getElementsByClassName('release')).forEach(graph.removeChild.bind(graph));

      ctx.save();

      var off = plot.getPlotOffset();
      ctx.translate(off.left, off.top);

      ctx.strokeStyle = "#888";
      ctx.lineWidth = 1;
      ctx.beginPath();

      var xaxis = plot.getAxes().xaxis;
      var plotHeight = plot.height();
      var plotWidth = plot.width();

      releaseDatesSafe = JSON.parse(JSON.stringify(releaseDates));

      releaseDatesSafe.forEach(function (rdate) {
        var x = xaxis.p2c(+new Date(rdate[0]));
        rdate[0] = Math.floor(x) + 0.5;
      });

      releaseDatesSafe.forEach(function (rdate, index) {
        var x = rdate[0];
        var isLast = index + 1 >= releaseDatesSafe.length;
        var nextx = isLast ? plotWidth : releaseDatesSafe[index + 1][0];
        if (x >= plotWidth || (!isLast && nextx <= 0))
          return;

        if (x > 0 && x < plotWidth) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, plotHeight);
        }

        var label = $('<div class="release"/>')
          .text(rdate[1]).appendTo("#graph");

        var left = Math.max(0, x);
        var right = Math.min(plotWidth, nextx);
        var mid = left + ((right - left) / 2);
        var labelmid = label.width() / 2;
        label[0].style.left=("left", (off.left + Math.max(left, mid - labelmid)) + "px");
      });

      ctx.stroke();
      ctx.restore();
    });
  }

  $.plot.plugins.push({init: insertReleaseTicks});
})();
