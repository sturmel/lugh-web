import { gsap } from 'gsap';

export function animateText(
  thisEl: HTMLElement,
  elementClass: string,
  delay: number = 0,
  fontHexColor: string = '#000000',
  maskHexColor: string = '#0a369d'
): void {
  const element = thisEl.querySelector<HTMLElement>(elementClass);

  if (!element) {
    console.error(`Element with class "${elementClass}" not found.`);
    return;
  }

  element.style.position = 'relative';
  element.style.color = 'transparent';

  const mask = document.createElement('div');
  mask.style.position = 'absolute';
  mask.style.top = '0';
  mask.style.left = '-5%';
  mask.style.width = '0';
  mask.style.height = '100%';
  mask.style.transform = 'skewX(35deg)';
  mask.style.backgroundColor = maskHexColor;

  element.appendChild(mask);

  gsap.to(mask, {
    duration: 1,
    delay: delay,
    width: 'calc(100% + 3rem)',
    ease: 'power2.ease-in-out',
    onComplete: () => {
      element.style.color = fontHexColor;
      gsap.to(mask, {
        duration: 0.5,
        width: '0%',
        opacity: 0,
        ease: 'power2.inOut',
      });
    },
  });
}