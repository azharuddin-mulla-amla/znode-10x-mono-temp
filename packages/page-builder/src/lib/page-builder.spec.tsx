import { render } from '@testing-library/react';

import PageBuilder from './page-builder';

describe('PageBuilder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageBuilder />);
    expect(baseElement).toBeTruthy();
  });
});
