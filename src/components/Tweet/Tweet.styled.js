import styled from 'styled-components';

import goitLogo from '../../assets/images/goitLogo.png';
import chatImg from '../../assets/images/chat.png';

export const Wrapper = styled.div`
  position: relative;
  width: 380px;
  height: 460px;

  padding: 284px 0 36px 0;

  background-image: url(${goitLogo}), url(${chatImg}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px, 308px, cover;
  background-repeat: no-repeat;
  background-position: left 20px top 20px, left 36px top 28px, center;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  border-radius: 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 360px;
    height: 450px;
  }
`;

export const DecorBlockLine = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 360px;
  }
`;

export const DecorBlockCircle = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 159px;
  top: 187px;

  background-color: #5736a3;

  border-radius: 50%;

  background-image: url(${p => p.url});
  background-size: 62px;
  object-fit: contain;

  box-shadow: 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06);
`;

export const TweetsParagragh = styled.p`
  margin-bottom: 16px;

  text-align: center;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const FollowersParagragh = styled.p`
  margin-bottom: 26px;

  text-align: center;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const FollowBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 28px;

  width: 196px;
  height: 50px;

  background: ${p => {
    return p.color === 'active' ? '#5cd3a8' : '#ebd8ff';
  }};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  text-transform: uppercase;

  color: #373737;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    scale: 1.02;
  }
`;
