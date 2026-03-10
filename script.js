document.fonts.ready.then(() => {
  document.documentElement.style.visibility = 'visible'
})

gsap.from("h1, body", { 
  opacity: 0, 
  y: 50, 
  duration: 1, 
  
  ease: "elastic.out(1, 0.5)" 
});