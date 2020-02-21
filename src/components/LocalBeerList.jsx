import React from 'react';
import LocalBeer from './LocalBeer';


var availableBeer = [  
  {  
    month: 'January',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  },
  {  
    month: 'February',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  },
  {  
    month: 'March',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  },
  {  
    month: 'April',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  },
  {  
    month: 'May',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  },
  {  
    month: 'June',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  },
  {  
    month: 'July',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  },
  {  
    month: 'August',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  },
  {  
    month: 'September',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  },
  {  
    month: 'October',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  },
  {  
    month: 'November',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  },
  {  
    month: 'December',
    selection: [  
      'Beer Type 1',
      'Beer Type 2'
    ]
  }
];
function LocalBeerList() {
  return(
    <div>
      <hr />
      {availableBeer.map((localBeer, index) => 
        <LocalBeer month={localBeer.month}
          selection = {localBeer.selection}
          key = {index} />
      )}
    </div>
  );
}

export default LocalBeerList;