define(['jquery', 'bootstrap', 'backend', 'table', 'form', 'template', 'echarts', 'echarts-theme'], function ($, undefined, Backend, Table, Form,Template, Echarts) {



    var Controller = {
        index:function (){

            var barchart1 = Echarts.init($('#bar-chart1')[0]);
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
            barchart1.setOption(option);


            var barchart2 = Echarts.init($('#bar-chart2')[0]);
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
            barchart2.setOption(option);


            var barchart3 = Echarts.init($('#bar-chart3')[0]);
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
            barchart3.setOption(option);


            /**折线图*/
            var linechart1 = Echarts.init($('#line-chart1')[0]);
            var option = {
                title: {
                    text: '交易金额',
                    show:false,
                    left:40,
                    textStyle:{
                        color:'#333',
                        fontStyle : 'normal',
                        fontWeight:'normal',
                        fontSize:15,
                        width:30,
                        height:30
                    }
                },
                legend:{
                    bottom:10,
                    left: 'center',
                    orient: 'horizontal',
                    lineStyle:{
                        type:'solid'
                    },
                    icon:'line'
                    // icon:['roundRect', 'triangle']
                },
                tooltip:{
                    trigger: 'axis',  // axis   item   none三个值
                },
                xAxis: {
                    type: 'category',
                    data:['23年15周','23年16周', '23年17周', '23年18周', '23年19周', '23年20周','23年21周'],
                    axisLine: {
                        lineStyle: {
                            color: '#adafaf', //x轴的颜色
                        }
                    },
                    axisTick: false //是否显示刻度
                },
                yAxis: {
                    type:'value',
                    splitLine: {
                        show: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#adafaf', //y轴的颜色
                        },
                    },
                    /*axisLabel: {
                        textStyle: { fontSize: '80%', color: '#02afff' },
                    },*/
                   /* axisLine: {
                        show: false
                    },*/
                    axisTick: false //是否显示刻度
                },
                series: [
                    {
                        type: 'line',
                        name: '会员',
                        data: [80,120,200,300,150,120,110],
                        symbol: 'circle',//折线点设置为实心点
                        symbolSize: 2,   //折线点的大小
                        itemStyle: {
                            normal: {
                                color: "#e33f4d",//折线点的颜色
                                lineStyle: {
                                    color: "#e33f4d"//折线的颜色
                                }
                            }
                        }
                    },
                    {
                        type: 'line',
                        name: '非会员',
                        data: [100,140,230,340,170,150,130],
                        symbol: 'circle',//折线点设置为实心点
                        symbolSize: 0,   //折线点的大小
                        itemStyle: {
                            normal: {
                                color: "#09b2fc",//折线点的颜色
                                lineStyle: {
                                    color: "#09b2fc"//折线的颜色
                                }
                            }
                        }
                    }
                ]
            };
            linechart1.setOption(option);
            /**折线图*/
            var linechart2 = Echarts.init($('#line-chart2')[0]);
            var option = {
               /* title: {
                    text: '周新增用户趋势'
                },*/
                legend:{
                    bottom:10,
                    left: 'center',
                    orient: 'horizontal',
                    lineStyle:{
                        type:'solid'
                    },
                    icon:'line'
                    // icon:['roundRect', 'triangle']
                },
                tooltip:{
                    trigger: 'axis',  // axis   item   none三个值
                },
                xAxis: {
                    type: 'category',
                    data:['23年15周','23年16周', '23年17周', '23年18周', '23年19周', '23年20周','23年21周'],
                    axisLine: {
                        lineStyle: {
                            color: '#adafaf', //x轴的颜色
                        }
                    },
                    axisTick: false,
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
                    axisTick: false,
                    axisLine: {
                        lineStyle: {
                            color: '#adafaf', //x轴的颜色
                        }
                    }
                },
                series: [
                    {
                        name:'会员',
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
                    },
                    {
                        name:'非会员',
                        type: 'line',
                        data: [100,160,280,320,180,130,110],
                        symbol: 'circle',//折线点设置为实心点
                        symbolSize: 2,   //折线点的大小
                        itemStyle: {
                            normal: {
                                color: "#c40aee",//折线点的颜色
                                lineStyle: {
                                    color: "#c40aee"//折线的颜色
                                }
                            }
                        }
                    }
                ]
            };
            linechart2.setOption(option);

            /**折线图*/
            var linechart3 = Echarts.init($('#line-chart3')[0]);
            var option = {
               /* title: {
                    text: '周新增用户趋势'
                },*/
                legend:{
                    bottom:10,
                    left: 'center',
                    orient: 'horizontal',
                    lineStyle:{
                        type:'solid'
                    },
                    icon:'line'
                    // icon:['roundRect', 'triangle']
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
                        name:'会员',
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
                    },
                    {
                        name:'非会员',
                        type: 'line',
                        data: [100,160,280,320,180,130,110],
                        symbol: 'circle',//折线点设置为实心点
                        symbolSize: 2,   //折线点的大小
                        itemStyle: {
                            normal: {
                                color: "#c40aee",//折线点的颜色
                                lineStyle: {
                                    color: "#c40aee"//折线的颜色
                                }
                            }
                        }
                    }
                ]
            };
            linechart3.setOption(option);

            /**单笔交易金额分布*/
            var barchart4 = Echarts.init($('#bar-chart4')[0]);
            var data =[80,1];
            var total = 81;
            var option = {
               /* title: {
                    text: '周新增用户趋势'
                },*/
                left:120,
                tooltip:{
                    trigger: 'axis',  // axis   item   none三个值
                },
                xAxis: {
                    type:'value',
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: false,
                },
                yAxis: {
                    type: 'category',
                    data:['0-10元','10-20元','20-30元', '30-40元', '40-50元', '50-60元', '60-70元','70-80元','80-90元','90-100元','100元以上'],
                    splitLine: {
                        show: false
                    },
                    axisTick: false,
                },
                series: [
                    {
                        type: 'bar',
                        barWidth:10,
                        data: data,
                        label :{
                            normal: {
                                show: true,
                                position: 'right',
                                formatter:function (arg){
                                    var pre = arg.data/total*100;
                                    return arg.data+'\u0020\u0020 '+ pre.toFixed(2) +'%';
                                },
                            }
                        },
                        itemStyle : {
                            barBorderRadius: [0, 10, 10, 0] // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
                        }
                    }
                ]
            };
            barchart4.setOption(option);

            /**折线图*/
            var linechart5 = Echarts.init($('#line-chart5')[0]);
            var option = {
               /* title: {
                    text: '周新增用户趋势'
                },*/
                legend:{
                    bottom:10,
                    left: 'center',
                    orient: 'horizontal',
                    lineStyle:{
                        type:'solid'
                    },
                    icon:'line'
                    // icon:['roundRect', 'triangle']
                },
                tooltip:{
                    trigger: 'none',  // axis   item   none三个值
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
                        name:'会员',
                        type: 'line',
                        data: [80,120,200,300,150,120,110],
                        showSymbol:false,
                        /*symbol: 'circle',//折线点设置为实心点
                        symbolSize: 0,   //折线点的大小*/
                        itemStyle: {
                            normal: {
                                color: "#2fc25b",//折线点的颜色
                                lineStyle: {
                                    color: "#2fc25b"//折线的颜色
                                }
                            }
                        }
                    },
                    {
                        name:'非会员',
                        type: 'line',
                        data: [100,135,256,354,170,145,124],
                        showSymbol:false,
                       /* symbol: 'circle',//折线点设置为实心点
                        symbolSize: 2,   //折线点的大小*/
                        itemStyle: {
                            normal: {
                                color: "#0dc0f6",//折线点的颜色
                                lineStyle: {
                                    color: "#0dc0f6"//折线的颜色
                                }
                            }
                        }
                    }
                ]
            };
            linechart5.setOption(option);

        }
    };
    return Controller;

});
