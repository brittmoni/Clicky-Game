import React from 'react';
import bugsBunny from '../images/bugs-bunny.png';
import daffyDuck from '../images/daffy-duck.png';
import elmerFudd from '../images/elmer-fudd.png';
import marvin from '../images/marvin.png';
import pepe from '../images/pepe.png';
import porkyPig from '../images/porky-pig.png';
import roadrunner from '../images/roadrunner.png';
import sylvester from '../images/sylvester.png';
import tas from '../images/tas.png';
import tweety from '../images/tweety.png';
import wileE from '../images/wile-e.png';
import yosemiteSam from '../images/yosemite-sam.png';

function Images() {
  return (
    <div className='container'>
      <img src={bugsBunny} alt='Bugs Bunny'></img>
      <img src={daffyDuck} alt='Daffy Duck'></img>
      <img src={elmerFudd} alt='Elmer Fudd'></img>
      <img src={marvin} alt='Marvin the Martian'></img>
      <img src={pepe} alt='Pepe Le Pew'></img>
      <img src={porkyPig} alt='Porky Pig'></img>
      <img src={roadrunner} alt='Road Runner'></img>
      <img src={sylvester} alt='Sylvester'></img>
      <img src={tas} alt='Tasmanian Devil'></img>
      <img src={tweety} alt='Tweety Bird'></img>
      <img src={wileE} alt='Wile E Coyote'></img>
      <img src={yosemiteSam} alt='Yosemite Sam'></img>
    </div>
  );
}

export default Images;