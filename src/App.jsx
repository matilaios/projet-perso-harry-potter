import { useState } from 'react'
import './App.css'

function App() {
  return <>
  
  <BrowserRouter>

<NavBar></NavBar>

<Routes>
<Route path='/' element={<HomePage/>} />;
<Route path='/ChampionDetailsPage/:id' element={<ChampionDetailsPage/>} />;


  </Routes>

</BrowserRouter>

  
  </>;
}
 
export default App;