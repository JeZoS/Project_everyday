const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increament = target / 400;

    //console.log(increament);
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increament)}`;
      setTimeout(update, 1);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
