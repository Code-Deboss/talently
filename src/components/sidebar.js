import React from 'react'

const Sidebar = ({ sidebarClass, sidebarLogo, sidebarLinkClass, sidbarLinkConent }) => {
  return (
    <>
      <aside className={ sidebarClass }>
        <div>
          { sidebarLogo }
        </div>

        <div className={ sidebarLinkClass }>
          {sidbarLinkConent}
        </div>
      </aside>
    </>
  )
}

export default Sidebar