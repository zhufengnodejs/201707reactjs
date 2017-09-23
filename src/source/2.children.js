import React from 'react';
import ReactDOM from 'react-dom';// XSS
let desc  = '<script>while(true){alert("1")}</script>';
ReactDOM.render(<div>
  {desc}
</div>,document.querySelector('#root'));
