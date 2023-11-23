function init_life_time() {
    function getAsideLifeTime() {
        /* 当前时间戳 */
        let nowDate = +new Date();
        /* 今天开始时间戳 */
        let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
        /* 今天已经过去的时间 */
        let todayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
        /* 今天已经过去的时间比 */
        let todayPassHoursPercent = (todayPassHours / 24) * 100;
        $('#dayProgress .date-text span').html(parseInt(todayPassHours));
        $('#dayProgress .progress .progress-bar').css('width', parseInt(todayPassHoursPercent) + '%');
        $('#dayProgress .progress .progress-bar').html(parseInt(todayPassHoursPercent) + '%');
        /* 计算今天周几 */
        let weeks = {
            0: 7,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6
        };
        let weekDay = weeks[new Date().getDay()];
        let weekDayPassPercent = (weekDay / 7) * 100;
        $('#weekProgress .date-text span').html(weekDay);
        $('#weekProgress .progress .progress-bar').css('width', parseInt(weekDayPassPercent) + '%');
        $('#weekProgress .progress .progress-bar').html(parseInt(weekDayPassPercent) + '%');
        /* 月 */
        let year = new Date().getFullYear();
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let monthAll = new Date(year, month, 0).getDate();
        let monthPassPercent = (date / monthAll) * 100;
        $('#monthProgress .date-text span').html(date);
        $('#monthProgress .progress .progress-bar').css('width', parseInt(monthPassPercent) + '%');
        $('#monthProgress .progress .progress-bar').html(parseInt(monthPassPercent) + '%');
        /* 年 */
        let yearPass = (month / 12) * 100;
        $('#yearProgress .date-text span').html(month);
        $('#yearProgress .progress .progress-bar').css('width', parseInt(yearPass) + '%');
        $('#yearProgress .progress .progress-bar').html(parseInt(yearPass) + '%');
    }
    getAsideLifeTime();
    setInterval(() => {
        getAsideLifeTime();
    }, 1000);
}
init_life_time()

now = new Date(), hour = now.getHours()
if (hour < 6) {
    var hello = "凌晨了~ 早点休息呀 (๑¯ω¯๑)";
} else if (hour < 9) {
    var hello = "早上好！~新的一天也要加油哦！٩(๑òωó๑)۶";
} else if (hour < 12) {
    var hello = "上午好啊！~今天也要元气满满哦~٩ (๑❛ᴗ❛๑)۶";
} else if (hour < 14) {
    var hello = "中午好~ 忙碌了一个上午的你 该好好放松一下自己啦 (´◒`)";
} else if (hour < 17) {
    var hello = "下午好呀 ~愿你的午后时光一直要充满阳光与活力哦 ( ๑˃̶ ॣꇴ ॣ˂̶)♪⁺";
} else if (hour < 19) {
    var hello = "傍晚好 ~愿温柔与你相伴每一个夜晚 (◍´ಲ`◍)";
} else if (hour < 22) {
    var hello = "晚上好啊~ 今天也辛苦啦 愿你的夜晚充满温馨与宁静 (..＞◡＜..)";
} else {
    var hello = "夜深了~ 别忘了休息照顾自己 (⌒ω⌒)";
}
// 钢铁柔情(不是)
// 希望不要删掉这一页啦
// 你可以在这里写下你想说的话
// 比如说 我今天一天都好幸运啊 看到源代码的你也来沾沾喜气吧
// nice to meet you ~(δωδ)」