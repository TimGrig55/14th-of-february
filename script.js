const sparklesTl = gsap.timeline({repeat: -1});

sparklesTl.to('.flower__sparkle:nth-child(3n)', { y: 10, opacity: 0.5, duration: 2})
sparklesTl.to('.flower__sparkle:nth-child(3n-1)', { y: -5, opacity: 0.8, duration: 2, delay: -2})
sparklesTl.to('.flower__sparkle:nth-child(3n-2)', { y: 5, opacity: 0.3, duration: 2, delay: -2})
sparklesTl.to('.flower__sparkle:nth-child(3n)', { y: -10, opacity: 0.8, duration: 2})
sparklesTl.to('.flower__sparkle:nth-child(3n-1)', { y: 10, opacity: 0.6, duration: 2, delay: -2})
sparklesTl.to('.flower__sparkle:nth-child(3n-2)', { y: 10, opacity: 0.3, duration: 2, delay: -2})
sparklesTl.to('.flower__sparkle', { y: 0, opacity: 0.5, duration: 2})

const flowerTl = gsap.timeline({repeat: -1});

flowerTl.to('.flower', {y: 20, duration: 3})
flowerTl.to('.flower', {y: 0, duration: 3})
flowerTl.to('.flower__head', {rotateX: '70deg', duration: 3, delay: -6});
flowerTl.to('.flower__head', {rotateX: '75deg', duration: 3, delay: -3});

const petalsTl = gsap.timeline({repeat: -1});

petalsTl.to('.flower__petal--back-left', { rotateZ: '-90deg', ease: 'linear', duration: 3})
petalsTl.to('.flower__petal--back-right', { rotateZ: '-90deg', ease: 'linear', duration: 3, delay: -3})
petalsTl.to('.flower__petal--front-left', { rotateZ: '-90deg', ease: 'linear', duration: 3, delay: -3})
petalsTl.to('.flower__petal--front-right', { rotateZ: '-90deg', ease: 'linear', duration: 3, delay: -3})

const steamTl = gsap.timeline({repeat: -1});

steamTl.to('.flower__seeds', {rotateZ: '-360deg', ease: 'linear', duration: 12})
steamTl.to('.flower__leaf--first', {rotateY: '-360deg', zIndex: 1, ease: 'linear', duration: 12, delay: -12})
steamTl.to('.flower__leaf--second', {rotateY: '360deg', zIndex: 0, ease: 'linear', duration: 12, delay: -12})
steamTl.to('.flower__steam-end', {x: '100%', rotateY: '90deg', ease: 'linear', duration: 3, delay: -12})
steamTl.from('.flower__steam-end', {x: '-100%', rotateY: '-90deg', ease: 'linear', duration: 3, delay: -3})

const leafShadowTl = gsap.timeline({repeat: -1})

leafShadowTl.fromTo('.flower__leaf--first', {filter: 'brightness(1)'}, {filter: 'brightness(0.5)', duration: 3})
leafShadowTl.to('.flower__leaf--first', {filter: 'brightness(1)', duration: 3})
leafShadowTl.fromTo('.flower__leaf--second', {filter: 'brightness(1)'}, {filter: 'brightness(0.5)', duration: 3})
leafShadowTl.to('.flower__leaf--second', {filter: 'brightness(1)', duration: 3})