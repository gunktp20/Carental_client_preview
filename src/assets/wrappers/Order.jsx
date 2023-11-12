import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  #car_id {
    background-color: var(--primary-800);
    color: #fff;
    border-radius: 5px;
    padding: 0.4rem 0.6rem;
    font-size: 13px;
    width: fit-content;
  }
  .main-icon {
    width: 120px;
    display: grid;
    place-items: center;
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;

    object-fit: cover;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .pending {
    background: #fcefc7;
    color: #e9b949;
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
    font-size: 15px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .rent-btn {
    color: #fff;
    background-color: var(--primary-800);
    cursor: pointer;
    font-size: 15px;
    padding: 0 1rem;
    border:none;
  }
  .price {
    color: var(--primary-800);
    font-size: 15.5px;
    font-weight: bold;
    margin-top: 0.15rem;
    margin-right:1rem;
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green-light);
    height: ;
  }

  .rent-section {
    display: flex;
    height: 30px;
  }

  &:hover .actions {
    visibility: visible;
  }
`;

export default Wrapper;
