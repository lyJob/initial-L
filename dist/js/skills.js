function jsonpCallback(e){$(".nowTime").html(e.date+" "+e.week),$(".nowTime").next("p").html("更新时间:"+e.update_time),$(".weather-temp").html(e.tem+"℃"),$(".updateTime").html("<span>"+e.wea+" | "+e.win+e.win_speed+" | 湿度："+e.humidity),$(".weather-pollute").html("污染指数："+e.air_pm25),$(".weather-say").html(e.air_tips);var a=function(e){var a="";switch(e){case"阴":a="./img/yin.png";break;case"晴":a="./img/qing.png";break;case"多云":a="./img/yun.png";break;case"小雪":case"中雪":case"大雪":case"阵雪":case"暴雪":a="./img/xue.png";break;case"雷阵雨":a="./img/zhenyu.png";break;case"小雨":case"中雨":case"阵雨":case"大雨":case"暴雨":a="./img/yu.png";break;case"雨夹雪":a="./img/yujiaxue.png";break;case"扬沙":a="./img/shachen.png";break;case"晴转多云":a="./img/yun.png";break;case"雾":a="./img/wu.png";break;default:a="./img/qing.png"}return a}(e.wea);$(".weather-img img").attr("src",a)}$(function(){var e=document.createElement("script");e.type="text/javascript",e.src="https://www.tianqiapi.com/api/?version=v6&cityid=101280601&callback=jsonpCallback",document.getElementsByTagName("head")[0].appendChild(e)});