// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// 🐨 use React.lazy to create a Globe component which uses a dynamic import
// to get the Globe component from the '../globe' module.
const Globe = React.lazy(() => import(/* webpackPrefetch: true */ '../globe'))
// import(/* webpackPrefetch: true */ './some-module.js')

// function loadGlobe() {
//   import('../globe')
// }

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label
        // onMouseEnter={loadGlobe}
        // onFocus={loadGlobe}
        style={{marginBottom: '1rem'}}
      >
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div style={{width: 400, height: 400}}>
          {showGlobe ? <Globe /> : null}
        </div>
      </React.Suspense>
    </div>
  )
}
export default App
