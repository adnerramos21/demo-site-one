import { trigger, state, style, transition, animate, keyframes, query, animateChild } from '@angular/animations';

export const mainAnimation = trigger('mainAnimation', [
    transition('* <=> *', [
        query('.content img', [
            style({ transform: 'scale(1.3)' })
        ])
    ])
]);

export const scaleUpDown = trigger('scaleUpDown', [
    state('scaleUp', style({
        transform: 'scale(1)'
    })),
    state('scaleDown', style({
        transform: 'scale(0.8)'
    })),
    transition('scaleUp <=> scaleDown', [
        animate('.5s ease-out')
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

