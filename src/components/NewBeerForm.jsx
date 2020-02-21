import React from 'react';

function NewBeerForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='location'
          placeholder='Pint Size'/>
        <textarea
          id='issue'
          placeholder='Are you of age 21 or older?'/>
        <button type='submit'>Enter</button>
      </form>
    </div>
  );
}

export default NewBeerForm; 