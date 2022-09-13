const toggleSeekbar = (visibility) => {
  [...document.getElementsByClassName("ytp-chrome-bottom")].forEach((e)=>{
    e.style.display = visibility
  });
};

document.addEventListener('keydown', (e)=>{
  console.log(e.key)
  if (!e.repeat && e.key == 's') toggleSeekbar('block')
  if (!e.repeat && e.key == 'h') toggleSeekbar('none')
});

toggleSeekbar('none');

[
  ...document.getElementsByClassName("ytp-chrome-top"),
  ...document.getElementsByClassName("ytp-gradient-top"),
  ...document.getElementsByClassName("ytp-gradient-bottom")
].forEach((e)=>{
  e.style.display = "none"
});
