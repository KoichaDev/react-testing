import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TransactionCreateStepTwo from './TransactionCreateStepTwo';


// You can do simple unit test one-by-one
// test('On initial render, the pay button is disabled', async () => {
//     render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}} />);

//     // expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();

//     expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled();
// })

// * This could be actually more preferred way write this integration test as a whole, because it resembles more of how a user would use our application
// ! Keep in mind that integration test is not about combining our unit tests into one test, however, if you find that you are able to combine unit test 
// ! into one integration test, since it will resemble more realistic user flow, then it would be highly recommend to do!
// ! From an practical point of view, you will often find that just a few unit tests are more much better than having a hundreds of very small and concise unit tests
test('if an amount and note is is entered, then pay button becomes enabled', async () => {
    // "Arranging" component
    render(<TransactionCreateStepTwo sender={{ id: '5' }} receiver={{ id: '5' }} />);

    expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled();

    // "Act" such as user event, typing, clicking etc.
    userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

    // "assertion" - what to expect from the "arranging" and "act"
    expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled();


})