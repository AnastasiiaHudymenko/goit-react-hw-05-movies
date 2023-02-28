import styled from 'styled-components';

export const CastList = styled.ul`
display: flex;
    flex-wrap: wrap;
    gap: 30px;
    text-align: center;
}
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 60px) / 6);
`;

export const WrapperContent = styled.div`
  padding: 8px 10px;
`;

export const ImgCast = styled.img`
  margin: 0 auto;
`;
