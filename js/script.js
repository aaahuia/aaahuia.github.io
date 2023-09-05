const $masonry=document.querySelector('.masonry')
const generateHtml=(arr)=>{
    let str=""
    // arr.forEach(url => {
    //     str+=`<img src=${url} />`
    // });
    arr.forEach(url => {
        str+=`<div class="item">
        <img src=${url}>
      </div>`
    });
    return str
}
const data=['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5ddd9ee4-25d5-4a3c-b2a3-ea1e6aa5fbe1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696498850&t=1c95365d7e27b1d6ee93d760cd3af116',
'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Ffd08a898-9212-4976-9b9d-5634b75d41bc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696498850&t=27d0d94d6d5c2a93e08068bf7c193249',
'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F970930ed-8a06-415f-b7af-2578072aaf1b%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696498850&t=4a0e1059834dbb1d665b053a80917c75',
'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fcb08699a-5e2b-4145-8a23-b9d3b4da9382%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696498850&t=3fecdf06c53ebd9156bacf5e568248f1',
'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F04%2F20181204194710_KfScw.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696498850&t=5ce3a6b8efec37f5c1807d5299a936bd',
'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F03%2F20160803151703_cB2PL.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696498850&t=2cea575d0a8ae03d8f786775e012a264',
'https://img0.baidu.com/it/u=364565778,2908478501&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F14%2F20200314130325_jzjjg.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696498942&t=810ea0c914ef6e857a37d73c2fc84538',
'https://nimg.ws.126.net/?url=https://dingyue.ws.126.net/2021/0604/3edda3afj00qu68th0027d200sg00lcg00it00e3.jpg&thumbnail=650x2147483647&quality=80&type=jpg',
'https://pics5.baidu.com/feed/29381f30e924b899b365f6b9abe49e930b7bf63b.jpeg?token=0cff26d442762c40cd0ccb0422fae098',
'https://cimg.163.com/ent/0506/24/twz8.jpg',
'https://pics1.baidu.com/feed/3ac79f3df8dcd100542319c522f4f619b8122f24.png?token=49de90651b15ae5213d6c2facfbe7c2e',
'https://bkimg.cdn.bcebos.com/pic/4610b912c8fcc3ce5e11d1da9245d688d53f2001',
'https://pic.rmb.bdstatic.com/1e95d307d7cc081d8a809d320e024e49.png',
'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F26%2F20180826090218_oekfk.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696498942&t=9d9fc842d4f8a861a6fa6734b02e6541',
'https://gd-hbimg.huaban.com/6186d8dbf29261e20bdea5a2aa3464f794063ab5aac8-drFvgZ_fw658',
'https://n.sinaimg.cn/sinacn12/600/w800h600/20180607/4f66-hcqccip9460976.jpg',
'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0803%2F7ce32cd0j00qx9ef7005kc000m500w2m.jpg&thumbnail=650x2147483647&quality=80&type=jpg',
'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F01%2F20150501085353_5amw2.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696498942&t=364e7a22bb1d323f22c379d6b0b238f3',]
$masonry.innerHTML=generateHtml(data)