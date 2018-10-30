// 基于准备好的dom，初始化echarts实例
var answerChart1 = echarts.init(document.getElementById('answer1'));

// 指定图表的配置项和数据
var answerOption1 = {
    title : {
        text: '知乎用户回答数分布情况',
        subtext: '基于31558名用户的数据',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['0~100','101~500','501~1000','1001~5000','5001~10000','10001~50000']
    },
    series : [
        {
            name: '回答数范围：',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:23973, name:'0~100'},
                {value:5906, name:'101~500'},
                {value:985, name:'501~1000'},
                {value:656, name:'1001~5000'},
                {value:28, name:'5001~10000'},
                {value:10, name:'10001~50000'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
answerChart1.setOption(answerOption1);