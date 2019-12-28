import React from 'react';

import { Spinner, SpinnerOverLay } from './WithSpinner.styles';

const withSpinner = WrapedComponents => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <SpinnerOverLay>
      <Spinner />
    </SpinnerOverLay>
  ) : (
    <WrapedComponents {...otherProps} />
  );

export default withSpinner;
