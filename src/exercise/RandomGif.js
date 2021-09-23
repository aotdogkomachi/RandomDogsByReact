import React from "react";

// GIF共有サイトから持ってきたGIF ID
const gifIds = ["18", "17", "16", "19", "20", "21", "22"];

// 上記配列の要素をランダムに返す
function getGifId() {
  const max = gifIds.length;
  const index = Math.floor(Math.random() * Math.floor(max));
  return gifIds[index];
}

function Gif({ id }) {
  const src = `https://ailovei.com/wp-content/uploads/2014/11/%E5%8F%AF%E6%84%9B%E3%81%84%E7%8A%ACgif${id}.gif`;
  return <img src={src} alt="" />;
}

function Appp() {
  // GIF IDを表すstateを生成する
  const [id, setId] = React.useState(gifIds[0]);

  const handleClick = () => {
    setId(getGifId());
  };

  return (
    <>
      <p>
        <button onClick={handleClick}>play</button>
      </p>
      <Gif id={id} />
    </>
  );
}

export default Appp;
