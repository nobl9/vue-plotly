export default {
  Plots: {
    resize: jest.fn()
  },
  plot: jest.fn(),
  newPlot: jest.fn(element => {
    const p = document.createElement("div");
    element.on = jest.fn();
    element.removeAllListeners = jest.fn();
    element.appendChild(p);
    return new Promise(resolve => resolve(element));
  }),
  react: jest.fn(),
  relayout: jest.fn(),
  restyle: jest.fn(),
  update: jest.fn(),
  purge: jest.fn(element => {
    element.removeChild(element.childNodes[0]);
  }),
  addTraces: jest.fn(),
  deleteTraces: jest.fn(),
  moveTraces: jest.fn(),
  extendTraces: jest.fn(),
  prependTraces: jest.fn(),
  toImage: jest.fn(),
  downloadImage: jest.fn()
};
