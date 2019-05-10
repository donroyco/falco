import styled from 'styled-components';
import { colorUsage, fontFamily, fontSize, fontWeight, getSpacing, lineHeight } from 'stylesheet';

const Styles = {
  FirstBlockContainer: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${getSpacing(20)};
  `,

  FirstBlockColumn: styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,

  Title: styled.div`
    width: 370px;
    line-height: ${lineHeight.h1Text};
    color: ${colorUsage.h1Text};
    font-family: ${fontFamily.mainSans};
    font-size: ${fontSize.h1Text};
    font-weight: ${fontWeight.h1Text};
    margin: 0 0 ${getSpacing(6)} 0;
  `,

  Introduction: styled.div`
    width: 370px;
    line-height: ${lineHeight.introductionText};
    color: ${colorUsage.introductionText};
    font-family: ${fontFamily.mainSans};
    font-size: ${fontSize.introductionText};
  `,

  FalcoIllustration: styled.img`
    height: 303px;
    width: 475px;
    border-radius: 6px;
    box-shadow: 0 14px 21px 0 ${colorUsage.landingImageShadowBox};
  `,
};

export default Styles;