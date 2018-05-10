import { trigger,
    state,
    style,
    transition,
    animate,
    AnimationTriggerMetadata} from '@angular/animations';
 

  export const routerTransition: AnimationTriggerMetadata = 

    trigger('routerTransition', [

    state('void', style({position:'absolute', width:'100%', height:'100%', opacity: 0}) ),
    state('*', style({position:'absolute', width:'100%', height:'100%', opacity: 1}) ),


    // When user enter, page starts at 20 below then pushes up 
    transition(':enter', [ 
        style({transform: 'translateY(20%)', opacity: 0}),
        animate('0.8s ease-in-out', style({transform: 'translateY(0%)', opacity: 1}))
    ]),

    transition(':leave', [  // before 2.1: transition('* => void', [
        style({transform: 'translateY(0%)'}),
        animate('0.8s ease-in-out', style({transform: 'translateY(-20%)', opacity: 0}))
    ])

  ]);