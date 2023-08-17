import React from 'react'

function Cardin() {
  return (
    <>
        <div class="card cardin">
            <div className="container cardInCont">
                <h6>ON TIME</h6>
                <div className="row">
                    <div className='col-4'>
                    <img class="card-img" src="WhatsApp Image 2023-08-11 at 2.28.47 PM.jpeg" alt="Card image cap"/>
                    <br></br>
                    <br></br>
                    <h6>ALLOA</h6>
                    </div>
                    <div className='col-4'>
                        <h1>VS</h1>
                        <p>01/07/2023 STADIUM <br></br> CLUB  <br></br> FRIENDLY</p>                    
                    </div>
                    <div className='col-4'>
                    <img class="card-img" src="WhatsApp Image 2023-08-11 at 2.28.45 PM (1).jpeg" alt="Card image cap"/>
                    <h6>MORTON</h6>
                    </div>
                    <a href="#" class="btn ">READ MORE</a>
                </div>
                
            </div>
        </div>       
    </>
  )
}

export default Cardin