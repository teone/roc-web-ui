import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteView from './SiteView';
import { Provider } from "react-redux";
import { store } from "../../../../state/store";

describe('<SiteView />', () => {
  test('it should mount', () => {
    render(<Provider store={store}><SiteView /></Provider>);
    
    const siteView = screen.getByTestId('SiteView');

    expect(siteView).toBeInTheDocument();
  });
});
