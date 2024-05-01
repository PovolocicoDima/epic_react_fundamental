// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({children}) {
  const shapeClass = `box box--${children.split(' ')[0]}`
  const styles = {
    backgroundColor: children.split(' ')[1],
    fontStyle: 'Italic',
  }
  return (
    <div className={shapeClass} style={styles}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      {<Box>small lightblue box</Box>}
      {<Box>medium red box</Box>}
      {<Box>large orange box</Box>}
    </div>
  )
}

export default App
