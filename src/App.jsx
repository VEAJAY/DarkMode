import React, { useState } from 'react'

import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import Greenscreen from './Greenscreen/Greenscreen'

function App() {
  const [content, setContent] = useState('Help');
  
  return (
    <>
      <Navbar setContent={setContent} currentContent={content}/>
      <Message />
      <Greenscreen content={content}/>
    </>
  )
}

export default App
