import styled from "styled-components";

const Wrapper = styled.section`
  .form {
    width: 100%;
    max-width: 100%;
    margin-top:1rem;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .back-btn{
    display:flex;
    align-items:center;
    top:0.5rem;
    left:0;
    font-size:14px;
    grid-gap:0.5rem;
    border-radius:10px;
    padding:0.5rem 1.3rem;
    color:var(--grey-600);
    background-color:#fff;
    width:fit-content;
    box-shadow: var(--shadow-2);
    cursor:pointer;
    border:none;
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
  .car-selected {
    display: flex;
    grid-gap: 2rem;
  }
  .car-detail{
    display:flex;
  }
  .car-info {
    border-right: 2px solid var(--grey-100);
    padding-right: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 3rem;

  }
  .car-form {
    display:flex;
    flex-direction: column;
    grid-gap: 0.5rem;
    margin-left:1rem;
  }
  .car-form input {
    height: 30px;
    width: 100px;
  }
  .car-form label {
    font-size: 12px;
  }
  .total-price{
    margin-top:1px;
    margin-left:25%;
    color:var(--primary-900);
    font-size:14px;
  }
  .car-form input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
  }

  .rent-btn {
    color: #fff;
    background-color: var(--primary-800);
    margin-left: 1rem;
    cursor: pointer;
    font-size: 15px;
    padding: 0 1rem;
    border-radius:5px;
    border:none;
  }
  .price {
    color: var(--primary-800);
    font-size: 15.5px;
    font-weight: bold;
    margin-top: 0.15rem;
  }
  .rent-section {
    display: flex;
    height: 30px;
    margin-top: 1.5rem;
  }
  img {
    width: 180px;
    display: grid;
    place-items: center;
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;

    object-fit: cover;
    object-position: left;
  }

  .warning{
    margin-left:1rem;
  }


  @media(max-width:1100px){
    img{
      margin-right:0.5rem;
    }

    .car-info{
      padding-right:1.5rem;
      margin-right:1rem;

    }
  }



  @media(max-width:1000px){
    .car-selected{
    }
    img{
      margin-right:2rem;
    }
    .car-info{
      padding-right:2.5rem;
      margin-right:2.5rem;
    }
  }
  @media(max-width:780px){
    .car-selected{

    }
    img{
      margin-right:0;
    }
    .car-info{
      padding-right:0.8rem;
      margin-right:1rem;
    }
  }

  @media(max-width:700px){
    .car-selected{
      flex-direction:column;
    }
    .car-detail{

    }
    img{
      margin-right:0;
    }
    .car-info{
      padding-right:1.5rem;
      margin-right:1rem;
    }
  }

  
`;

// 
// @media (max-width: 720px) {
//   .car-selected {
//     flex-direction: column;
//   }
//   .car-info {
//     align-items: start;
//     justify-content: center;
//     border-right:none;
//     padding-right:0.5rem;
//   }
//   .car-form{
      
//   }
// }

// @media (max-width: 377px) {
//   .car-detail{
//     flex-direction:column;
//   }
// }

// @media (max-width: 440px) {
//   .car-info{
//     padding-right:0;
//   }
// }

// @media (min-width: 730px) {
//   .form-center {
//     grid-template-columns: 1fr 1fr;
//   }
//   .car-info{
//     padding-right:4rem;
//   }
// }
// @media (min-width: 992px) {
//   .form-center {
//     grid-template-columns: 1fr 1fr 1fr;
//   }
//   .btn-block {
//     margin-top: 0;
//   }
// }

export default Wrapper;
