var combinedChart = echarts.init(document.getElementById('combined'));
var combinedOption = {
    title : {
        text: '知乎用户回答数、提问数和关注问题数的分布情况',
        //subtext: '基于31558名用户的数据',
        x:'center'
    },

    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['关注问题数', '提问数', '回答数'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [18870, 29111, 23998],
        coordinateSystem: 'polar',
        name: '0~100',
        stack: 'a'
    }, {
        type: 'bar',
        data: [8287, 685, 5912],
        coordinateSystem: 'polar',
        name: '100~500',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2260, 269, 986],
        coordinateSystem: 'polar',
        name: '500~1k',
        stack: 'a'
    },{
        type: 'bar',
        data: [1963, 626, 656],
        coordinateSystem: 'polar',
        name: '1k~5k',
        stack: 'a'
    }, {
        type: 'bar',
        data: [155, 284, 28],
        coordinateSystem: 'polar',
        name: '5k~1w',
        stack: 'a'
    },
        {
            type: 'bar',
            data: [55, 598, 10],
            coordinateSystem: 'polar',
            name: '1w以上',
            stack: 'a'
        },
    ],
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['0~100','100~500','500~1k','1k~5k','5k~1w','1w以上']
    }
};
combinedChart.setOption(combinedOption);