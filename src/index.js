require("./styles/default.css");

const htmlToElement = require('./common').htmlToElement;

exports.MAPCoreBiolucidaModule = function(parentIn, options)  {

  let _parent = parentIn;
  let _interface = undefined;

  const createUi = () => {
    let ui = htmlToElement(require("./snippets/default.html"));
    _parent.appendChild(ui);
  };

  const initialise = (options) => {
    createUi();
  };

  initialise(options);
};
