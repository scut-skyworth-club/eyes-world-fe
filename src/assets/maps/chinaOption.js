export default {
    data() {
        return {
            provinceList: ["河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "北京", "天津", "上海", "重庆", "香港", "澳门", "台湾", ],
            cityList: ["广州市", "深圳市", "珠海市", "汕头市", "韶关市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "梅洲市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市", "惠州市", "梅州市"],
            option: {
                title: {
                    text: '全国分布图',
                    left: 'left'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    top: 'bottom',
                    data: ['企业数']
                },
                visualMap: {
                    min: 0,
                    max: 2500,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    calculable: true,
                    show: false,
                },
                series: [{
                    name: '企业数',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    width: '100%',
                    label: {
                        normal: { show: true },
                        emphasis: { show: true }
                    },
                    data: []
                }, ]
            }
        }
    },
    methods: {
        randomData() {
            return Math.round(Math.random() * 1000);
        },
        //为每个省市虚构数据
        setData() {
            this.provinceList.forEach((item) => {
                this.option.series[0].data.push({ name: item, value: this.randomData() })
            })
            this.cityList.forEach((item) => {
                this.option.series[0].data.push({ name: item, value: this.randomData() })
            })
        }
    },
    ready() {
        this.setData()
    }
}