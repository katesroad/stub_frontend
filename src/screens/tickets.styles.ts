import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #fbfbfb;

  .status {
    color: var(--color-c12);
    padding: .25rem .5rem;
    border-radius: 1rem;

    &.sale {
      background-color: var(--color-c5);
    }

    &.sold {
      background-color: var(--color-c9);
    }
  }


  .operation {
    float: right;
    min-width: 6rem;
    margin-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.sold {
      .icon {
        &:nth-child(2), &:nth-child(3) {
          color: var(--color-c7);
          cursor: default;
        }
      }

    }

    .icon {
      font-size: 20px;
      color: var(--color-c3);
      cursor: pointer;

      :nth-child(2) {
        font-size: 17px;
      }
    }
  }
`
