import Sprite from "../base/sprite";

// 玩家相关常量设置
const PLAYER_IMG_SRC = 'images/dream-rabit-pure.png'
const PLAYER_WIDTH = 80
const PLAYER_HEIGHT = 80

export default class Dreamer extends Sprite {
  constructor() {
    super(PLAYER_IMG_SRC, PLAYER_WIDTH, PLAYER_HEIGHT);

    this.x = 20;
    this.y = 50;
  }
}