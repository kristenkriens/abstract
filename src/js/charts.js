(function (H) {
    function deferRender (proceed) {
        var series = this,
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);

        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };

    H.wrap(H.Series.prototype, 'render', deferRender);

}(Highcharts));

Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function() {
    return {
        linearGradient: [0,0,0,150],
        stops: [
            [0, '#b000df'],
            [1, '#4700ff']
        ]
    };
});

var percentageX;
var numberX;
var arrayX = [];

$('.percentages__item').each(function(i) {
  percentageX = $(this).find('.percentages__number').text();
  numberX = Number( percentageX.replace(/[^0-9\.]+/g,""));

  arrayX.push(numberX);
});

var arrayY = arrayX.map(function(value) {
    return 100 - value;
});

var $data = {
    x: arrayX,
    y: arrayY
}

for (var i = 0; i < arrayX.length; i++) {
  Highcharts.chart('chart-' + (i + 1), {
      chart: {
          type: 'pie'
      },
      title: {
          text: null
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          pie: {
              allowPointSelect: false,
              dataLabels: {
                  enabled: false
              }
          }
      },
      tooltip: {
        enabled: false
      },
      series: [{
          innerSize: '93%',
          states: {
              hover: {
                  enabled: false
              }
          },
          data: [
              { y: $data.x[i], className: 'percentage' },
              { y: $data.y[i], className: 'empty' }
          ]
      }]
  });
}
