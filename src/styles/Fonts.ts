import { css } from 'styled-components';

import { AMAZON_S3_URL } from '!/constants/amazonS3';

export const Fonts = css`
  // Lato
  @font-face {
    font-family: 'Lato';
    font-weight: 400;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Lato/Lato-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 700;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Lato/Lato-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 900;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Lato/Lato-Black.ttf') format('truetype');
  }

  // Benton Sans Condensed
  @font-face {
    font-family: 'Benton Sans Condensed';
    font-weight: 400;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Benton/BentonSansCondensed%20Regular.otf')
      format('opentype');
  }

  @font-face {
    font-family: 'Benton Sans Condensed';
    font-weight: 700;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Benton/BentonSansCondensed%20Bold.otf')
      format('opentype');
  }

  @font-face {
    font-family: 'Benton Sans Condensed';
    font-weight: 900;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Benton/BentonSansCondensed%20Black.otf')
      format('opentype');
  }

  // Whitman Display Condensed
  @font-face {
    font-family: 'Whitman Display Condensed';
    font-weight: 400;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-Regular.eot?#iefix')
        format('embedded-opentype'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-Regular.otf')
        format('opentype'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-Regular.woff')
        format('woff'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-Regular.ttf')
        format('truetype'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-Regular.svg#WhitmanDisplayCond-Regular')
        format('svg');
  }

  @font-face {
    font-family: 'Whitman Display Condensed';
    font-weight: 700;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-Bold.eot?#iefix')
        format('embedded-opentype'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-Bold.otf')
        format('opentype'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-Bold.woff')
        format('woff'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-Bold.ttf')
        format('truetype'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-Bold.svg#WhitmanDisplayCond-Bold')
        format('svg');
  }

  @font-face {
    font-family: 'Whitman Display Condensed';
    font-weight: 800;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-ExtraBold.eot?#iefix')
        format('embedded-opentype'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-ExtraBold.otf')
        format('opentype'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-ExtraBold.woff')
        format('woff'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-ExtraBold.ttf')
        format('truetype'),
      url('${AMAZON_S3_URL}/fonts/Whitman/WhitmanDisplayCond-ExtraBold.svg#WhitmanDisplayCond-ExtraBold')
        format('svg');
  }

  // Neuzeit S LT Std
  @font-face {
    font-family: 'Neuzeit S LT Std';
    font-weight: 350;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Neuzeit/NeuzeitSLTStd-Book.eot?#iefix')
        format('embedded-opentype'),
      url('${AMAZON_S3_URL}/fonts/Neuzeit/NeuzeitSLTStd-Book.otf')
        format('opentype'),
      url('${AMAZON_S3_URL}/fonts/Neuzeit/NeuzeitSLTStd-Book.woff')
        format('woff'),
      url('${AMAZON_S3_URL}/fonts/Neuzeit/NeuzeitSLTStd-Book.ttf')
        format('truetype'),
      url('${AMAZON_S3_URL}/fonts/Neuzeit/NeuzeitSLTStd-Book.svg#NeuzeitSLTStd-Book')
        format('svg');
  }

  @font-face {
    font-family: 'Neuzeit S LT Std';
    font-weight: 900;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Neuzeit/NeuzeitSLTStd-BookHeavy.eot?#iefix')
        format('embedded-opentype'),
      url('${AMAZON_S3_URL}/fonts/Neuzeit/NeuzeitSLTStd-BookHeavy.otf')
        format('opentype'),
      url('${AMAZON_S3_URL}/fonts/Neuzeit/NeuzeitSLTStd-BookHeavy.woff')
        format('woff'),
      url('${AMAZON_S3_URL}/fonts/Neuzeit/NeuzeitSLTStd-BookHeavy.ttf')
        format('truetype'),
      url('${AMAZON_S3_URL}/fonts/Neuzeit/NeuzeitSLTStd-BookHeavy.svg#NeuzeitSLTStd-BookHeavy')
        format('svg');
  }

  @font-face {
    font-family: 'Georgia';
    font-weight: 400;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Georgia/Georgia-Regular.ttf')
      format('truetype');
  }

  // Georgia
  @font-face {
    font-family: 'Georgia';
    font-weight: 700;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/Georgia/Georgia-Bold.ttf')
      format('truetype');
  }

  // Acumin Pro Wide
  @font-face {
    font-family: 'Acumin Pro Wide';
    font-weight: 500;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/AcuminProWide/Acumin%20Pro%20Wide%20Medium.otf')
      format('opentype');
  }

  @font-face {
    font-family: 'Acumin Pro Wide';
    font-weight: 600;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/AcuminProWide/Acumin%20Pro%20Wide%20Semibold.otf')
      format('opentype');
  }

  @font-face {
    font-family: 'Acumin Pro Wide';
    font-weight: 700;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/AcuminProWide/Acumin%20Pro%20Wide%20Bold.otf')
      format('opentype');
  }

  @font-face {
    font-family: 'Acumin Pro Wide';
    font-weight: 900;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/AcuminProWide/Acumin%20Pro%20Wide%20Black.otf')
      format('opentype');
  }

  // Work Sans
  @font-face {
    font-family: 'Work Sans';
    font-weight: 400;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/WorkSans/WorkSans-Regular.ttf')
      format('truetype');
  }

  @font-face {
    font-family: 'Work Sans';
    font-weight: 700;
    font-display: swap;
    src: url('${AMAZON_S3_URL}/fonts/WorkSans/WorkSans-Bold.ttf')
      format('truetype');
  }
`;
