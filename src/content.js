import React from 'react';

import Auth from './components/auth/auth.js';

export default function (props){

  return (
    <>
      <Auth>
        <h2>You Are Logged In! and this is props{props}</h2>
      </Auth>
      <Auth capability="update">
        <h2>You can update</h2>
      </Auth>
      <Auth capability="delete">
        <h2>You can delete!</h2>
      </Auth>
    </>
  )
}
