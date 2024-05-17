import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">

        <a href="https://drive.google.com/file/d/1hOWJegltCP6DlX_zgNkPQxsdhnWRi59d/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <h1 style={{ fontSize: '25px', textDecoration: 'underline' }}>Resume </h1>
        </a>
        <div className="flex flrx-shrink-0 items-center">
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        
        
        <a href="https://www.linkedin.com/in/raghu-meda/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{ fontSize: '30px' }} />
        </a>
        <a href="https://github.com/RaghuM7" target="_blank" rel="noopener noreferrer">
        <FaGithub style={{ fontSize: '30px' }} />
        </a>
        <a href="https://leetcode.com/u/raghu_mahesh/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode style={{ fontSize: '30px' }}/>
        </a>
        <a href="https://www.instagram.com/raghu_____m/" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ fontSize: '30px' }} />        
        </a>
        </div>

    </nav>  
  );
}; 

export default Navbar
