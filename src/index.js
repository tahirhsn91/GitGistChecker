import './index.css';
import 'antd/dist/antd.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './container/shell'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<Shell />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
