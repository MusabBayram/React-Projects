import React from 'react';
import db from '../firebase';

function Content() {
  console.log(db);
  
  return (
    <main className="flex-1 bg-purple-200"><h1>Content</h1></main>
  )
}

export default Content