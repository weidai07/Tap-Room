import React from 'react';
import Beer from './Beer';
import Grid from '@material-ui/core/Grid';

var masterBeerList = [  
  {  
    day: 'Sunday',
    location: 'Seattle',
    hours: 'Ballard',
    booth: '1A'
  },
  {  
    day: 'Sunday',
    location: 'Seattle',
    hours: 'Ballard',
    booth: '1A'
  },
  {  
    day: 'Sunday',
    location: 'Seattle',
    hours: 'Ballard',
    booth: '1A'
  },
  {  
    day: 'Sunday',
    location: 'Seattle',
    hours: 'Ballard',
    booth: '1A'
  },
  {  
    day: 'Sunday',
    location: 'Seattle',
    hours: 'Ballard',
    booth: '1A'
  },
  {  
    day: 'Sunday',
    location: 'Seattle',
    hours: 'Ballard',
    booth: '1A'
  }
];

function BeerList() {
  return (
    <div>
      <Grid container spacing={2}>
        {masterBeerList.map((beer, index) => 
          <Grid item xs={6}>
            <Beer day={beer.day}
              location={beer.location}
              hours={beer.hours}
              booth = {beer.booth}
              key = {index}/>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
export default BeerList;