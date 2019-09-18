require("./styles/default.css");

const htmlToElement = require('./common').htmlToElement;

exports.MAPCoreBiolucidaInterfaceModule = function(parentIn, options)  {

  let _parent = parentIn;
  let _target = undefined;

  const createUi = () => {
    let ui = htmlToElement(require("./snippets/default.html"));
    let iframe_element = ui.getElementsByTagName("iframe")[0];
    iframe_element.setAttribute("src", _target);
    _parent.appendChild(ui);
  };

  const initialise = (options) => {
    _target = options;
    createUi();
  };

  initialise(options);
};
