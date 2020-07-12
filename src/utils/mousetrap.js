// Use Mousetrap
import mousetrap from "mousetrap";

// Mousetrap
mousetrap.bind(["command+-", "ctrl+-", "command+=", "ctrl+="], e => {
  return false;
});

// Export
export default mousetrap;
