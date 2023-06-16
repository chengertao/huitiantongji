define(['jquery', 'bootstrap', 'backend', 'table', 'form', 'template', 'echarts', 'echarts-theme'], function ($, undefined, Backend, Table, Form,Template, Echarts) {

    var Controller = {
        index:function (){

            /**柱状图*/
            var userBarChart1  = Echarts.init($('#bar-chart1')[0]);
            var option = {
                xAxis: {
                    show: false
                },
                yAxis: {
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: { fontSize: '80%', color: '#02afff' },
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: false
                },
                series: [
                    {
                        type: 'bar',
                        data: [5, 20]
                    }
                ]
            };
            userBarChart1.setOption(option);

            var userBarChart2  = Echarts.init($('#bar-chart2')[0]);
            var option = {
                xAxis: {
                    show: false
                },
                yAxis: {
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: { fontSize: '80%', color: '#02afff' },
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: false
                },
                series: [
                    {
                        type: 'bar',
                        data: [5, 20]
                    }
                ]
            };
            userBarChart2.setOption(option);

            var userBarChart3  = Echarts.init($('#bar-chart3')[0]);
            var option = {
                xAxis: {
                    show: false
                },
                yAxis: {
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: { fontSize: '80%', color: '#02afff' },
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: false
                },
                series: [
                    {
                        type: 'bar',
                        data: [5, 20]
                    }
                ]
            };
            userBarChart3.setOption(option);

            /**折线图*/
            var linechart1 = Echarts.init(document.getElementById('line-chart1'));
            var option = {
                title: {
                    text: '周新增用户趋势'
                },
                tooltip:{
                    trigger: 'axis',  // axis   item   none三个值
                },
                xAxis: {
                    type: 'category',
                    data:['23年15周','23年16周', '23年17周', '23年18周', '23年19周', '23年20周','23年21周']
                },
                yAxis: {
                   type:'value',
                    splitLine: {
                        show: true,
                    },
                    /*axisLabel: {
                        textStyle: { fontSize: '80%', color: '#02afff' },
                    },*/
                    axisLine: {
                        show: false
                    },
                    // axisTick: false
                },
                series: [
                    {
                        type: 'line',
                        data: [80,120,200,300,150,120,110],
                        symbol: 'circle',//折线点设置为实心点
                        symbolSize: 2,   //折线点的大小
                        itemStyle: {
                            normal: {
                                color: "#2fc25b",//折线点的颜色
                                lineStyle: {
                                    color: "#2fc25b"//折线的颜色
                                }
                            }
                        }
                    }
                ]
            };
            linechart1.setOption(option);

            var linechart2 = Echarts.init($('#line-chart2')[0]);
            var option = {
                title: {
                    text: '周打开次数'
                },
                tooltip:{
                    trigger: 'axis',  // axis   item   none三个值
                },
                xAxis: {
                    type: 'category',
                    data:['23年15周','23年16周', '23年17周', '23年18周', '23年19周', '23年20周','23年21周']
                },
                yAxis: {
                    type:'value',
                    splitLine: {
                        show: true,
                    },
                    /*axisLabel: {
                        textStyle: { fontSize: '80%', color: '#02afff' },
                    },*/
                    axisLine: {
                        show: false
                    },
                    // axisTick: false
                },
                series: [
                    {
                        type: 'line',
                        data: [80,120,200,300,150,120,110],
                        symbol: 'circle',//折线点设置为实心点
                        symbolSize: 2,   //折线点的大小
                        itemStyle: {
                            normal: {
                                color: "#2fc25b",//折线点的颜色
                                lineStyle: {
                                    color: "#2fc25b"//折线的颜色
                                }
                            }
                        }
                    }
                ]
            };
            linechart2.setOption(option);

            var linechart3 = Echarts.init($('#line-chart3')[0]);
            var option = {
                title: {
                    text: '页面访问Top10'
                },
                tooltip:{
                    trigger: 'axis',  // axis   item   none三个值
                },
                yAxis: {
                    type: 'category',
                    data:['23年15周','23年16周', '23年17周', '23年18周', '23年19周', '23年20周','23年21周'],
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: false
                },
                xAxis: {
                    type:'value',
                    splitLine: {
                        show: false
                    },
                    /*axisLabel: {
                        textStyle: { fontSize: '80%', color: '#02afff' },
                    },*/
                    axisLine: {
                        show: true
                    },
                    // axisTick: false
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: 10, // 设置柱状图宽度为30像素
                        data: [80,120,200,300,150,120,110],
                        symbol: 'circle',//折线点设置为实心点
                        symbolSize: 2,   //折线点的大小
                        itemStyle: {
                            normal: {
                                color: "#2fc25b",//折线点的颜色
                                lineStyle: {
                                    color: "#2fc25b"//折线的颜色
                                }
                            }
                        }
                    }
                ]
            };

            linechart3.setOption(option);

            var linechart4 = Echarts.init($('#line-chart4')[0]);
            var option = {
                title: {
                    text: '周留存指标趋势'
                },
                tooltip:{
                    trigger: 'axis',  // axis   item   none三个值
                },
                xAxis: {
                    type: 'category',
                    data:['23年15周','23年16周', '23年17周', '23年18周', '23年19周', '23年20周','23年21周']
                },
                yAxis: {
                    type:'value',
                    splitLine: {
                        show: true,
                    },
                    /*axisLabel: {
                        textStyle: { fontSize: '80%', color: '#02afff' },
                    },*/
                    axisLine: {
                        show: false
                    },
                    // axisTick: false
                },
                series: [
                    {
                        type: 'line',
                        data: [80,120,200,300,150,120,110],
                        symbol: 'circle',//折线点设置为实心点
                        symbolSize: 2,   //折线点的大小
                        itemStyle: {
                            normal: {
                                color: "#2fc25b",//折线点的颜色
                                lineStyle: {
                                    color: "#2fc25b"//折线的颜色
                                }
                            }
                        }
                    }
                ]
            };
            linechart4.setOption(option);

            var linechart5 = Echarts.init($('#line-chart5')[0]);
            var option = {
                title: {
                    text: '好友人数周新增趋势'
                },
                grid: {
                    left: '0%',   //距左边边框的距离
                    right: '0%',  //距右边边框的距离
                    bottom: '0',//距下面边框的距离
                    top: '30',    //距上面边框的距离
                    containLabel: true
                },
                tooltip:{
                    trigger: 'axis',  // axis   item   none三个值
                },
                xAxis: {
                    type: 'category',
                    data:['23年15周','23年16周', '23年17周', '23年18周', '23年19周', '23年20周','23年21周']
                },
                yAxis: {
                    type:'value',
                    splitLine: {
                        show: true,
                    },
                    /*axisLabel: {
                        textStyle: { fontSize: '80%', color: '#02afff' },
                    },*/
                    axisLine: {
                        show: false
                    },
                    // axisTick: false
                },
                series: [
                    {
                        type: 'line',
                        data: [80,120,200,300,150,120,110],
                        symbol: 'circle',//折线点设置为实心点
                        symbolSize: 2,   //折线点的大小
                        itemStyle: {
                            normal: {
                                color: "#2fc25b",//折线点的颜色
                                lineStyle: {
                                    color: "#2fc25b"//折线的颜色
                                }
                            }
                        }
                    }
                ]
            };
            linechart5.setOption(option);

            var linechart6 = Echarts.init($('#line-chart6')[0]);
            var option = {
                title: {
                    text: '社群人数周新增趋势'
                },
                tooltip:{
                    trigger: 'axis',  // axis   item   none三个值
                },
                xAxis: {
                    type: 'category',
                    data:['23年15周','23年16周', '23年17周', '23年18周', '23年19周', '23年20周','23年21周']
                },
                yAxis: {
                    type:'value',
                    splitLine: {
                        show: true,
                    },
                    /*axisLabel: {
                        textStyle: { fontSize: '80%', color: '#02afff' },
                    },*/
                    axisLine: {
                        show: false
                    },
                    // axisTick: false
                },
                series: [
                    {
                        type: 'line',
                        data: [80,120,200,300,150,120,110],
                        symbol: 'circle',//折线点设置为实心点
                        symbolSize: 2,   //折线点的大小
                        itemStyle: {
                            normal: {
                                color: "#2fc25b",//折线点的颜色
                                lineStyle: {
                                    color: "#2fc25b"//折线的颜色
                                }
                            }
                        }
                    }
                ]
            };
            linechart6.setOption(option);

        }
    };
    return Controller;
});
