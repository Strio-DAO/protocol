import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import ConnectWallet from './ConnectWallet'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <Container>
                <Col md="7"><h1>OneVote</h1></Col>
                <Col md="2"><Link to="/">Home</Link></Col>
                <Col md="2"><Link to="/issueTokens">Issue Tokens</Link></Col>
                <Col md="1"><ConnectWallet /></Col>
            </Container>
        </nav>
    );
}
 
export default Navbar;