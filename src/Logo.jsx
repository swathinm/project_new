import React from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
function Logo() {
  return (
      <div> 
          <div class="row">
          <div class="col-4">
              <a class="navbar-brand" href="#"><img src="https://gmfc.net/wp-content/uploads/2019/08/gmfc-logo-2017-1.png" /></a>
          </div>
          </div>
          <Navbar/>
          <Navbar2/>
      </div>
  )
}

export default Logo