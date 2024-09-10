import { render } from '@testing-library/react';

import Agents from './agents';

describe('Agents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Agents />);
    expect(baseElement).toBeTruthy();
  });
});
