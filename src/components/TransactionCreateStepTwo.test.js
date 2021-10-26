import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TransactionCreateStepTwo from './TransactionCreateStepTwo';

test('On initial render, the pay button is disabled', async () => {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}} />);

    // expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();

    expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled();
})

test('if an amount and note is is entered, then pay button becomes enabled', async () => {
    // "Arranging" component
    render(<TransactionCreateStepTwo sender={{ id: '5' }} receiver={{ id: '5' }} />);

    // "Act" such as user event, typing, clicking etc.
    userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

    // "assertion" - what to expect from the "arranging" and "act"
    expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled();


})