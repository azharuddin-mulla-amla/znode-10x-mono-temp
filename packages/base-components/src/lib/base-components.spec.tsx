import { render } from '@testing-library/react';

import BaseComponents from './base-components';

describe('BaseComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseComponents />);
    expect(baseElement).toBeTruthy();
  });
});
