import {Container, Nav, Navbar} from 'react-bootstrap'
import Logo from './assets/img/logo-altosraposo.png'

function Header () {
  return (
    <header>
      <Navbar expand="md" className='main-navbar'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={Logo} alt='logo altos da raposo' width={75} height={75}/>
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls= 'navbar-header'/>
          <Navbar.Collapse id='navbar-header'>
            <Nav className='ms-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/'>Serviços</Nav.Link>
              <Nav.Link href='/'>Login</Nav.Link>
              <Nav.Link href='/'>Moradores</Nav.Link>
              <Nav.Link href='/'>Portaria</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

  )
}

function HomeView () {
  return (
    <>
      <Header />
      <p>Main</p>
      <p>Footer</p>
    </>
  )
}
function App () {
  return <HomeView />;
}
export default App;
