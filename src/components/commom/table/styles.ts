import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 100%;
  padding: 1.5rem;
  font-size: xx-small;

  table {
    background-color: var(--color-c12);
    //table-layout: fixed;
    //word-wrap: break-word;
    width: 100%;
    border-spacing: 0;
    border: 1px solid var(--color-c8);
    text-align: left;


    tr {
      th {
        color: var(--color-c5);
        font-weight: normal;
      }

      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid var(--color-c8);


      :last-child {
        border-right: 0;
      }
    }

    td {
      font-size: xx-small;

    }
  }

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-c8);
    border-top: 0;
    padding: 0 0 0 1rem;
    background-color: var(--color-c12);
    height: 3rem;

    .page-control {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-left: 1px solid var(--color-c8);
      padding-left: 1rem;

      button {
        border-left: 1px solid var(--color-c8);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem .5rem .5rem 1rem;
      }
    }

    .item-info {
      border-right: 1px solid var(--color-c8);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
    }

    .page-info {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
    }


    input {
      width: 20px;
    }

    span {
      padding: 0 .5rem;
    }

    button {
      margin: 0 5px;
    }

    .dropdown {
      font-size: small;
      align-items: center;
      display: flex;
      flex-direction: row;
      height: 100%;


      .page-count {
        background-color: var(--color-c13);
        padding: 0 1rem;
        align-items: center;
        display: flex;
        height: 100%;

        select {
          background-color: var(--color-c13);

          option {
            padding: 1rem;
          }
        }

        .icon {
          margin-left: 5px;
          cursor: pointer;
        }

      }

    }
  }

`

