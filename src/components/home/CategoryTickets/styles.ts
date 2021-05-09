import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 3.5rem;
  color: var(--color-c5);

  .category-name {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    font-weight: var(--weight-bolder);
    line-height: 2.5rem;
    text-transform: capitalize;
  }

  .category-tickets {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17.375rem, 1fr));
    grid-auto-rows: minmax(17.375rem, auto);
    gap: 1rem;
    padding-bottom: 2rem;
  }

  .ticket-item {
    display: block;
    border-radius: 0.25rem;
    color: inherit;
    img {
      max-width: 100%;
    }
    .ticket-intro {
      padding: 1rem;
    }
    .ticket-name {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
      line-height: 1.5rem;
      font-weight: var(--weight-bolder);
    }
    .ticket-category {
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-weight: var(--weight-bold);
      font-size: 1rem;
      color: white;
      background-color: var(--color-c2);
    }
  }
`
