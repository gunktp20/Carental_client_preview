import Wrapper from '../assets/wrappers/CarInfo'

const CarInfo = ({icon,text,color,fontWeight}) => {
  return (
    <Wrapper>
      <span className='icon' style={{color:color}}>{icon}</span>
      <span className='text' style={{color:color,fontWeight:fontWeight}}>{text}</span>
    </Wrapper>
  )
}

export default CarInfo
