import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-20 bg-[#0f111d] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
            <div className="hidden md:flex items-center">
      <ul className="hidden md:flex space-x-6 rtl:space-x-reverse text-gray-300 font-medium">
        <li className="nav-item-active">
        <NavLink className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'} to='/' >Home</NavLink >
        </li>
        <li className="nav-item">
        <NavLink className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'} to='/Projects'>Projects</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'} to='/About'>About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'} to='/Contact'>Contact</NavLink>
        </li>
      </ul>
            </div>
            {/* mobile nav */}
            <div className="md:hidden ">
                <div>
                    <i className="fas fa-bars text-xl text-white pr-8"></i>
                </div>
            </div>
        </div>
    </nav>
  );
};
export default Header;