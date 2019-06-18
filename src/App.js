import React from 'react'

function App () {
  //modifica
  const prova2 = {
    mio2: {
      fg: 12
    }
  }
  const f = prova2.mio?.fg || 'ciao'
  return <>
    {f}
  </>
}

export default App



