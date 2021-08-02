// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
// import 'react-testing-library/cleanup-after-each'
// import 'jest-dom/extend-expect'

let store = {}

// Mock the `localStorage.getItem` method to return the value stored in the given key
jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
  return store[key]
})

// Mock the `localStorage.setItem` method to insert a given value into the given key
jest.spyOn(Storage.prototype, 'setItem').mockImplementation((key, value) => {
  return (store[key] = value + '')
})

// Mock the `localStorage.clear` method to clear the `store`
jest.spyOn(Storage.prototype, 'clear').mockImplementation(() => {
  store = {}
})