define(['jquery', 'bootstrap', 'backend', 'table', 'form', 'template', 'echarts', 'echarts-theme'], function ($, undefined, Backend, Table, Form,Template, Echarts) {



    var Controller = {
        index:function (){

            /**折线图*/
            var linechart1 = Echarts.init(document.getElementById('line-chart1'));
            var option = {
                title: {
                    text: '会员规模',
                    left:'60',
                    textStyle:{
                        color:'#333',
                        fontStyle : 'normal',
                        fontWeight:'normal',
                        fontSize:15,
                        width:30,
                        height:30
                    }
                },
            /*    grid: {
                    x: 20, // 左间距
                    y: 0, // 上间距
                    x2: 0, // 右间距
                    y2: 0, // 下间距
                    containLabel: true // grid 区域是否包含坐标轴的刻度标签, 常用于『防止标签溢出』的场景
                },*/
                legend:{
                    bottom:10,
                    left: 120,
                    orient: 'horizontal',
                    lineStyle:{
                        type:'solid'
                    }
                    // icon:['roundRect', 'triangle']
                },
                tooltip:{
                    trigger: 'axis',  // axis   item   none三个值
                },
                xAxis: {
                    //type: 'category',
                    data:['23年15周','23年16周', '23年17周', '23年18周', '23年19周', '23年20周','23年21周']
                },
                yAxis: {
                    type:'value',
                    splitLine: {
                        show: true
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
                        type: 'bar',
                        name:'新增会员',
                        barWidth:10,
                        data: [80,120,200,300,150,120,110],
                        itemStyle:{
                            color:'#2b71f3'
                        }
                    },
                    {
                        type: 'line',
                        name: '累计会员',
                        data: [80,120,200,300,150,120,110],
                        showSymbol: false,
                        symbol: 'circle',//折线点设置为实心点
                        symbolSize: 0,   //折线点的大小
                        itemStyle: {
                            normal: {
                                color: "#2fc25b",//折线点的颜色
                                lineStyle: {
                                    color: "#2fc25b"//折线的颜色
                                }
                            }
                        },
                    }
                ]
            };
            linechart1.setOption(option);

            /**折线图*/
            var barchart1 = Echarts.init(document.getElementById('line-chart2'));
            var option = {
                title: {
                    text: '会员活跃度',
                    left:'60',
                    textStyle:{
                        color:'#333',
                        fontStyle : 'normal',
                        fontWeight:'normal',
                        fontSize:15,
                        width:30,
                        height:30
                    }
                },
                grid:{
                    left:100
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
                   /* axisLabel: {
                        textStyle: { fontSize: '80%', color: '#02afff' },
                    },*/
                    axisLine: {
                        show: false
                    },
                    // axisTick: false
                },
                series: [
                    {
                        type: 'bar',
                        barWidth:10,
                        data: [80,120,200,300,150,120,110],
                        itemStyle:{
                            color:'#2b71f3'
                        }
                    }
                ]
            };
            barchart1.setOption(option);

            /**饼状图*/
            var piechart1 = Echarts.init(document.getElementById('pie-chart1'));
            var option = {
                title: {
                    text: '会员类型分布',
                    left:'60',
                    textStyle:{
                        color:'#333',
                        fontStyle : 'normal',
                        fontWeight:'normal',
                        fontSize:15,
                        width:30,
                        height:30
                    }
                },

                series: [
                    {
                        type: 'pie',
                        color: ['#09e89f',  '#2f06ef', '#f1e569','#06f60a'],
                        avoidLabelOverlap: false,
                        data: [
                            {value:'356.78',name:'黑卡会员'},
                            {value:'51.35',name:'金卡会员'},
                            {value:'116.53',name:'钻石卡会员'},
                            {value:'20.11',name:'银卡会员'},
                        ],
                        radius: ['40%','70%'],
                        label: {
                            show: true,
                            fontSize: '12',
                            color:"#777777",
                            fontWeight: 'bold',
                            formatter:"￥{c}\n{b}"
                        },
                        /*// 文本数据设置
                        emphasis: {
                            label: {
                                position: "center",
                                show: true,
                                textStyle: {
                                    fontSize: "10"
                                }
                            }
                        }*/
                    }
                ]

            };
            piechart1.setOption(option);

            /**折线图*/
            var linechart3 = Echarts.init(document.getElementById('line-chart3'));
            var option = {
                title: {
                    text: '消费频次',
                    left:'60',
                    textStyle:{
                        color:'#333',
                        fontStyle : 'normal',
                        fontWeight:'normal',
                        fontSize:15,
                        width:30,
                        height:30
                    }
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
            linechart3.setOption(option);



        }
    };
    return Controller;

});
