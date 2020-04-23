(() => {
    const pros = `device https://static.hltv.org//images/playerprofile/bodyshot/compressed/7592.png
s1mple https://static.hltv.org//images/playerprofile/bodyshot/compressed/7998.png
Golden https://static.hltv.org/images/playerprofile/thumb/11110/400.jpeg?v=7
dupreeh https://static.hltv.org//images/playerprofile/bodyshot/compressed/7398.png
Aleksib https://static.hltv.org/images/playerprofile/thumb/9816/400.jpeg?v=7
woxic https://static.hltv.org//images/playerprofile/bodyshot/compressed/8574.png
kennyS https://static.hltv.org//images/playerprofile/bodyshot/compressed/7167.png
Adren https://static.hltv.org/images/playerprofile/thumb/334/400.jpeg?v=9
Boombl4 https://static.hltv.org//images/playerprofile/bodyshot/compressed/11840.png
Magisk https://static.hltv.org//images/playerprofile/bodyshot/compressed/9032.png
ropz https://static.hltv.org//images/playerprofile/bodyshot/compressed/11816.png
Perfecto https://static.hltv.org//images/playerprofile/bodyshot/compressed/16947.png
huNter- https://static.hltv.org//images/playerprofile/bodyshot/compressed/3972.png
ZywOo https://static.hltv.org/images/playerprofile/thumb/11893/400.jpeg?v=4
flamie https://static.hltv.org//images/playerprofile/bodyshot/compressed/7594.png
frozen https://static.hltv.org//images/playerprofile/bodyshot/compressed/9960.png
coldzera https://static.hltv.org/images/playerprofile/thumb/9216/400.jpeg?v=10
flusha https://static.hltv.org/images/playerprofile/thumb/3055/400.jpeg?v=8
electronic https://static.hltv.org//images/playerprofile/bodyshot/compressed/8918.png
JW https://static.hltv.org/images/playerprofile/thumb/3849/400.jpeg?v=9
Xyp9x https://static.hltv.org//images/playerprofile/bodyshot/compressed/4954.png
JaCkz https://static.hltv.org//images/playerprofile/bodyshot/compressed/284.png
gla1ve https://static.hltv.org//images/playerprofile/bodyshot/compressed/7412.png
karrigan https://static.hltv.org//images/playerprofile/bodyshot/compressed/429.png
twist https://static.hltv.org//images/playerprofile/bodyshot/compressed/7443.png
nexa https://static.hltv.org//images/playerprofile/bodyshot/compressed/9618.png
AmaNEk https://static.hltv.org//images/playerprofile/bodyshot/compressed/9616.png
FalleN https://static.hltv.org/images/playerprofile/thumb/2023/400.jpeg?v=17
KRIMZ https://static.hltv.org/images/playerprofile/thumb/7528/400.jpeg?v=9
NiKo https://static.hltv.org/images/playerprofile/thumb/3741/400.jpeg?v=10
Brollan https://static.hltv.org/images/playerprofile/thumb/13666/400.jpeg?v=7
chrisJ https://static.hltv.org/images/playerprofile/bodyshot/compressed/2730.png`
        .split('\n').map(row => row.replace(/\s/g, '')).map(row => row.split('https:'));

    function bindPlayer(name, avatar) {
        return { "tagName": "A", "attributes": [{ "name": "class", "value": "tbs_card PRO-игроки" }], "children": [{ "tagName": "DIV", "children": [{ "tagName": "IMG", "attributes": [{ "name": "class", "value": "avatar" }, { "name": "src", "value": "https:" + avatar }] }] }, { "tagName": "NAME", "children": [{ "tagName": "#text", "textContent": name }] }] }
    }

    const page = { tagName: "DIV", attributes: [{ name: "id", value: "statistics" }], children: [{ "tagName": "DIV", "attributes": [{ "name": "id", "value": "players-list" }], children: pros.map(pro => bindPlayer(...pro)) }] }
    const PAGE_NAME = 'pro';
    window._router.bind(page, PAGE_NAME);
    window._router.goto(PAGE_NAME);
})();
