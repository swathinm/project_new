import React from 'react'
import Cardin from './Cardin'
import Cardout from './Cardout'
import CardCoundown from './CardCoundown'
function Second() {
  return (
   <>
    <div class="container">
        <div class="row"> 
            <div class="col-8">
                <div class="card card-second">
                    <div className="card card-header">
                        Next Match
                    </div>
                    
                    <img class="card-img" src="WhatsApp Image 2023-08-11 at 2.28.46 PM.jpeg" alt="Card image cap"/>
                    
             
                    
                 </div>
            </div>  
            <div class="col-4">
                <div class="card card-secoundside">
                    <div class=" card card-header">
                        GMFC LOTTO
                    </div>
                   
                  
                    <img class="card-img" src="WhatsApp Image 2023-08-11 at 2.28.44 PM.jpeg" alt="Card image cap"/>
                     <div class="card-img-overlay">
                    <h1 class="card-title">The new <br></br>GMFC Lotto <br></br> is now LIVE!</h1>
                    <a href="#">Click here <br></br>to buy your lottery tickets<br></br>for the next draw.</a>
                    </div>
                   
                  
                 </div>
            </div>                    
        </div>
        <Cardin/> 
        <Cardout/>
        <CardCoundown/>
    </div>

   </>
  )
}

export default Second