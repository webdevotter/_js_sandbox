async function myFunc() {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const error = true;
  if(error) {
    const res = await promise; // Wait until promise is resolved
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }   
}

myFunc()
.then(res => console.log(res))
.catch(err => console.log(err));