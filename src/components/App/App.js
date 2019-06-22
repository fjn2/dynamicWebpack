import React from 'react';

import Menu from '../Menu';

const App = ({ PageBody, header }) => (
  <html>
    <header dangerouslySetInnerHTML={{ __html: header }} />
    <body
      style={{ background: 'grey' }}
    >
      <Menu />
      <PageBody />
    </body>
  </html>
);

export default App;