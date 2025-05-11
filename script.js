// script.js
const descriptions = {
    cihiro: '"荻野 千尋"<br><br>10歳の小学生であり、今作の主人公。<br>さまざまな体験を通して、大きく成長していく。',
    haku: '"ハク"<br><br>街へと迷い込んだ千尋を手助けしてくれるキャラクター。<br>普段は人間の姿をしているが、本当の姿は龍。',
    yubaba: '"湯婆婆"<br><br>神々が集う”油屋”を経営する魔女。<br>千尋とは従業員としての雇用契約を行なっている。',
    kaonasi: '"カオナシ"<br><br>正体不明の生き物。<br>人間の煩悩を模したキャラクターであり作中さまざまなトラブルを巻き起こす。',
    zeniba: '"銭婆"<br><br>湯婆婆の双子の姉。<br>人情家であり、千尋とカオナシを変える大きな存在となる人物。',
    bou: '"坊"<br><br>肥満体型の大きな赤ん坊。<br>湯婆婆の息子であり、魔法でネズミに変えられてしまう。',
    kamazii: '"釜じい"<br><br>油屋のボイラー室で働く老人。<br>千尋に対して親身になってくれる存在であり、大切な場面でさまざまなことを手助けしてくれる。',
    rin: '"リン"<br><br>油屋で唯一の人間の千尋を受け入れ対等に接してくれる少女。<br>千尋の面倒を見てくれる。',
    susuwatari: '"すすわたり"<br><br>煤から生み出された生物。<br>石炭を運ぶ仕事をしており、仕事をしないと魔法の効果で消えてしまう。'
};

function showDescription(character) {
    const descriptionContainer = document.getElementById('description-container');
    const descriptionElement = document.getElementById('description');
    descriptionElement.innerHTML = descriptions[character]; // innerHTMLを使用して改行を反映
    descriptionContainer.style.display = 'block';
}

// スクロールイベントリスナーを追加
window.addEventListener('scroll', hideDescriptionOnAction);

// ページ内の他のクリックイベントリスナーを追加
document.addEventListener('click', hideDescriptionOnAction);


