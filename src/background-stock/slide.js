module.exports = {
  up(win, offset = 10) {
    let position = win.getPosition();

    let x = position[0]; // - offset;
    let y = position[1] - offset;

    win.setPosition(x, y);
  },

  down(win, offset = 10) {
    let position = win.getPosition();

    let x = position[0];
    let y = position[1] + offset;

    win.setPosition(x, y);
  }
};
