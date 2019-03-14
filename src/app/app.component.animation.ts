import { trigger, state, style, transition, animate } from '@angular/animations';

export const scaleUpDown = trigger('scaleUpDown', [
    state('scaleUp', style({
        transform: 'scale(1)',
        marginBottom: '5px'
    })),
    state('scaleDown', style({
        transform: 'scale(0.8)',
        marginBottom: '0'
    })),
    transition('scaleUp <=> scaleDown', [
        animate('.5s')
    ])
]);

export const showHide = trigger('showHide', [
    state('show', style({
        opacity: 1,
        visibility: 'visible'
    })),
    state('hide', style({
        opacity: 0,
        visibility: 'hidden'
    })),
    transition('show <=> hide', [
        animate('.3s')
    ])
]);

export const slideUpDown = trigger('slideUpDown', [
    state('up', style({
        transform: 'translateY(-80px)'
    })),
    state('down', style({
        transform: 'translateY(0)'
    })),
    transition('up <=> down', [
        animate('.5s'),
    ])
]);
