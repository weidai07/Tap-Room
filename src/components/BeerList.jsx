import React from 'react';
import Beer from './Beer';
import Grid from '@material-ui/core/Grid';

var masterBeerList = [  
  {  
    day: 'Monday',
    location: 'Capitol Hill',
    hours: '24/7',
    booth: '1A'
  },
  {  
    day: 'Tuesday',
    location: 'Ballard',
    hours: '24/7',
    booth: '2A'
  },
  {  
    day: 'Wednesday',
    location: 'Queen Anne',
    hours: '24/7',
    booth: '3A'
  },
  {  
    day: 'Thursday',
    location: 'Magnolia',
    hours: '24/7',
    booth: '4A'
  },
  {  
    day: 'Friday',
    location: 'University District',
    hours: '24/7',
    booth: '5A'
  },
  {  
    day: 'Saturday',
    location: 'Eastlake',
    hours: '24/7',
    booth: '6A'
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