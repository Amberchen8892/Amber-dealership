import React from 'react'
import { Carousel, Row,Col} from 'react-bootstrap';

export default function Home() {
    return (
        <div >
            <div id="content-desktop">
            <header>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/9StbIRSjM6M?autoplay=1&mute=1&showinfo=0&loop=1&playlist=9StbIRSjM6M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
</header>
</div>
<div id="content-mobile">
    <section className="sectiona">
    <div class="boxs">
    <i class="fas fa-car fa-3x"></i>
        <h5>New Vehicles</h5>
        
      </div>
      <div class="boxs">
      <i class="fa fa-user-circle fa-3x" aria-hidden="true"></i>
        <h5>Pre-Owned Vehicles</h5>
      </div>
      <div class="boxs">
      <i class="fas fa-tools fa-3x"></i>
        <h5>Serice Your Vehicles</h5>
       
      </div>
      <div class="boxs">
      <i class="fas fa-tags fa-3x"></i>
        <h5>Special Offers</h5>
      
      </div>
      <div class="boxs">
      <i class="fas fa-phone-square fa-3x"></i>
        <h5>Contact Us</h5>
        
      </div>
      <div class="boxs">
      <i class="fas fa-search fa-3x"></i>
        <h5> Search</h5>
        
      </div>
    
    
    </section>
  
</div>


<section style={{marginTop:"30px"}}>
<Carousel>
  <Carousel.Item  style={{maxWidth:"100%", maxHeight:"500px"}}>
    <img
      className="d-block w-100"
      src="../images/rover1.jpeg"
      alt="First slide"
      style={{maxWidth:"100%", maxHeight:"100%", objectFit:"contain"}}
    />
    <Carousel.Caption>
    

<button type="button" class=" btn-info">View Inventory</button>

      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{maxWidth:"100%", maxHeight:"500px"}}>
    <img
      className="d-block w-100"
      src="../images/range.jpg"
      alt="Third slide"
      style={{maxWidth:"100%", maxHeight:"100%", objectFit:"contain"}}
    />

    <Carousel.Caption>
    <button type="button" class=" btn-info">View Inventory</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{maxWidth:"100%", maxHeight:"500px"}}>
    <img
      className="d-block w-100"
      src="../images/rover2.jpeg"
      alt="Third slide"
      style={{maxWidth:"100%", maxHeight:"100%", objectFit:"contain"}}
    />

    <Carousel.Caption>
    <button type="button" class=" btn-info">View Inventory</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</section>
<section style={{marginTop:"30px"}}>
<div class="row" style={{width:"100%", height:"auto", backgroundColor:"#e9ecec"}}>
  <div class="col-12 col-md-6" style={{maxWidth:"100%", maxHeight:"inherit"}}>
     <img  src="../images/service-bg.jpg" style={{maxWidth:"100%", maxHeight:"100%"}}/>
  </div>
  <div class="col-12 col-md-6" style={{display:"block", flexDirection:"column", marginTop:"50px", alignItems:"center", textAlign:"left !important", padding:"30px 30px"}}>
      <h2>Service Center</h2>
      <p>Land Rover Downtown Salt Lake is focused on taking care of you and your vehicle. Our service department’s top priority is helping you with maintenance and repairs for new and used vehicles. The team at Land Rover Downtown Salt Lake knows how valuable your time is so we will get you back on the road safely and quickly. You can schedule your service online with one of our Service Advisors.</p>
      <button type="button" class="btn btn-outline-success">SCHEDULE SERVICE</button>
  </div>
</div>
</section>
<section className="boxes" style={{maxWidth:"100%", height:"auto"}}>
<div class="box">
<i class="fas fa-car fa-4x"></i>
        <h3>New Land Rover</h3>
        <p>Experience the joy of owning a brand new Land Rover today!</p>
      </div>
      <div class="box">
      <i class="fa fa-user-circle fa-4x" aria-hidden="true"></i>
        <h3>Pre-Owned Vehicles</h3>
        <p>Land Rover Downtown Salt Lake has a great selection of pre-owned vehicles.</p>
      </div>
      <div class="box">
      <i class="fas fa-tools fa-4x"></i>
        <h3>Serice Your Vehicles</h3>
        <p>Have our trained technicians service your vehicle today.</p>
      </div>
      <div class="box">
      <i class="fas fa-edit fa-4x"></i>
        <h3>Financing</h3>
        <p>Get approved today and drive off in a new or pre-owned vehicles.</p>
      </div>
</section>

  


        </div>
    )
}
