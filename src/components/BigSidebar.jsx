import Wrapper from '../assets/wrappers/BigSidebar'
import { useAppContext } from '../context/appContext'
import Text from './Text'
import NavLinks from './NavLinks'


const BigSidebar = () => {
  const { showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div className={showSidebar? 'sidebar-container':'sidebar-container show-sidebar'}>
        <div>
          <header>
            <Text width="140px"/>
          </header>
          <NavLinks/>
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
