import image from '../../images/steamLogo.svg'
import FilterDropdown from '../filterDropdown/FilterDropdown'
import GamesSearch from '../searchBar/SearchBar'
import DropdownSort from '../dropdownSort/DropdownSort'
import ButtonFilter from '../buttonsFilter/ButtonsFilter'

import './navbar.css'

// import BasicExample from '../filterDropdown/FilterDropdown'

const Navbar: React.FC = () => {
    return (
        <div className="parent">
            <img className='steamImage' draggable={'false'} src={image} alt="1" />
            <GamesSearch />
            <FilterDropdown />
            <DropdownSort />
            <ButtonFilter />
        </div>
    )
}

export default Navbar