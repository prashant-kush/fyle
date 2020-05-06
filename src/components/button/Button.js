import React from 'react';

const Button = ({ text, bg, color, border, width }) => {
  const css = {
    backgroundColor: bg,
    border: `2px solid ${border}`,
    borderRadius: `3px`,
    width,
    maxWidth: `300px`,
    height: `90%`,
    minHeight: `30px`,
    maxHeight: `70px`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    alignContent: `center`,
    marginRight: `5%`,
    cursor: `pointer`,
    fontWeight: `700`,
    color,
    fontSize: `0.7em`,
  };
  return (
    <button type="button" style={css}>
      {text}
    </button>
  );
};
export default Button;
