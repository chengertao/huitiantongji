define(['jquery', 'bootstrap', 'backend', 'table', 'form', 'template', 'echarts', 'echarts-theme'], function ($, undefined, Backend, Table, Form,Template, Echarts) {

    var Controller = {
        index:function (){

            /**柱状图*/
            var userBarChart1  = Echarts.init($('#bar-chart1')[0]);
            var barData = [[10],[90]]; //原始数据
            var barBorderRadiusItems = [
                [10, 0, 0, 10],
                [0, 10, 10, 0]
            ];
            var optionVal = [];
            for (var i = 0, length = barData.length; i < length; i++) {
                var tmpValue = {};
                tmpValue.type = 'bar';
                tmpValue.stack = '总量';
                tmpValue.label = { normal: {show: true,position: 'insideRight',formatter:'{c}%'}};
                tmpValue.itemStyle = {
                    barBorderRadius: barBorderRadiusItems[i] // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
                };
                tmpValue.data = barData[i];
                optionVal[i] = tmpValue;
            }
            var option = {
                color: ['rgb(64, 158, 255)', 'rgb(211,19,58)'],
                grid: {
                    x: 0, // 左间距
                    y: 0, // 上间距
                    x2: 0, // 右间距
                    y2: 0, // 下间距
                    containLabel: true // grid 区域是否包含坐标轴的刻度标签, 常用于『防止标签溢出』的场景
                },
                xAxis: {
                    type:'value',
                    // 坐标轴刻度
                    axisTick: {
                        show: false // 是否显示坐标轴刻度 默认显示
                    },
                    // 坐标轴轴线
                    axisLine: { // 是否显示坐标轴轴线 默认显示
                        show: false // 是否显示坐标轴轴线 默认显示
                    },
                    // 坐标轴在图表区域中的分隔线
                    splitLine: {
                        show: false // 是否显示分隔线。默认数值轴显示
                    },
                    // 坐标轴刻度标签
                    axisLabel: {
                        show: false // 是否显示刻度标签 默认显示
                    }
                },
                yAxis: {
                    type: 'category',
                    // 坐标轴刻度
                    axisTick: {
                        show: false // 是否显示坐标轴刻度 默认显示
                    },
                    // 坐标轴轴线
                    axisLine: { // 是否显示坐标轴轴线 默认显示
                        show: false, // 是否显示坐标轴轴线 默认显示
                        lineStyle: { // 坐标轴线线的颜色
                            color: '#cdd3ee'
                        }
                    },
                    // 坐标轴在图表区域中的分隔线
                    splitLine: {
                        show: false // 是否显示分隔线。默认数值轴显示
                    },
                    // 坐标轴刻度标签
                    axisLabel: {
                        show: false, // 是否显示刻度标签 默认显示
                        fontSize: 16, // 文字的字体大小
                        color: '#cdd3ee', // 刻度标签文字的颜色
                        // 使用字符串模板，模板变量为刻度默认标签 {value}
                        formatter: '{value}'
                    },
                    // 类目数据，在类目轴（type: 'category'）中有效
                    //data: ['北京']
                },
                series : optionVal

            };
            userBarChart1.setOption(option);

            var userBarChart2  = Echarts.init($('#bar-chart2')[0]);
            var barData2 = [[10],[90]]; //原始数据
            var barBorderRadiusItems2 = [
                [10, 0, 0, 10],
                [0, 10, 10, 0]
            ];
            var optionVal2 = [];
            for (var i = 0, length = barData2.length; i < length; i++) {
                var tmpValue = {};
                tmpValue.type = 'bar';
                tmpValue.stack = '总量';
                tmpValue.label = { normal: {show: true,position: 'insideRight',formatter:'{c}%'}};
                tmpValue.itemStyle = {
                    barBorderRadius: barBorderRadiusItems2[i] // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
                };
                tmpValue.data = barData2[i];
                optionVal2[i] = tmpValue;
            }
            var option = {
                grid: {
                    x: 0, // 左间距
                    y: 0, // 上间距
                    x2: 0, // 右间距
                    y2: 0, // 下间距
                    containLabel: true // grid 区域是否包含坐标轴的刻度标签, 常用于『防止标签溢出』的场景
                },
                xAxis: {
                    type:'value',
                    // 坐标轴刻度
                    axisTick: {
                        show: false // 是否显示坐标轴刻度 默认显示
                    },
                    // 坐标轴轴线
                    axisLine: { // 是否显示坐标轴轴线 默认显示
                        show: false // 是否显示坐标轴轴线 默认显示
                    },
                    // 坐标轴在图表区域中的分隔线
                    splitLine: {
                        show: false // 是否显示分隔线。默认数值轴显示
                    },
                    // 坐标轴刻度标签
                    axisLabel: {
                        show: false // 是否显示刻度标签 默认显示
                    }
                },
                yAxis: {
                    type: 'category',
                    // 坐标轴刻度
                    axisTick: {
                        show: false // 是否显示坐标轴刻度 默认显示
                    },
                    // 坐标轴轴线
                    axisLine: { // 是否显示坐标轴轴线 默认显示
                        show: false, // 是否显示坐标轴轴线 默认显示
                        lineStyle: { // 坐标轴线线的颜色
                            color: '#cdd3ee'
                        }
                    },
                    // 坐标轴在图表区域中的分隔线
                    splitLine: {
                        show: false // 是否显示分隔线。默认数值轴显示
                    },
                    // 坐标轴刻度标签
                    axisLabel: {
                        show: false, // 是否显示刻度标签 默认显示
                        fontSize: 16, // 文字的字体大小
                        color: '#cdd3ee', // 刻度标签文字的颜色
                        // 使用字符串模板，模板变量为刻度默认标签 {value}
                        formatter: '{value}'
                    }
                    // 类目数据，在类目轴（type: 'category'）中有效
                    //data: ['北京']
                },
                series:optionVal2
            };
            userBarChart2.setOption(option);


            var userBarChart3  = Echarts.init($('#bar-chart3')[0]);
            var barData3 = [[10],[90]]; //原始数据
            var barBorderRadiusItems3 = [
                [10, 0, 0, 10],
                [0, 10, 10, 0]
            ];
            var optionVal3 = [];
            for (var i = 0, length = barData3.length; i < length; i++) {
                var tmpValue = {};
                tmpValue.type = 'bar';
                tmpValue.stack = '总量';
                tmpValue.label = { normal: {show: true,position: 'insideRight',formatter:'{c}%'}};
                tmpValue.itemStyle = {
                    barBorderRadius: barBorderRadiusItems3[i] // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
                };
                tmpValue.data = barData3[i];
                optionVal3[i] = tmpValue;
            }
            var option = {
                color:['#0babe8','#d711e5'],
                grid: {
                    x: 0, // 左间距
                    y: 0, // 上间距
                    x2: 0, // 右间距
                    y2: 0, // 下间距
                    containLabel: true // grid 区域是否包含坐标轴的刻度标签, 常用于『防止标签溢出』的场景
                },
                xAxis: {
                    type:'value',
                    // 坐标轴刻度
                    axisTick: {
                        show: false // 是否显示坐标轴刻度 默认显示
                    },
                    // 坐标轴轴线
                    axisLine: { // 是否显示坐标轴轴线 默认显示
                        show: false // 是否显示坐标轴轴线 默认显示
                    },
                    // 坐标轴在图表区域中的分隔线
                    splitLine: {
                        show: false // 是否显示分隔线。默认数值轴显示
                    },
                    // 坐标轴刻度标签
                    axisLabel: {
                        show: false // 是否显示刻度标签 默认显示
                    }
                },
                yAxis: {
                    type: 'category',
                    // 坐标轴刻度
                    axisTick: {
                        show: false // 是否显示坐标轴刻度 默认显示
                    },
                    // 坐标轴轴线
                    axisLine: { // 是否显示坐标轴轴线 默认显示
                        show: false, // 是否显示坐标轴轴线 默认显示
                        lineStyle: { // 坐标轴线线的颜色
                            color: '#cdd3ee'
                        }
                    },
                    // 坐标轴在图表区域中的分隔线
                    splitLine: {
                        show: false // 是否显示分隔线。默认数值轴显示
                    },
                    // 坐标轴刻度标签
                    axisLabel: {
                        show: false, // 是否显示刻度标签 默认显示
                        fontSize: 16, // 文字的字体大小
                        color: '#cdd3ee', // 刻度标签文字的颜色
                        // 使用字符串模板，模板变量为刻度默认标签 {value}
                        formatter: '{value}'
                    }
                    // 类目数据，在类目轴（type: 'category'）中有效
                    //data: ['北京']
                },
                series:optionVal3
            };
            userBarChart3.setOption(option);

            //图形宽度随屏幕宽度改变而改变
            window.addEventListener("resize", () => { this.userBarChart1.resize();  this.userBarChart2.resize();  this.userBarChart3.resize();})


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
                    data:['23年15周','23年16周', '23年17周', '23年18周', '23年19周', '23年20周','23年21周'],
                    axisTick: false,
                    boundaryGap: false
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
                /*grid: {
                    left: '0%',   //距左边边框的距离
                    right: '0%',  //距右边边框的距离
                    bottom: '0',//距下面边框的距离
                    top: '30',    //距上面边框的距离
                    containLabel: true
                },*/
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
