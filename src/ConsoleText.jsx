import React from 'react';

import Convert from 'ansi-to-html';

const convert = new Convert({
  escapeXML: true,
  newLine: true,
});

function console(text) {
  return convert.toHtml(text);
}

const streamStyle = {
  unicodeBidi: 'embed',
  fontFamily: 'Source Code Pro',
  whiteSpace: 'pre',
  wordWrap: 'break-word',
  fontSize: '14px',
};

export default function ConsoleText(props) {
  return (
    <span style={streamStyle}
      // This needs to become a pure React component, see
      // https://github.com/nteract/nteract/issues/34
      dangerouslySetInnerHTML={{ //eslint-disable-line
        __html: console(props.text),
      }}
    />
  );
}

ConsoleText.propTypes = {
  text: React.PropTypes.string.isRequired,
};
