import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen } from '@testing-library/dom';
import { NameInputField } from '../../../../src/components/NameInputField';
import { render } from '../../../testsSetup/test-utils';

describe('Input field component', () => {
  test('snapshot - List Input field component', () => {
    const tree = render(
      <NameInputField index={0} typeOfElement="list" taskValue="" />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('snapshot - Task Input field component', () => {
    const tree = render(
      <NameInputField index={[0, 0]} typeOfElement="task" taskValue="0 123" />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('List input - show and hide(with enter) input field', () => {
    render(<NameInputField index={0} typeOfElement="list" taskValue="" />);
    const inputEl = screen.getByLabelText(/add new list/i);
    expect(inputEl).toHaveClass(
      'inputContainer__inputName inputContainer__inputName_hideInput',
    );
    userEvent.click(inputEl);
    expect(inputEl).toHaveClass('inputContainer__inputName');
    fireEvent.keyPress(inputEl, { key: 'Enter', keyCode: 13 });
    expect(inputEl).toHaveClass(
      'inputContainer__inputName inputContainer__inputName_hideInput',
    );
  });

  test('List input - show and hide(with tab) input field', () => {
    render(<NameInputField index={0} typeOfElement="list" taskValue="" />);
    const inputEl = screen.getByLabelText(/add new list/i);
    expect(inputEl).toHaveClass(
      'inputContainer__inputName inputContainer__inputName_hideInput',
    );
    userEvent.click(inputEl);
    expect(inputEl).toHaveClass('inputContainer__inputName');
    userEvent.tab();
    expect(inputEl).toHaveClass(
      'inputContainer__inputName inputContainer__inputName_hideInput',
    );
  });

  test('List input - input some value', () => {
    render(<NameInputField index={0} typeOfElement="list" taskValue="" />);
    const inputEl = screen.getByLabelText(/add new list/i);
    userEvent.click(inputEl);
    userEvent.type(inputEl, 'some text for input 123!@#$%^&*()_+');
    expect(inputEl).toHaveValue('some text for input 123!@#$%^&*()_+');
    userEvent.tab();
    expect(inputEl).toHaveValue('some text for input 123!@#$%^&*()_+');
  });

  test('Task input - show and hide(with enter) input field', () => {
    render(
      <NameInputField index={[0, 0]} typeOfElement="task" taskValue="0 123" />,
    );
    const inputEl = screen.getByLabelText(/add new task/i);
    expect(inputEl).toHaveClass(
      'inputContainer__inputName inputContainer__inputName_hideInput',
    );
    userEvent.click(inputEl);
    expect(inputEl).toHaveClass('inputContainer__inputName');
    fireEvent.keyPress(inputEl, { key: 'Enter', keyCode: 13 });
    expect(inputEl).toHaveClass(
      'inputContainer__inputName inputContainer__inputName_hideInput',
    );
  });

  test('Task input - show and hide(with tab) input field', () => {
    render(
      <NameInputField index={[0, 0]} typeOfElement="task" taskValue="0 123" />,
    );
    const inputEl = screen.getByLabelText(/add new task/i);
    expect(inputEl).toHaveClass(
      'inputContainer__inputName inputContainer__inputName_hideInput',
    );
    userEvent.click(inputEl);
    expect(inputEl).toHaveClass('inputContainer__inputName');
    userEvent.tab();
    expect(inputEl).toHaveClass(
      'inputContainer__inputName inputContainer__inputName_hideInput',
    );
  });

  test('Task input -input some value', () => {
    render(
      <NameInputField index={[0, 0]} typeOfElement="task" taskValue="0 123" />,
    );
    const inputEl = screen.getByLabelText(/add new task/i);
    userEvent.click(inputEl);
    userEvent.type(inputEl, 'some text for input 123!@#$%^&*()_+');
    expect(inputEl).toHaveValue('0 123some text for input 123!@#$%^&*()_+');
    fireEvent.keyPress(inputEl, { key: 'Enter', keyCode: 13 });
    expect(inputEl).toHaveValue('0 123some text for input 123!@#$%^&*()_+');
  });
});
