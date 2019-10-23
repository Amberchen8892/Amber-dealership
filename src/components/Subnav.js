import React from "react";
import { Nav, Navbar ,NavDropdown, Form, FormControl} from 'react-bootstrap';
import styled from "styled-components";

const Styles = styled.div`
.dropdown-menu{
   
    right: 0px;
    left: auto;
   
    
    
}
.dropdown-menu a:hover{
    
        background-color:#1b5e20;
        // background-color:#ff8a65;
    
}
.navbar{
    background-color:#eeeeee;
   
}
.nav-link, nav-item{
    color:#212121 !important;
    font-size:12px;
    font-weight:bold;
    & :hover{
        color:#1b5e20 !important;
    }
}
.nav-link:hover{
    color:#1b5e20 !important;
}

}

`;
const Button = styled.button`
background-color:#1b5e20;

&& :hover{
    color:#e3f2fd !important;
}
`;

export default function Subnav() {
  return (
    <div>
      <div id="content-desktop">
    <Styles>
        <Navbar  style={{width:"100%"}}  className="toolbar">
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto">
      <Nav.Link >SALES (801)903-4200</Nav.Link>
      <Nav.Link >SERVICE (801)257-3630</Nav.Link>
      <Nav.Link href="https://www.google.com/maps/place/150+E+500+S,+Salt+Lake+City,+UT+84111,+USA/@40.7575743,-111.8891365,17z/data=!3m1!4b1!4m5!3m4!1s0x8752f514200f2301:0x907d8f023d115034!8m2!3d40.7575743!4d-111.8869478">150 E 500 S.SALT LAKE CITY,UT 84111</Nav.Link>
      
    </Nav>
    <Form inline>
    <Nav  as="ul">
  <Nav.Item as="li">
    <Nav.Link href="https://www.google.com/maps/place/150+E+500+S,+Salt+Lake+City,+UT+84111,+USA/@40.7575743,-111.8891365,17z/data=!3m1!4b1!4m5!3m4!1s0x8752f514200f2301:0x907d8f023d115034!8m2!3d40.7575743!4d-111.8869478"><i class="fas fa-map-marker-alt"></i>Find us</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1"><i class="fas fa-search"></i>Search</Nav.Link>
  </Nav.Item>
  <Button>
  <Nav.Item as="li" style={{color:"green"}}  >
  <NavDropdown title="Quick Links" id="basic-nav-dropdown">
        <NavDropdown.Item  href="#action/3.1">Search anything <i class="fas fa-search"></i></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Finf your vehicle <i class="fas fa-car"></i></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Schedule service <i class="fas fa-tools"></i></NavDropdown.Item>  
        <NavDropdown.Item href="#action/3.4">Contact us <i class="far fa-question-circle"></i></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Saved car <i class="far fa-heart"></i></NavDropdown.Item>
      </NavDropdown>
  </Nav.Item>
  </Button>
  
</Nav>
      
    </Form>
  </Navbar.Collapse>
</Navbar>
    </Styles>
    </div>
    <div id="content-mobile">
        
        <div className="top-menu">
           <div className="logo" style={{padding:"10px 15px", float:"left", borderRight:"1px solid white"}}>
               
                   <img src="../images/logo (1).png" style={{maxHeight:"30px"}} />
                
           </div>
           <div className="detail">
          
           </div>
        </div>
    </div>
</div>
  );
}
