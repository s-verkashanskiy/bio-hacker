import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

function Test() {
  
  return (
    <div>
      <Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
      <ParallaxLayer offset={0} speed={0.5}>
        <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
      </ParallaxLayer>
    </Parallax>
    </div>

  )
}

export default Test;
