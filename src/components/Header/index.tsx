import { Container } from './styles';

function Header() {
  return (
   <Container>
      <h3 className='logo'>	&lt; Reinaldo <strong>Mantovani</strong> &frasl; &gt;</h3>
      
      <ul className='menu-list'>
          <li><a href="">Home</a></li>
          <li><a href="">AboutMe</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
      </ul>

   </Container>
  )
}

export default Header;