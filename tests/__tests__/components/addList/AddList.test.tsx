import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { AddList } from '../../../../src/components/addList/AddList';
import { render } from '../../../testsSetup/test-utils';

let addListFunc: Function;
beforeEach(() => {
    addListFunc = jest.fn();
});

describe('Add list component', () => {
    test('snapshot - add list component', () => {
        const tree = render(<AddList listsAdding={addListFunc} />);
        expect(tree).toMatchSnapshot();
    });

    test('click on adding list button one time', () => {
        render(<AddList listsAdding={addListFunc} />);
        userEvent.click(screen.getByText(/add another list/i));
        expect(addListFunc).toHaveBeenCalledTimes(1);
    });

    test('click on adding list button two times', () => {
        render(<AddList listsAdding={addListFunc} />);
        userEvent.click(screen.getByText(/add another list/i));
        userEvent.click(screen.getByText(/add another list/i));
        expect(addListFunc).toHaveBeenCalledTimes(2);
    });
});
