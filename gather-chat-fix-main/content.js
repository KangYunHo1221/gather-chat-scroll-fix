$container = document.querySelector('.css-94aqvp');
scrollHandler = () => {
  $container.scrollTo({ top: $container.scrollHeight, behavior: 'smooth' });
};
$container.addEventListener('DOMNodeInserted', scrollHandler);
