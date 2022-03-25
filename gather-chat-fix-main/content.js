var $게더채팅창;
var 타이머_검색해조세요 = setInterval(() => {
  const $채팅_아바타_아이콘을_먼저_찾습니다 =
    document.querySelector('img[size="24"]');
  if (!$채팅_아바타_아이콘을_먼저_찾습니다) return;

  $게더채팅창 =
    $채팅_아바타_아이콘을_먼저_찾습니다.closest('div[class*="css"]');
  $게더채팅창.addEventListener("DOMNodeInserted", 스크롤씨움직여주세요);

  clearInterval(타이머_검색해조세요);
}, 5000);

스크롤씨움직여주세요 = () => {
  $게더채팅창.scrollTo({ top: $container.scrollHeight, behavior: "smooth" });
};
