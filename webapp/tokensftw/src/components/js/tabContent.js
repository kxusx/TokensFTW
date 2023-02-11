const TabContent = ({ id, activeTab, children }) => {
    if (activeTab !== id) return null;
  
    return (
      <div className="TabContent">
        {children}
      </div>
    )
  }
  
  export default TabContent;