import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from './Loading';

it('should render the Loading component', () => {

    const { getByText } = render(<Loading loadingText="Please wait.." />);
    expect(getByText("Please wait..")).toBeTruthy();

});