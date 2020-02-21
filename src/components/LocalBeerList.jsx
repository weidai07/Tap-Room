import React from 'react';
import LocalBeer from './LocalBeer';


var availableProduce = [  
  {  
    month: 'January',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  },
  {  
    month: 'February',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  },
  {  
    month: 'March',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  },
  {  
    month: 'April',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  },
  {  
    month: 'May',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  },
  {  
    month: 'June',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  },
  {  
    month: 'July',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  },
  {  
    month: 'August',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  },
  {  
    month: 'September',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  },
  {  
    month: 'October',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  },
  {  
    month: 'November',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  },
  {  
    month: 'December',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  }
];
function LocalBeerList() {
  return(
    <div>
      <hr />
      {availableProduce.map((localBeer, index) => 
        <LocalBeer month={localBeer.month}
          selection = {localBeer.selection}
          key = {index} />
      )}
    </div>
  );
}

export default LocalBeerList;