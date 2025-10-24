import React from 'react'
import{render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Landing_page/home/Hero';

//Test suite

describe('Hero Component',()=>{
    test('renders hero image', ()=>{
        render(<Hero/>)

        const heroImage = screen.getByAltText('Hero image');
        expect(heroImage).toBeIntheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
    })
})