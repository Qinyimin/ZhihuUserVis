var voteupChart = echarts.init(document.getElementById('voteup'));
//app.title = '坐标轴刻度与标签对齐';

var voteupOption = {
    title : {
        text: '知乎用户获赞数分布情况',
        subtext: '基于31558名用户的数据',
        x:'center'
    },
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['0~100', '100~500', '500~1k', '1k~5k', '5k~1w', '1w~5w', '5w~10w', '10w~20w', '20w~50w', '50w~100w','100w以上'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'获赞数范围的人数：',
            type:'bar',
            barWidth: '60%',
            data:[10787,3255,1732,4788,2328,4975,1640,1131,712,187,55]
        }
    ]
};
voteupChart.setOption(voteupOption);