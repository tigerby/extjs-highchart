Ext.define('Chart.ux.Highcharts', {
    extend: 'Ext.Component',
    alias: 'widget.highchart',

    chart: null,

    chartEvents: null,

    chartConfig: null,

    afterChartRendered: null,

    chartLoad: null,

    style: {
        height: '95%'
    },

    constructor: function(config){
        this.name = config.name;
        this.addEvents({
            "load" : true
        });

        this.listeners = config.listeners;

        this.callParent(arguments)
    },

    afterRender: function() {
        var me = this;
        Ext.apply(this.chartConfig.chart, {
            renderTo : this.el.dom,
            events: {
                load: function() {
                    me.fireEvent('chartLoad', this);
                }
            }
        });

        this.chart = new Highcharts.Chart(this.chartConfig, this.afterChartRendered);

        this.callParent();
    }
});