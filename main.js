const toggleSeekbar = (visibility) => {
  [...document.getElementsByClassName("ytp-chrome-bottom")].forEach((e)=>{
    e.style.display = visibility
  });
};

document.addEventListener('keydown', (e)=>{
  const visibility = document.getElementsByClassName("ytp-chrome-bottom")[0].style.display == 'none' ? 'block' : 'none'
  if (!e.repeat && e.key == 's') toggleSeekbar(visibility)
});

toggleSeekbar('none');

[
  ...document.getElementsByClassName("ytp-chrome-top"),
  ...document.getElementsByClassName("ytp-gradient-top"),
  ...document.getElementsByClassName("ytp-gradient-bottom")
].forEach((e)=>{
  e.style.display = "none"
});
