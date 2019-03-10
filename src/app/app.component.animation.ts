import { trigger, state, style, transition, animate, keyframes, query, animateChild } from '@angular/animations';

export const showHide = trigger('showHide', [
    state('show', style({
        opacity: 1
    })),
    state('hide', style({
        opacity: 0
    })),
    transition('show <=> hide', [
        animate('.3s')
    ])
]);

export const slideUpDown = trigger('slideUpDown', [
    state('up', style({
        transform: 'translateY(-100px)'
    })),
    state('down', style({
        transform: 'translateY(0)'
    })),
    transition('up <=> down', [
        animate('.5s ease-out'),
    ])
]);

export const colorPickerParentAnimation = trigger('colorPickerParentAnimation', [
    transition('* <=> *', [
        query('@colorPickerAnimation', animateChild()),
    ]),
]);

export const colorPickerAnimation = trigger('colorPickerAnimation', [
    state('show', style({
        opacity: 1
    })),
    state('hide', style({
        opacity: 0
    })),
    transition('show <=> hide', [
        animate('.3s')
    ])
]);
