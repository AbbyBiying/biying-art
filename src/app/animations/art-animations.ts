import {
  AnimationBuilder,
  AnimationAnimateMetadata,
  AnimationFactory,
  AnimationMetadata, 
  AnimationMetadataType, 
  AnimationPlayer,
  useAnimation, 
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group
} from '@angular/animations'; 

export const artAnimations = [
  trigger('statementAnimation', [   
    transition('void => inactive', [
     style({ backgroundColor: 'gold', transform: 'translateX(40%) scale(1)'}),
     animate('4s ease-in')
    ]),   
  ]),

  trigger('emailAnimation', [ 
    state('void', style({opacity: 0, transform: 'translateX(0) scale(0.8)' })),
    state('right', style({opacity: 1, transform: 'translateX(0) scale(1.1)' })),
    state('left', style({opacity: 1, transform: 'translateX(0) scale(1.1)'})),
    transition('right => left', animate('0.2s 1s ease-in')),
    transition('left => right', animate('0.2s 1s ease-out')),
    transition('void => right', animate('0.2s 1s ease-in')),   
  ]),


  trigger('bioimgAnimation', [ 
    state('void',   style({transform: 'translateX(-10%)'})),
    state('imgin', style({transform: 'translateX(0)'})),
    // state('imgout',   style({transform: 'translateX(-80%)'})),
    transition('imgin => imgout', animate('1s ease-in')),
    // transition('imgout => imgin', animate('1s ease-out')),
    // transition('void => imgin', animate('1s ease-in')),   
  ]),

  trigger('bionameupAnimation', [ 
    state('void',   style({color:'transparent',transform: 'translateY(-200%)'})),
    state('together', style({color:'white',transform: 'translateY(0)'})),
    state('apart',   style({color:'transparent',transform: 'translateY(-200%)'})),
    transition('together => apart', animate('1.5s 0.5s ease-in')),
    transition('apart => together', animate('1.5s 0.5s ease-out')),
    transition('void => together', animate('1.5s 0.5s ease-in')),   
  ]),

  trigger('bionamedownAnimation', [ 
    state('void',   style({color:'transparent', transform: 'translateY(200%)'})),
    state('together', style({color:'white',transform: 'translateY(0)'})),
    state('apart',   style({color:'transparent',transform: 'translateY(200%)'})),
    transition('together => apart', animate('1.5s 0.5s ease-in')),
    transition('apart => together', animate('1.5s 0.5s ease-out')),
    transition('void => together', animate('1.5s 0.5s ease-in')),   
  ]),   

  trigger('bioAnimation', [
    state('biosmall', style({transform: 'translateX(0) scale(1)'})),
    state('biobig',   style({transform: 'translateX(0) scale(1.1)'})),
    transition('biosmall => biobig', animate('1s ease-in')),
    transition('biobig => biosmall', animate('1s ease-out')),
    transition('void => biosmall', [
     style({ transform: 'translateX(-40%) scale(1)'}),
     animate('1s ease-in')
    ]),
  ]),
 
  trigger('cvAnimation', [
    state('void',   style({color:'transparent', transform: 'translateX(-100%)'})),
    state('cvbefore', style({color:'black',transform: 'translateX(10%)'})),
    state('cvafter',   style({transform: 'translateX(0) scale(1.01)'})),
    transition('cvbefore => cvafter', animate('1.8s ease-in')),
    transition('cvafter => cvbefore', animate('1.8s ease-out')),
    transition('void => cvbefore', animate('1.8s ease-in')),   
  ]),

  trigger('artState', [
    state('inactive', style({color: 'white', backgroundColor: 'blue', transform: 'translateX(0) scale(1)'})),
    state('active',   style({color: 'red', backgroundColor: 'yellow', transform: 'translateX(0) scale(4.1)'})),
    transition('inactive => active', animate('1s ease-in')),
    transition('active => inactive', animate('1s ease-out')),
    transition('void => inactive', [
     style({transform: 'translateX(-100%) scale(1)'}),
     animate('1s')
    ]),
    transition('inactive => void', [
     animate('1s', style({transform: 'translateX(100%) scale(1)'}))
    ]),
    transition('void => active', [
     style({transform: 'translateX(0) scale(0)'}),
     animate('2s')
    ]),
    transition('active => void', [
     animate('2s', style({transform: 'translateX(0) scale(0)'}))
    ])
  ]), 

  trigger('myAwesomeAnimation', [
    state('inactive', style({transform: 'translateX(0) scale(1)'})),
    state('active',   style({transform: 'translateX(0) scale(2.1)'})),
    transition('inactive => active', animate('1s ease-in')),
    transition('active => inactive', animate('1s ease-out')),
    transition('void => inactive', [
     style({ backgroundColor: 'blue', transform: 'translateX(-100%) scale(1)'}),
     animate('1s ease-in')
    ]),
    transition('inactive => void', [
     animate('1s', style({ backgroundColor: 'red',transform: 'translateX(100%) scale(2)'}))
    ]),
    transition('void => active', [
     style({transform: 'translateX(0) scale(3)'}),
     animate('7s', style({ backgroundColor: 'green'}))
    ]),
    transition('active => void', [
     animate('7s', style({ backgroundColor: 'black', transform: 'translateX(0) scale(5)'}))
    ])
  ]),

  trigger('artworkflyInOut', [
    state('artworkIn', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate('6s', keyframes([
        style({opacity: 0, transform: 'translateX(-20%) scale(0.8)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px) scale(1)',  offset: 0.3}),
        // style({opacity: 1, transform: 'translateX(0) scale(1)',  offset: 1.0})
      ]))
    ])
  ]),

  trigger('leftrightAnimation', [
    state('void', style({opacity: 0, transform: 'translateX(0) scale(1)'})),
    state('left', style({opacity: 1, transform: 'translateX(0) scale(1)'})),
    state('right', style({opacity: 1, transform: 'translateX(0) scale(1)'})),
    transition('left => right', animate('0.02s 1s ease-in')),
    transition('right => left', animate('0.02s 1s ease-out')),
    transition('void => left', animate('0.05s 1s ease-in')),   
  ]),
 

  trigger('rightleftAnimation', [
    state('void', style({opacity: 0, transform: 'translateX(0) scale(1)' })),
    state('right', style({opacity: 1, transform: 'translateX(0) scale(1)' })),
    state('left', style({opacity: 1, transform: 'translateX(0) scale(1)'})),
    transition('right => left', animate('0.02s 1s ease-in')),
    transition('left => right', animate('0.02s 1s ease-out')),
    transition('void => right', animate('0.05s 1s ease-in')),   
  ]),

  trigger('mySecondAnimation', [
    state('small', style({
      backgroundColor: 'blue',
      transform: 'scale(1)',
    })),
    state('large', style({
      backgroundColor: 'red',
      transform: 'scale(5.2)',
    })),

    transition('small <=> large', animate('1.8s ease-in', keyframes([
      style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
      style({opacity: 1, transform: 'translateY(35px)',  offset: 0.3}),
      style({opacity: 1, transform: 'translateX(25%)',     offset: 1.0})
    ]))),
  ]),

  trigger('parallelFlyInOut', [
    state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
    transition('void => *', [
      style({width: 100, transform: 'translateX(50px)', opacity: 0}),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          width: 1200
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),

    transition('* => void', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ]),

  trigger('shrinkOut', [
    state('in', style({height: '*'})),
    transition('* => void', [
      style({height: '*'}),
      animate('2.5s', style({height: 0}))
    ])
  ]),
]
