import styled from 'styled-components'
import 'swiper/swiper.scss'

export const Wrapper = styled.div`
  position: relative;

  button {
    position: absolute;
    padding: 0.25rem 0;
    background-color: rgba(0, 0, 0, 0.2);
    top: 50%;
    z-index: 2;
    transform: translate(0, -50%);
    border-radius: 0.25rem;
    &.btn-next {
      right: 1rem;
    }
    &.btn-prev {
      left: 1rem;
    }
    svg {
      width: 3rem;
    }
  }

  .loading-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background-color: var(--bs-light);
  }

  .ticket-item {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
    color: var(--color-c5);
    .desc {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 0.9375rem;
    }
  }
`
