import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 1rem;
  align-items: flex-start;
`