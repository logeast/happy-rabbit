const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const atlas = new Image()
atlas.src = 'images/Common.png'

const HEART_SOURCE = "images/heart.png";
const HEART_WIDTH = 24;
const HEART_HEIGHT = 24;

const heart = new Image();
heart.src = HEART_SOURCE;
export default class GameInfo {
  renderGameScore(ctx, score) {
    ctx.fillStyle = '#fff'
    ctx.font = '24px Arial';
    ctx.textAlign = "right";

    ctx.fillText(
      score.toLocaleString(),
      screenWidth - 10,
      120
    )
    const textInfo = ctx.measureText(score);
    ctx.drawImage(
      heart,
      screenWidth - 40 - textInfo.width * 1.1, 100,
      HEART_WIDTH, HEART_HEIGHT
    )

  }

  renderGuide(ctx) {

  }
  renderGameOver(ctx, score) {
    ctx.drawImage(atlas, 0, 0, 119, 108, screenWidth / 2 - 150, screenHeight / 2 - 100, 300, 300)

    ctx.fillStyle = '#ffffff'
    ctx.font = '20px Arial'

    ctx.fillText(
      '游戏结束',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 50
    )

    ctx.fillText(
      `得分: ${score}`,
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 130
    )

    ctx.drawImage(
      atlas,
      120, 6, 39, 24,
      screenWidth / 2 - 60,
      screenHeight / 2 - 100 + 180,
      120, 40
    )

    ctx.fillText(
      '重新开始',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 205
    )

    /**
     * 重新开始按钮区域
     * 方便简易判断按钮点击
     */
    this.btnArea = {
      startX: screenWidth / 2 - 40,
      startY: screenHeight / 2 - 100 + 180,
      endX: screenWidth / 2 + 50,
      endY: screenHeight / 2 - 100 + 255
    }
  }
}