import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './App.css'
import morning from "../src/assets/morning.jpeg"
import afternoon from "../src/assets/afternoon.jpeg"
import sunset from "../src/assets/sunset.jpeg"


function App() {

  return (
    <div>
      <Parallax pages={5} >
        <ParallaxLayer>
          <h1>hello y'all welcome to the website</h1>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1}  
          factor={1.5} 
          style={{
            backgroundImage:`url(${morning})`,
            backgroundSize: "cover"
          }}
        />
        <ParallaxLayer
          offset={2} 
          factor={1.5}
          style={{
            backgroundImage: `url(${afternoon})`,
            backgroundSize: "cover"
          }}
        />
        <ParallaxLayer
          offset={3} 
          factor={1.5}
          style={{
            backgroundImage: `url(${sunset})`,
            backgroundSize: "cover"
          }}
        />
        <ParallaxLayer>
          <h1>hello y'all welcome to the website</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
