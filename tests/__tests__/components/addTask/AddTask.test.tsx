import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { AddTask } from '../../../../src/components/lists/addTask/AddTask';
import { render } from '../../../testsSetup/test-utils';

describe('Add task component', () => {
    test('snapshot - Add task component', () => {
        const tree = render(<AddTask indexOfList={0} />);
        expect(tree).toMatchSnapshot();
    });

    test('Add task - input task name(with enter press)', () => {
        render(<AddTask indexOfList={0} />);
        const inputEl = screen.getByLabelText(/input task name/i);
        userEvent.click(inputEl);
        userEvent.type(inputEl, 'some text for input 123!@#$%^&*()_');
        expect(inputEl).toHaveValue('some text for input 123!@#$%^&*()_');
        fireEvent.keyPress(inputEl, { key: 'Enter', keyCode: 13 });
        expect(inputEl).toHaveValue('');
    });

    test('Add task - input task name(with adding button click)', () => {
        render(<AddTask indexOfList={0} />);
        const inputEl = screen.getByLabelText(/input task name/i);
        userEvent.click(inputEl);
        userEvent.type(inputEl, 'some text for input 123!@#$%^&*()_');
        expect(inputEl).toHaveValue('some text for input 123!@#$%^&*()_');
        userEvent.click(screen.getByText(/add task/i));
        expect(inputEl).toHaveValue('');
    });
});
