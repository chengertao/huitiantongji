define(['jquery', 'bootstrap', 'backend', 'table', 'form', 'template', 'echarts', 'echarts-theme'], function ($, undefined, Backend, Table, Form,Template, Echarts) {



    var Controller = {
        index:function (){

            /**用户分析页面******start************************/
            var userBarChart  = Echarts.init(document.getElementById('bar-percent'));
            var option = {
                title: {
                    text: '第一个 ECharts 实例'
                },
                xAxis: {
                    data: ["衬衫","羊毛衫"]
                },
                yAxis: {
                },
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20]
                    }
                ]
            };

            userBarChart.setOption(option);


            /**用户分析页面******end**************************/
        }
    };
    return Controller;

});
