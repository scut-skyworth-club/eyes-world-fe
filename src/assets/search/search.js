var province_list = [{
    province: "北京",
    initial: "bj",
    init: "B",
    initFlag: true
}, {
    province: "上海",
    initial: "sh",
    init: "S",
    initFlag: true
}, {
    province: "天津",
    initial: "tj",
    init: "T",
    initFlag: true
}, {
    province: "重庆",
    initial: "cq",
    init: "C",
    initFlag: true
}, {
    province: "香港",
    initial: "xg",
    init: "X",
    initFlag: true
}, {
    province: "澳门",
    initial: "am",
    init: "A",
    initFlag: true
}, {
    province: "河北",
    initial: "hb",
    init: "H",
    initFlag: true
}, {
    province: "山西",
    initial: "sx",
    init: "S",
    initFlag: true
}, {
    province: "辽宁",
    initial: "ln",
    init: "L",
    initFlag: true
}, {
    province: "吉林",
    initial: "jl",
    init: "J",
    initFlag: true
}, {
    province: "黑龙江",
    initial: "hlj",
    init: "H",
    initFlag: true
}, {
    province: "江苏",
    initial: "js",
    init: "J",
    initFlag: true
}, {
    province: "浙江",
    initial: "zj",
    init: "Z",
    initFlag: true
}, {
    province: "安徽",
    initial: "ah",
    init: "A",
    initFlag: true
}, {
    province: "福建",
    initial: "fj",
    init: "F",
    initFlag: true
}, {
    province: "江西",
    initial: "jx",
    init: "J",
    initFlag: true
}, {
    province: "山东",
    initial: "sd",
    init: "S",
    initFlag: true
}, {
    province: "河南",
    initial: "hn",
    init: "H",
    initFlag: true
}, {
    province: "湖北",
    initial: "hb",
    init: "H",
    initFlag: true
}, {
    province: "湖南",
    initial: "hn",
    init: "H",
    initFlag: true
}, {
    province: "广东",
    initial: "gd",
    init: "G",
    initFlag: true
}, {
    province: "海南",
    initial: "hn",
    init: "H",
    initFlag: true
}, {
    province: "四川",
    initial: "sc",
    init: "S",
    initFlag: true
}, {
    province: "贵州",
    initial: "gz",
    init: "G",
    initFlag: true
}, {
    province: "云南",
    initial: "yn",
    init: "Y",
    initFlag: true
}, {
    province: "陕西",
    initial: "sx",
    init: "S",
    initFlag: true
}, {
    province: "甘肃",
    initial: "gs",
    init: "G",
    initFlag: true
}, {
    province: "青海",
    initial: "qh",
    init: "Q",
    initFlag: true
}, {
    province: "台湾",
    initial: "tw",
    init: "T",
    initFlag: true
}, {
    province: "内蒙古",
    initial: "nmg",
    init: "N",
    initFlag: true
}, {
    province: "广西",
    initial: "gx",
    init: "G",
    initFlag: true
}, {
    province: "西藏",
    initial: "xz",
    init: "X",
    initFlag: true
}, {
    province: "宁夏",
    initial: "nx",
    init: "N",
    initFlag: true
}, {
    province: "新疆",
    initial: "xj",
    init: "X",
    initFlag: true
}];

//北京
var bjCity_list = [];

//上海
var shCity_list = [];

//天津
var tjCity_list = [];

//重庆
var cqCity_list = [];

//香港
var xgCity_list = [];

//澳门
var amCity_list = [];


//河北
var hebCity_list = [{
    city: "石家庄",
    initial: "sjz"
}, {
    city: "唐山",
    initial: "ts"
}, {
    city: "邯郸",
    initial: "hd"
}, {
    city: "秦皇岛",
    initial: "qhd"
}, {
    city: "保定",
    initial: "bd"
}, {
    city: "张家口",
    initial: "zjk"
}, {
    city: "承德",
    initial: "cd"
}, {
    city: "廊坊",
    initial: "lf"
}, {
    city: "沧州",
    initial: "cz"
}, {
    city: "衡水",
    initial: "hs"
}, {
    city: "邢台",
    initial: "xt"
}];

