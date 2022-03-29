import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteSelector from './SiteSelector';
import { Provider } from "react-redux";
import { store } from "../../../../state/store";

describe('<SiteSelector />', () => {
  test('it should mount', () => {
    render(<Provider store={store}><SiteSelector /></Provider>);
    
    const dashboard = screen.getByTestId('SiteSelector');

    expect(dashboard).toBeInTheDocument();
  });
});
