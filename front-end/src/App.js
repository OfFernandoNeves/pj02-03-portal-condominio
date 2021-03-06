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
function FooterPage () {
  return (
    <footer className="footer text-center text-white py-2 mt-4">
        <p className='m-0 '>
          Todos os direitos reservados
        </p>
        
    </footer>
  )
}

function HomeView () {
  return (
    <>
      <Header />
      <main>
        <p>Conteudo</p>
      </main>
      <FooterPage />
    </>
  )
}
function App () {
  return <HomeView />;
}
export default App;
