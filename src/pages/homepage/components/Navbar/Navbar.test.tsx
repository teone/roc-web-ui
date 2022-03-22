import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';
import { Provider } from "react-redux";
import { store } from "../../../../store";

describe('<Navbar />', () => {
  test('it should mount', () => {
    render(<Provider store={store}><Navbar /></Provider>);
    
    const navbar = screen.getByTestId('Navbar');

    expect(navbar).toBeInTheDocument();
  });
});
