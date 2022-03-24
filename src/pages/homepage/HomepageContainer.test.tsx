import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomepageContainer from './HomepageContainer';
import { Provider } from "react-redux";
import { store } from "../../state/store";

describe('<HomepageContainer />', () => {
  test('it should mount', () => {
    render(<Provider store={store}><HomepageContainer /></Provider>);
    
    const homepageContainer = screen.getByTestId('HomepageContainer');

    expect(homepageContainer).toBeInTheDocument();
  });
});
