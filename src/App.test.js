// Need to fix test - look into how we can use Enzyme to shallow test instead

import React from "react";
import { Provider } from "@reduxjs/toolkit";
import configureStore from "redux-mock-store";
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("renders the application without crashing", () => {
    const initialState = {
      tasks: []
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);

    render(<Provider store={store}><App /></Provider>);
  });
});