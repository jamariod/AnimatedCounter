const counters = document.querySelectorAll(".counter");
const speed = 200;
counters.forEach(counter => {
  const updateCount = () => {
    //The "+" is converting the "String" into an "Int".
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      //"Math.ceil" is used to round up.
      counter.innerText = Math.ceil(count + inc);
      //"setTimeout" calls a function or evaluates an expression after a specified number of milliseconds.
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
