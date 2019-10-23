import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col,
  Button
} from "react-bootstrap";



export default function Navibar() {
  return (
    <div style={{width:"100%"}} >
     <div id="contentdesktop">
      <Row style={{height:"100px", backgroundColor:"white"}} classname="navi" >
        <Col sx={4} md={2} style={{display:"flex", justifyContent:"center", alignItems:"center", border:"1px solid grey"}}>
          <img src="../images/logo (1).png" />
        </Col>
        <Col sm={8} md={10}>
          <Row style={{border:"1px solid grey", borderLeft:"none"}}>
            <Col sm={8} style={{display:"flex",  alignItems:"center"}}><h4>LAND ROVER AMBER CHEN</h4></Col>
            <Col sm={4}>
            <Row>
    <Col sm={4}>
      <img  src='../images/svo.png' style={{height:"inherit", width:"80px"}}/>
    </Col>
    <Col sm={8} style={{display:"flex", justifyContent:"center", alignItems:"center"}}><a href="https://www.jaguardowntownsaltlake.com/" style={{textDecoration:"none", color:"black", hover:"color:'red'"}}><i class="fas fa-angle-right"></i>Visit our Jarguard website </a></Col>
  </Row>
            </Col>
          </Row>
          <Row style={{backgroundColor:"blue"}}>
          <Navbar bg="light" expand="lg" style={{width:"100%"}}>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <NavDropdown style={{borderRight:"1px solid grey", fontSize:"12px", fontWeight:"bold"}} title="NEW VEHICLES" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown  style={{borderRight:"1px solid grey", fontSize:"12px", fontWeight:"bold"}} title="PRE-OWNED VEHICLES" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown style={{borderRight:"1px solid grey", fontSize:"12px", fontWeight:"bold"}}  title="COURTESTY VEHICLES" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown  style={{borderRight:"1px solid grey" ,fontSize:"12px", fontWeight:"bold"}} title="SPECIALS" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown  style={{borderRight:"1px solid grey", fontSize:"12px", fontWeight:"bold"}} title="FINANCE" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown style={{fontSize:"12px", fontWeight:"bold"}}  title="SCHEDULE SERVICE" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
          
          </Row>
        </Col>
      </Row>
      </div>
      <div id="contentmobile">
        <div className="open-hour">
          
        </div>
        </div>
       
          
        

     
      
    </div>
  );
}
