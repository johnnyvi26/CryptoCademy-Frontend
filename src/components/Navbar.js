import Navlinks from './Navlinks'
import {Hamburger, Div} from '../styles/Navbar.styled'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import {useState} from 'react'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const styles = {fontsize: "20px"}

  const openIcon = <HiOutlineMenuAlt4 styles={styles} onClick={() => setOpen(!open)}/>

  const closeIcon = <GrClose value={{size: '30px'}} onClick={() => setOpen(!open)}/>
  

  return (

      <nav>
        <Div>
        <Hamburger>
          {open ? closeIcon : openIcon}
        </Hamburger>
        </Div>
        <div>
          {open && <Navlinks closeMenu={closeMenu}/>}
        </div>
      </nav>

  )
}

export default Navbar