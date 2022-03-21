$container =
  document.querySelector(".css-94aqvp") ||
  document.querySelector(".css-lq89gz");
scrollHandler = () => {
  $container.scrollTo({ top: $container.scrollHeight, behavior: "smooth" });
};
$container.addEventListener("DOMNodeInserted", scrollHandler);
