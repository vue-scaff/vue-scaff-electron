// Use Slide
import { up, down } from "./slide";

// Out
let out;

// Interval
let interval = 15;

// Opacity Space
let space = 0.075;

// Offset
let offset = 2;

// Interval Runner
function runner(callback) {
  out = setTimeout(() => {
    // Set End
    let end = callback();

    // Recursion
    if (end === undefined) {
      return runner(callback);
    }

    // Stop
    clearTimeout(out);
    end();
  }, interval);
}

// Calculation
function calculate(numeric) {
  return numeric.toFixed(2) - 0;
}

export default {
  show(win, callback = () => {}) {
    runner(() => {
      // Get Runtime Opacity
      let opacity = win.getOpacity();

      // Stop
      if (opacity >= 1) {
        return callback;
      }

      // Slide Down
      down(win, offset);

      // Animate
      win.setOpacity(calculate(opacity + space));
    });
  },
  hide(win, callback = () => {}) {
    runner(() => {
      // Get Runtime Opacity
      let opacity = win.getOpacity();

      // Get Runtime Position
      let position = win.getPosition();

      // Stop
      if (opacity <= 0) {
        return callback;
      }

      // Slide Up
      up(win, offset);

      // Animate
      win.setOpacity(calculate(opacity - space));
    });
  }
};
