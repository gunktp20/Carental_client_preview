import styled from 'styled-components'

const Wrapper = styled.section`
  .form {
    width: 100%;
    max-width: 100%;
  }
  .search-form{
    display:flex;
    grid-gap:1rem;
  }
  .btn-search{
    width:300px;
    height:36px;
  }
  
  .form-input{
    height: 35px;
  }
  .form-select,
  .btn-block {
    height: 35px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  
  h5 {
    font-weight: 700;
  }
  .btn-block {
    align-self: end;
    margin-top: 1rem;
  }
  @media screen and (min-width:100px) and (max-width:600px){
    .search-form{
        flex-direction:column;
    }
    .btn-search{
        height:36px;
        width:100%;
        margin-top:1rem;
    }
  }

 
`

export default Wrapper
