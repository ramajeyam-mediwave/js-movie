
import React from 'react';

function Button({ name, type}) {
  return (
    <div>
      <button type={type} >
        {name}
      </button>
    </div>
  );
}

export default Button;