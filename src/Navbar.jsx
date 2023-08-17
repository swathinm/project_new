import React from 'react'

function Navbar() {
  return (
      <div>
         <div class="row">
              <div class="col" >
                  <div class="left-margin-element">
                  <nav class="navbar navbar-expand-lg bg-body-tertiary nav-top">
                            <div class="container-fluid">
                              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div id="triangle-bottomright" class="ms-5"></div>
                                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
                                      <li class="nav-item">
                                          <a class="nav-link" href="">BUY TICKETS</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="nav-link" href="#">SHOP</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="nav-link" href="#">TONTV</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="nav-link" href="#">MORTON CLUB TOGETHER</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="nav-link" href="#">COMMUNITY TRUE</a>
                                      </li>
                                      <li>
                                          <div id="triangle-bottomleft" class="me-auto"></div>

                                      </li>

                                  </ul>

                              </div>
                          </div>
                      </nav>
                  </div>
              </div>
          </div> 
          
    </div>
  )
}

export default Navbar