import { render } from '@testing-library/react';

import DataProviders from './data-providers';

describe('DataProviders', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataProviders />);
    expect(baseElement).toBeTruthy();
  });
});