//山西
var shanCity_list = [{
    city: "太原",
    initial: "ty"
}, {
    city: "大同",
    initial: "dt"
}, {
    city: "阳泉",
    initial: "yq"
}, {
    city: "长治",
    initial: "cz"
}, {
    city: "晋城",
    initial: "jc"
}, {
    city: "朔州",
    initial: "sz"
}, {
    city: "忻州",
    initial: "xz"
}, {
    city: "晋中",
    initial: "jz"
}, {
    city: "临汾",
    initial: "lf"
}, {
    city: "吕粱",
    initial: "ll"
}, {
    city: "运城",
    initial: "yc"
}];

//辽宁
var lnCity_list = [{
    city: "沈阳",
    initial: "sy"
}, {
    city: "大连",
    initial: "dl"
}, {
    city: "鞍山",
    initial: "as"
}, {
    city: "抚顺",
    initial: "fs"
}, {
    city: "本溪",
    initial: "bx"
}, {
    city: "丹东",
    initial: "dd"
}, {
    city: "锦州 ",
    initial: "jz"
}, {
    city: "葫芦岛",
    initial: "hld"
}, {
    city: "营口",
    initial: "yk"
}, {
    city: "盘锦",
    initial: "pj"
}, {
    city: "阜新",
    initial: "fx"
}, {
    city: "辽阳",
    initial: "ly"
}, {
    city: "铁岭",
    initial: "tl"
}, {
    city: "朝阳",
    initial: "cy"
}];

//吉林
var jlCity_list = [{
    city: "长春",
    initial: "cc"
}, {
    city: "吉林",
    initial: "jl"
}, {
    city: "四平",
    initial: "sp"
}, {
    city: "辽源",
    initial: "ly"
}, {
    city: "通化",
    initial: "th"
}, {
    city: "白山",
    initial: "bs"
}, {
    city: "松原",
    initial: "sy"
}, {
    city: "白城",
    initial: "bc"
}, {
    city: "延边自治州",
    initial: "yb"
}];

//黑龙江
var hljCity_list = [{
    city: "哈尔滨",
    initial: "heb"
}, {
    city: "齐齐哈尔",
    initial: "qqhe"
}, {
    city: "鹤岗",
    initial: "hg"
}, {
    city: "双鸭山",
    initial: "sys"
}, {
    city: "鸡西",
    initial: "jx"
}, {
    city: "大庆",
    initial: "dq"
}, {
    city: "伊春",
    initial: "yc"
}, {
    city: "牡丹江",
    initial: "mdj"
}, {
    city: "佳木斯",
    initial: "jms"
}, {
    city: "七台河",
    initial: "qth"
}, {
    city: "黑河",
    initial: "hh"
}, {
    city: "绥化",
    initial: "sh"
}, {
    city: "大兴安岭",
    initial: "dqal"
}];

//江苏
var jsCity_list = [{
    city: "南京",
    initial: "nj"
}, {
    city: "无锡",
    initial: "wx"
}, {
    city: "徐州",
    initial: "xz"
}, {
    city: "常州",
    initial: "cz"
}, {
    city: "苏州",
    initial: ""
}, {
    city: "镇江",
    initial: "zj"
}, {
    city: "南通",
    initial: "nt"
}, {
    city: "扬州",
    initial: "yz"
}, {
    city: "泰州",
    initial: "tz"
}, {
    city: "盐城",
    initial: "yc"
}, {
    city: "淮安",
    initial: "ha"
}, {
    city: "连云港",
    initial: "lyg"
}, {
    city: "宿迁",
    initial: "sq"
}];

//浙江
var zjCity_list = [{
    city: "杭州",
    initial: "hz"
}, {
    city: "嘉兴",
    initial: "jx"
}, {
    city: "湖州",
    initial: "hz"
}, {
    city: "绍兴",
    initial: "sx"
}, {
    city: "宁波",
    initial: "nb"
}, {
    city: "台州",
    initial: "tz"
}, {
    city: "温州",
    initial: "wz"
}, {
    city: "金华",
    initial: "jh"
}, {
    city: "衢州",
    initial: "qz"
}, {
    city: "丽水",
    initial: "ls"
}, {
    city: "舟山",
    initial: "zs"
}];

//安徽
var ahCity_list = [{
    city: "合肥",
    initial: "hf"
}, {
    city: "芜湖",
    initial: "wh"
}, {
    city: "亳州",
    initial: "hz"
}, {
    city: "淮北",
    initial: "hb"
}, {
    city: "宿州",
    initial: "sz"
}, {
    city: "阜阳",
    initial: "fy"
}, {
    city: "蚌埠",
    initial: "bb"
}, {
    city: "淮南",
    initial: "hn"
}, {
    city: "滁州",
    initial: "cz"
}, {
    city: "六安",
    initial: "la"
}, {
    city: "马鞍山",
    initial: "mas"
}, {
    city: "安庆",
    initial: "aq"
}, {
    city: "池州",
    initial: "cz"
}, {
    city: "铜陵",
    initial: "tl"
}, {
    city: "宣城",
    initial: "xc"
}, {
    city: "黄山",
    initial: "hs"
}];

