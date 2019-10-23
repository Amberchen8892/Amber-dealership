import React from 'react';
import {  Row,Col} from 'react-bootstrap';

export default function Footer() {
    return (
        <div className="footer" style={{padding:"50px 30px"}}>
            
            <Row>
            <Col xs={6} md={3}>
      <div style={{padding:"10px"}}>
          <h5 style={{color:"white", fontSize:"14px", fontWeight:"bold"}} >Vehicles</h5>
          <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>New Vehicles</p>
          <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>Pre-owned Vehicles</p>
          <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>Current Offers</p>
          
      </div>
    </Col>
    <Col xs={6} md={3}>
    <div>
        <h5 style={{color:"white", fontSize:"14px", fontWeight:"bold"}}>FINANCE</h5>
        <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>Finance Center</p>
        <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}> Apply for Financing</p>
        <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>Payment Caculator</p>
    </div>
    </Col>
    <Col xs={6} md={3}>
    <div>
        <h5 style={{color:"white", fontSize:"14px", fontWeight:"bold"}}>SERVICE & PARTS</h5>
        <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>Schedule Service</p>
        <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>Service Center</p>
        <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>Service Specials</p>
        <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>Order Parts</p>
    </div>
    </Col>
    <Col xs={6} md={3}>
    <div>
        <h5 style={{color:"white", fontSize:"14px", fontWeight:"bold"}}>OUR DEALERSHIP</h5>
        <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>About Us</p>
        <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>Contact Us</p>
        <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>Review</p>
        <p style={{marginBottom:"0", color:"#f5f5f5", fontSize:"12px"}}>Careers</p>
    </div>
    </Col>
            </Row>
         
            <Row>
            <Row style={{width:"100%",marginBottom:"0px", marginTop:"30px"}}>
    <Col xs={12} md={6} style={{marginBottom:"0px"}}>
        <div  style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <ul style={{listStyleType:"none", display:"flex", flexDirection:"row"}}>
                <li style={{textDecoration:"none", padding:"5px", fontSize:"11px", fontWeight:"bold", color:"white"}}><a>Privacy Policy</a></li>
                <li style={{textDecoration:"none" , padding:"5px" , fontSize:"11px", fontWeight:"bold" , color:"white"}}><a>Sitemap</a></li>
                <li style={{textDecoration:"none" , padding:"5px" , fontSize:"11px", fontWeight:"bold" , color:"white"}}><a>Sitemap XML</a></li>
                <li style={{textDecoration:"none" , padding:"5px" , fontSize:"11px", fontWeight:"bold" , color:"white"}}><a>LandroverUSA.com</a></li>
                </ul>
        </div>
    </Col>
    <Col xs={12} md={6}>
       <div style={{ display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}><span style={{fontSize:"12px", fontWeight:"bold", color:"#bdbdbd"}}>ADVANCED AUTOMOTIVE DEALER WEBSITE BY <a>PHUONG TRAN</a></span></div> 
    </Col>
  </Row>
  <Row style={{width:"100%"}}>
    <Col xs={12} md={6} >
        <div style={{marginTop:"0", marginLeft:"50px",display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h3 style={{fontSize:"16px", fontWeight:"bold", color:"#bdbdbd"}}>LAND ROVER DOWNTOWN SALT LAKE</h3>
        </div>
    </Col>
    <Col xs={12} md={6} >
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}><span style={{fontSize:"12px", fontWeight:"400px", color:"#bdbdbd"}}> Coppyright <i class="far fa-copyright"></i> 2019 Land Rover Downtown Salt Lake </span> </div>
    </Col>
  </Row>
            </Row>
            
        </div>
    )
}


