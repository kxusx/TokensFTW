const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
    const handleClick = () => {
      setActiveTab(id)
    }
  
    return (
      <li onClick={handleClick} className={activeTab === id ? "active" : ""} style={{fontSize: '1.2rem'}}>
        {title}
      </li>
    )
  }
  
  export default TabNavItem