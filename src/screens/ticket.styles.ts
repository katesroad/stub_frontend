import styled from 'styled-components'

export const Wrapper = styled.label`
  display: block;
  position: relative;
  padding: 3rem;
  margin: 2rem auto auto;
  
  .title {
    width: 100%;
    height: 15rem;
    display: flex;
    flex-direction: row;

    img {
      width: 100%;
      height: 100%;
    }

    .card {
      width: 50%;
    }

    .title-content {
      border: 1px rgba(0, 0, 0, .1) solid;
      padding: .5rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .date {
        height: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: var(--color-c3);
      }

      .text {
        width: 70%;
        font-size: 24px;
        font-weight: 700;
        margin-top: 1rem;
      }

      .subtext {
        margin-top: -1rem;
        color: var(--color-c3);
      }

      .func {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;

        .price {
          font-weight: bold;
          color: var(--color-c2);
        }

        .buy-button {
          background: var(--color-c2);
          color: white;
          padding: 8px 15px;

          :hover {
            opacity: .8;
            transition: opacity ease-in-out .1s;
          }

          .icon {
            margin-right: 2px;
          }
        }
      }
    }
  }

  .content {
    border-left: 1px rgba(0, 0, 0, .1) solid;
    border-right: 1px rgba(0, 0, 0, .1) solid;
    border-bottom: 1px rgba(0, 0, 0, .1) solid;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    .content-title {
      font-weight: bold;
      font-size: large;
      color: var(--color-c2);
    }

    .content-text {
      color: var(--color-c5);
      text-align: justify-all;

      p {
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        line-height: 24px;
      }
    }

    .article {
      width: 70%;
      padding: 2rem;
    }

    .information {
      width: 30%;
      padding: 2rem;

      .icon {
        color: var(--color-c2);
        margin-right: 3px;
        font-size: large;
      }

      .category {
        font-weight: bold;
      }

      .detail {
        margin: 1rem 0;
        font-size: xx-small;
        color: var(--color-c3);
        line-height: 24px;
      }
    }
  }

  @media (max-width: 768px) {
    .title {
      flex-direction: column;
      height: auto;

      .card {
        width: 100%;
      }


      .title-content {
        .main {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
        }

        .text {
          margin-top: 0;
          font-size: 20px;
        }

        .subtext {
          margin-top: 1rem;
        }

        .func {
          margin-top: 1rem;
        }

        .date {
          font-size: 6px;
          height: 1rem;
        }
      }
    }

    .content {
      flex-direction: column-reverse;
      padding: 0;

      .article {
        width: 100%;
        padding: 1rem;
      }

      .information {
        width: 100%;
        padding: 1rem 1rem 0;
      }
    }
  }






`
