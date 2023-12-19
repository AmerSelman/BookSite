
const Navbar = () => {
  
  
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1 className="text-[30px] text-secondary">Book City</h1>
        <ul className="list-none flex justify-end items-center flex-1">
          <li
              className={`font-poppins font-normal cursor-pointer text-[22px] text-secondary mr-10 mt-20`}
            >
              <a href={`#`}>Home</a>

          </li>
          <li
              className={`font-poppins font-normal cursor-pointer text-[22px] text-secondary mr-10 mt-20`}
            >
              <a href={`#`}>About</a>

          </li>
        </ul>
      
    </nav>
  )
}

export default Navbar