//福建
var fjCity_list = [{
    city: "福州",
    initial: "fz"
}, {
    city: "厦门",
    initial: "xm"
}, {
    city: "泉州",
    initial: "qz"
}, {
    city: "莆田",
    initial: "pt"
}, {
    city: "三明",
    initial: "sm"
}, {
    city: "漳州",
    initial: "zz"
}, {
    city: "南平",
    initial: "np"
}, {
    city: "龙岩",
    initial: "ly"
}, {
    city: "宁德",
    initial: "nd"
}];

//江西
var jxCity_list = [{
    city: "南昌",
    initial: "nc"
}, {
    city: "九江",
    initial: "jj"
}, {
    city: "景德镇",
    initial: "jdz"
}, {
    city: "萍乡",
    initial: "px"
}, {
    city: "新余",
    initial: "xy"
}, {
    city: "鹰潭",
    initial: "yt"
}, {
    city: "赣州",
    initial: "gz"
}, {
    city: "宜春",
    initial: "yc"
}, {
    city: "上饶",
    initial: "sr"
}, {
    city: "吉安",
    initial: "ja"
}, {
    city: "抚州",
    initial: "fz"
}];

//山东
var sdCity_list = [{
    city: "济南",
    initial: "jn"
}, {
    city: "菏泽",
    initial: "hz"
}, {
    city: "青岛",
    initial: "qd"
}, {
    city: "淄博",
    initial: "zb"
}, {
    city: "枣庄",
    initial: "zz"
}, {
    city: "东营",
    initial: "dy"
}, {
    city: "烟台",
    initial: "yt"
}, {
    city: "潍坊",
    initial: "wf"
}, {
    city: "济宁",
    initial: "jn"
}, {
    city: "泰安",
    initial: "ta"
}, {
    city: "威海",
    initial: "wh"
}, {
    city: "日照",
    initial: "rz"
}, {
    city: "滨州",
    initial: "bz"
}, {
    city: "德州",
    initial: "dz"
}, {
    city: "聊城",
    initial: ""
}, {
    city: "临沂",
    initial: "ly"
}, {
    city: "莱芜",
    initial: "lw"
}];

//河南
var henCity_list = [{
    city: "郑州",
    initial: "zz"
}, {
    city: "洛阳",
    initial: "ly"
}, {
    city: "商丘",
    initial: "sq"
}, {
    city: "安阳",
    initial: "ay"
}, {
    city: "南阳",
    initial: "ny"
}, {
    city: "开封",
    initial: "kf"
}, {
    city: "平顶山",
    initial: "pds"
}, {
    city: "焦作",
    initial: "jz"
}, {
    city: "新乡",
    initial: "xx"
}, {
    city: "鹤壁",
    initial: "hb"
}, {
    city: "濮阳",
    initial: "py"
}, {
    city: "许昌",
    initial: "xc"
}, {
    city: "漯河",
    initial: "th"
}, {
    city: "三门峡",
    initial: "smx"
}, {
    city: "信阳",
    initial: "xy"
}, {
    city: "周口",
    initial: "zk"
}, {
    city: "驻马店",
    initial: "zmd"
}, {
    city: "济源",
    initial: "jy"
}];

//湖北
var hubCity_list = [{
    city: "武汉",
    initial: "wh"
}, {
    city: "宜昌",
    initial: "yc"
}, {
    city: "黄石",
    initial: "hs"
}, {
    city: "十堰",
    initial: "sy"
}, {
    city: "荆州",
    initial: "jz"
}, {
    city: "襄樊",
    initial: "xf"
}, {
    city: "鄂州",
    initial: "ez"
}, {
    city: "荆门",
    initial: "jm"
}, {
    city: "孝感",
    initial: "xg"
}, {
    city: "黄冈",
    initial: "hg"
}, {
    city: "咸宁",
    initial: "xn"
}, {
    city: "随州",
    initial: "sz"
}, {
    city: "仙桃",
    initial: "xt"
}, {
    city: "天门",
    initial: "tm"
}, {
    city: "潜江",
    initial: "qj"
}, {
    city: "恩施自治州",
    initial: "es"
}, {
    city: "神农架林区",
    initial: "sn"
}];

