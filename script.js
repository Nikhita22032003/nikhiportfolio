const content = document.querySelector('.content');
  const layer1 = document.querySelector('.layer.img1');
  const layer2 = document.querySelector('.layer.img2');

  content.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = content;
    const x = e.offsetX - width / 2;
    const y = e.offsetY - height / 2;

    layer1.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
    layer2.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
  });