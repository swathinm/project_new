import React from 'react'
import Navbardown from './Navbardown'


function Navbar2() {
  return (
      <div>
          <div class="row">
                    <div class="col">
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div id="triangle-bottomright" class="ms-5"></div>
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                  <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="E:\React\ReactNew\project_new\src\Navbardown.jsx">NEWS</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">TICKETS</a>
                                  </li>
                                  <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      MATCHES & TEAMS
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li><a class="dropdown-item" href="#">Action</a></li>
                                      <li><a class="dropdown-item" href="#">Another action</a></li>
                                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">FANS</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">COMMERCIALS</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">CLUB</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">HISTORY</a>
                                  </li>

                                  <li>
                                    <a class="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                      </svg></a>
                                  </li>
                                  <li>
                                    <a class="nav-link search-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                      </svg></a>
                                  </li>
                                  
                                </ul>
                              </div>
                            </div>
                          </nav>
                    </div>
            </div>
        
        <Navbardown/>
    
   
        
    </div>
     
  )
}

export default Navbar2