//湖南
var hunCity_list = [{
    city: "长沙",
    initial: "cs"
}, {
    city: "株洲",
    initial: "zz"
}, {
    city: "湘潭",
    initial: ""
}, {
    city: "衡阳",
    initial: "hy"
}, {
    city: "邵阳",
    initial: "sy"
}, {
    city: "岳阳",
    initial: "yy"
}, {
    city: "常德",
    initial: "cd"
}, {
    city: "张家界",
    initial: "zjj"
}, {
    city: "益阳",
    initial: "yy"
}, {
    city: "郴州",
    initial: "bz"
}, {
    city: "永州",
    initial: "yz"
}, {
    city: "怀化",
    initial: "hh"
}, {
    city: "娄底",
    initial: "ld"
}, {
    city: "湘西自治州",
    initial: "xx"
}];

//广东
var gdCity_list = [{
    city: "广州",
    initial: "gz"
}, {
    city: "深圳",
    initial: "sz"
}, {
    city: "珠海",
    initial: "zh"
}, {
    city: "佛山",
    initial: "fs"
}, {
    city: "东莞",
    initial: "dg"
}, {
    city: "中山",
    initial: "zs"
}, {
    city: "汕头",
    initial: "st"
}, {
    city: "韶关",
    initial: "sg"
}, {
    city: "江门",
    initial: "jm"
}, {
    city: "茂名",
    initial: "mm"
}, {
    city: "湛江",
    initial: "zj"
}, {
    city: "肇庆",
    initial: "zq"
}, {
    city: "梅州",
    initial: "mz"
}, {
    city: "汕尾",
    initial: "sw"
}, {
    city: "河源",
    initial: "hy"
}, {
    city: "阳江",
    initial: "yj"
}, {
    city: "清远",
    initial: "qy"
}, {
    city: "潮州",
    initial: "cz"
}, {
    city: "揭阳",
    initial: "jy"
}, {
    city: "云浮",
    initial: "yf"
}, {
    city: "惠州",
    initial: "hz"
}, {
    city: "东沙群岛",
    initial: "ds"
}];

//海南
var hainCity_list = [{
    city: "海口",
    initial: "hk"
}, {
    city: "三亚",
    initial: "sy"
}, {
    city: "三沙",
    initial: "ss"
}, {
    city: "五指山",
    initial: "wzs"
}, {
    city: "琼海",
    initial: "qh"
}, {
    city: "儋州",
    initial: "dz"
}, {
    city: "文昌",
    initial: "wc"
}, {
    city: "万宁",
    initial: "wn"
}, {
    city: "东方",
    initial: "df"
}, {
    city: "澄迈县",
    initial: "cm"
}, {
    city: "定安县",
    initial: "da"
}, {
    city: "屯昌县",
    initial: "tc"
}, {
    city: "临高县",
    initial: "lg"
}, {
    city: "白沙自治县",
    initial: "bs"
}, {
    city: "昌江自治县",
    initial: "cj"
}, {
    city: "乐东自治县",
    initial: "ld"
}, {
    city: "陵水自治县",
    initial: "ls"
}, {
    city: "保亭自治县",
    initial: "bt"
}, {
    city: "琼中自治县",
    initial: "qz"
}];

//四川
var scCity_list = [{
    city: "成都",
    initial: "cd"
}, {
    city: "自贡",
    initial: "zg"
}, {
    city: "攀枝花",
    initial: "pzh"
}, {
    city: "泸州",
    initial: "lz"
}, {
    city: "德阳",
    initial: "dy"
}, {
    city: "绵阳",
    initial: "my"
}, {
    city: "广元",
    initial: "gy"
}, {
    city: "遂宁",
    initial: "sn"
}, {
    city: "内江",
    initial: "nj"
}, {
    city: "乐山",
    initial: "ls"
}, {
    city: "南充",
    initial: "nc"
}, {
    city: "宜宾",
    initial: "yb"
}, {
    city: "广安",
    initial: "ga"
}, {
    city: "达州",
    initial: "dz"
}, {
    city: "眉山",
    initial: "ms"
}, {
    city: "雅安",
    initial: "ya"
}, {
    city: "巴中",
    initial: "bz"
}, {
    city: "资阳",
    initial: "zy"
}, {
    city: "阿坝自治州",
    initial: "ab"
}, {
    city: "甘孜自治州",
    initial: "gz"
}, {
    city: "凉山自治州",
    initial: "ls"
}];

