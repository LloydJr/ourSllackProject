import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
        <UserComponent />
    </div>
  );
}

export default App;

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
