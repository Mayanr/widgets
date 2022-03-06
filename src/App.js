import React from 'react';
import Accordion from './components/Accordion'

const items = [
    {
        title: 'What is React?',
        content: 'React is a FE JS framework.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite among software engineers.'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by create components.'
    }
]
export default () => {
    return <Accordion items={items} />
};