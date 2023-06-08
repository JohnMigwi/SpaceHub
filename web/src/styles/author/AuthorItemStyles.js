import { Link } from 'gatsby';
import styled from 'styled-components';

export const AuthorItemStyles = styled(Link)`
  background: linear-gradient(to right, var(--black-1), transparent);
  border-radius: 1px;
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  align-items: center;

  .profileImage {
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }
`;