//贵州
var gzCity_list = [{
    city: "贵阳",
    initial: "gy"
}, {
    city: "六盘水",
    initial: "lps"
}, {
    city: "遵义",
    initial: "zy"
}, {
    city: "安顺",
    initial: "as"
}, {
    city: "毕节",
    initial: "bj"
}, {
    city: "铜仁",
    initial: "tr"
}, {
    city: "黔西南自治州",
    initial: "qxn"
}, {
    city: "黔东南自治州",
    initial: "qdn"
}, {
    city: "黔南自治州",
    initial: "qn"
}];

//云南
var ynCity_list = [{
    city: "昆明",
    initial: "km"
}, {
    city: "曲靖",
    initial: "qj"
}, {
    city: "玉溪",
    initial: "yx"
}, {
    city: "保山",
    initial: "bs"
}, {
    city: "昭通",
    initial: "zt"
}, {
    city: "丽江",
    initial: "lj"
}, {
    city: "普洱",
    initial: "pe"
}, {
    city: "临沧",
    initial: "lc"
}, {
    city: "文山自治州",
    initial: "ws"
}, {
    city: "红河自治州",
    initial: "hh"
}, {
    city: "西双版纳自治州",
    initial: "xsbn"
}, {
    city: "楚雄自治州",
    initial: "cx"
}, {
    city: "大理自治州",
    initial: "dl"
}, {
    city: "德宏自治州",
    initial: "dh"
}, {
    city: "怒江自治州",
    initial: "nj"
}, {
    city: "迪庆自治州",
    initial: "dq"
}];

//陕西
var xiCity_list = [{
    city: "西安",
    initial: "xa"
}, {
    city: "铜川",
    initial: "tc"
}, {
    city: "宝鸡",
    initial: "bj"
}, {
    city: "咸阳",
    initial: "xy"
}, {
    city: "渭南",
    initial: "wn"
}, {
    city: "延安",
    initial: "ya"
}, {
    city: "汉中",
    initial: "hz"
}, {
    city: "榆林",
    initial: "yl"
}, {
    city: "安康",
    initial: "ak"
}, {
    city: "商洛",
    initial: "sl"
}];

//甘肃
var gsCity_list = [{
    city: "兰州",
    initial: "lz"
}, {
    city: "庆阳",
    initial: "qy"
}, {
    city: "天水",
    initial: "ts"
}, {
    city: "酒泉",
    initial: "jq"
}, {
    city: "武威",
    initial: "ww"
}, {
    city: "白银",
    initial: "by"
}, {
    city: "张掖",
    initial: "zy"
}, {
    city: "平凉",
    initial: "pl"
}, {
    city: "陇南",
    initial: "ln"
}, {
    city: "定西",
    initial: "dx"
}, {
    city: "金昌",
    initial: "jc"
}, {
    city: "嘉峪关",
    initial: "jyg"
}, {
    city: "临夏自治州",
    initial: "lx"
}, {
    city: "甘南自治州",
    initial: "gn"
}];

//青海
var qhCity_list = [{
    city: "西宁",
    initial: "xn"
}, {
    city: "海东",
    initial: "hd"
}, {
    city: "海北自治区",
    initial: "hb"
}, {
    city: "海南自治区",
    initial: "hn"
}, {
    city: "黄南自治区",
    initial: "hn"
}, {
    city: "果洛自治区",
    initial: "gl"
}, {
    city: "玉树自治区",
    initial: "ys"
}, {
    city: "海西自治区",
    initial: "hx"
}];

//台湾
var twCity_list = [{
    city: "台北",
    initial: "tb"
}, {
    city: "新北",
    initial: "xb"
}, {
    city: "桃园",
    initial: "ty"
}, {
    city: "台中",
    initial: "tz"
}, {
    city: "台南",
    initial: "tn"
}, {
    city: "高雄",
    initial: "gx"
}, {
    city: "基隆",
    initial: "jl"
}, {
    city: " 新竹",
    initial: "xz"
}, {
    city: " 嘉义",
    initial: "jy"
}];

