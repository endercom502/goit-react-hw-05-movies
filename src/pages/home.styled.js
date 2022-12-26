import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  padding: 10px;
  justify-content: center;
  text-align: center;
  color: #663311;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 46px;
  list-style: none;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const Wrapper = styled.div`
  text-decoration: none;
  max-height: 500px;
  text-align: center;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
object-fit: cover;
 height:100%;
 width:100%;
  border-radius: 2px;
    
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: black;
`;
