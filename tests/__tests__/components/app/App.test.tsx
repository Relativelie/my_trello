import App from '../../../../src/components/App';
import { render } from '../../../testsSetup/test-utils';

describe('App component', () => {
    test('snapshot - app component', () => {
        const tree = render(<App />);
        expect(tree).toMatchSnapshot();
    });
});