//内蒙古
var nmgCity_list = [{
    city: "呼和浩特",
    initial: "hhht"
}, {
    city: "包头",
    initial: "bt"
}, {
    city: "乌海",
    initial: "wh"
}, {
    city: "赤峰",
    initial: "cf"
}, {
    city: "通辽",
    initial: "tl"
}, {
    city: "鄂尔多斯",
    initial: "erds"
}, {
    city: "呼伦贝尔",
    initial: "hlbe"
}, {
    city: "巴彦淖尔",
    initial: "byne"
}, {
    city: "乌兰察布",
    initial: "wlcb"
}, {
    city: "兴安盟",
    initial: "xam"
}, {
    city: "锡林郭勒盟",
    initial: "xlglm"
}, {
    city: "阿拉善盟",
    initial: "alsm"
}];

//广西
var gxCity_list = [{
    city: "南宁",
    initial: "nn"
}, {
    city: "柳州",
    initial: "lz"
}, {
    city: "桂林",
    initial: "gl"
}, {
    city: "梧州",
    initial: "wz"
}, {
    city: "北海",
    initial: "bh"
}, {
    city: "防城港",
    initial: "fcg"
}, {
    city: "钦州",
    initial: "qz"
}, {
    city: "贵港",
    initial: "gg"
}, {
    city: "玉林",
    initial: "yl"
}, {
    city: "百色",
    initial: "bs"
}, {
    city: "贺州",
    initial: "hz"
}, {
    city: "河池",
    initial: "hc"
}, {
    city: "来宾",
    initial: "lb"
}, {
    city: "崇左",
    initial: "cz"
}];

//西藏
var xzCity_list = [{
    city: "拉萨",
    initial: "ls"
}, {
    city: "日喀则",
    initial: "rkz"
}, {
    city: "昌都",
    initial: "cd"
}, {
    city: "林芝",
    initial: "lz"
}, {
    city: "山南",
    initial: "sn"
}, {
    city: "那曲地区",
    initial: "nq"
}, {
    city: "阿里地区",
    initial: "al"
}];

//宁夏
var nxCity_list = [{
    city: "银川",
    initial: "yc"
}, {
    city: "石嘴山",
    initial: "szs"
}, {
    city: "吴忠",
    initial: "wz"
}, {
    city: "固原",
    initial: "gy"
}, {
    city: "中卫",
    initial: "zw"
}];

//新疆
var xjCity_list = [{
    city: "乌鲁木齐",
    initial: "wlmq"
}, {
    city: "克拉玛依",
    initial: "klmy"
}, {
    city: "图木舒克",
    initial: "tmsk"
}, {
    city: "可克达拉",
    initial: "kkdl"
}, {
    city: "哈密",
    initial: "hm"
}, {
    city: "昆玉",
    initial: "ky"
}, {
    city: "双河",
    initial: "sh"
}, {
    city: "北屯",
    initial: "bt"
}, {
    city: "吐鲁番",
    initial: "tlf"
}, {
    city: "铁门关",
    initial: "tmg"
}, {
    city: "石河子",
    initial: "shz"
}, {
    city: "阿拉尔",
    initial: "ale"
}, {
    city: "五家渠",
    initial: "wjq"
}, {
    city: "昌吉州",
    initial: "cj"
}, {
    city: "伊犁州",
    initial: "yl"
}, {
    city: "博尔塔拉州",
    initial: "betl"
}, {
    city: "巴音郭楞州",
    initial: "bygl"
}, {
    city: "克孜勒苏州",
    initial: "kzls"
}, {
    city: "喀什地区",
    initial: "ks"
}, {
    city: "和田地区",
    initial: "ht"
}, {
    city: "塔城地区",
    initial: "tc"
}, {
    city: "阿克苏地区",
    initial: "aks"
}, {
    city: "阿勒泰地区",
    initial: "alt"
}];

module.exports = [
    province_list,
    bjCity_list,
    shCity_list,
    tjCity_list,
    cqCity_list,
    xgCity_list,
    amCity_list,
    hebCity_list,
    shanCity_list,
    lnCity_list,
    jlCity_list,
    hljCity_list,
    jsCity_list,
    zjCity_list,
    ahCity_list,
    fjCity_list,
    jxCity_list,
    sdCity_list,
    henCity_list,
    hubCity_list,
    hunCity_list,
    gdCity_list,
    hainCity_list,
    scCity_list,
    gzCity_list,
    ynCity_list,
    xiCity_list,
    gsCity_list,
    qhCity_list,
    twCity_list,
    nmgCity_list,
    gxCity_list,
    xzCity_list,
    nxCity_list,
    xjCity_list
]