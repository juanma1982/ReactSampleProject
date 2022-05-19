import { render, screen } from '@testing-library/react';

import MeetupItem from './MeetupItem';

test('render "To Favorites" button', () =>{
    render(<MeetupItem/>);    
    const buttonElement = screen.getAllByRole("button");    
    expect(buttonElement).not.toBeNull();
})