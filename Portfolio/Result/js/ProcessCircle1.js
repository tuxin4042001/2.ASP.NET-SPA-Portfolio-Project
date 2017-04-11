var canvas1 = document.getElementById("canvas1"),
  ctx1 = canvas1.getContext("2d"),
  percent1 = 75.0, // 最终百分比
  circleX1 = canvas1.width / 2, // 中心x坐标
  circleY1 = canvas1.height / 2, // 中心y坐标
  radius1 = 100, // 圆环半径
  lineWidth2 = 20, // 圆形线条的宽度
  fontSize2 = 50; // 字体大小
// 画圆
function circle1(cx1, cy1, r1) {
    ctx1.beginPath();
    ctx1.moveTo(cx1 + r1, cy1);
    ctx1.lineWidth2 = lineWidth2;
    ctx1.strokeStyle = '#eee';
    ctx1.arc(cx1, cy1, r1, 0, Math.PI * 2);
    ctx1.closePath();
    ctx1.stroke();
}

function sector1(cx1, cy1, r1, startAngle, endAngle, anti) {
    ctx1.beginPath();
    ctx1.moveTo(cx1, cy1 + r1); // 从圆形底部开始画
    ctx1.lineWidth2 = lineWidth2;
    // 渐变色 - 可自定义
    var fontSize1 = ctx1.createLinearGradient(
        circleX1, circleY1 - radius1 - lineWidth2, circleX1, circleY1 + radius1 + lineWidth2
    );
    fontSize1.addColorStop(0.0, '#ec847a');
    fontSize1.addColorStop(0.5, '#9bc4eb');
    fontSize1.addColorStop(1.0, '#eccd23');
    ctx1.strokeStyle = fontSize1;
    // 圆弧两端的样式
    ctx1.lineCap = 'round';
    // 圆弧
    ctx1.arc(
        cx1, cy1, r1,
        startAngle * (Math.PI / 180.0) + (Math.PI / 2),
        endAngle * (Math.PI / 180.0) + (Math.PI / 2),
        anti
    );
    ctx1.stroke();
}

function loading1() {
    if (process1 >= percent1) {
        clearInterval(circleLoading);
    }
    // 清除canvas内容
    ctx1.clearRect(0, 0, circleX1 * 2, circleY1 * 2);
    // 中间的字
    ctx1.font = fontSize2 + 'px April';
    ctx1.textAlign = 'center';
    ctx1.textBaseline = 'middle';
    ctx1.fillStyle = '#999';
    ctx1.fillText(parseFloat(process1).toFixed(0) + '%', circleX1, circleY1);
    // 圆形
    circle(circleX1, circleY1, radius1);
    // 圆弧
    sector(circleX1, circleY1, radius1, 0, process1 / 100 * 360);
    // 控制结束时动画的速度
    if (process1 / percent1 > 0.90) {
        process1 += 0.30;
    } else if (process1 / percent1 > 0.80) {
        process1 += 0.55;
    } else if (process1 / percent1 > 0.70) {
        process1 += 0.75;
    } else {
        process1 += 1.0;
    }
}
var process1 = 0.0; // 进度
var circleLoading1 = window.setInterval(function () {
    loading1();
}, 20);

