import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './Main';

const mockStore = configureStore([]);

describe('Main component', () => {
  it('displays welcome message when the items array is empty', () => {
    const initialState = {
      list: { items: [] },
      configurationModal: { configurationModalMounted: false },
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const welcomeMessage = getByText(/Welcome to Coderoad!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
});
