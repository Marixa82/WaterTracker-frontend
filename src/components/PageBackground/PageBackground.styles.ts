import styled from 'styled-components';

export const BackgroundContainer = styled.div<{ $desktopBackground: string; $tabletBackground: string; $mobileBackground: string }>`
  height: 100vh;
  width: 100vw;
  background: ${({ $desktopBackground }) => $desktopBackground};
  background-repeat: no-repeat, no-repeat;
  background-size: cover, contain;
  background-position: center, bottom;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Для планшетів */
  @media (max-width: 1024px) {
    background: ${({ $desktopBackground }) => $desktopBackground};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  /* Для мобільних */
  @media (max-width: 768px) {
    background: ${({ $mobileBackground }) => $mobileBackground};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
