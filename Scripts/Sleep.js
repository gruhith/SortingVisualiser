function sleep(milisec) { 
  return new Promise(resolve => { 
      setTimeout(() => { resolve('') }, milisec); 
  }) 
}

export {sleep};