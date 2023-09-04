<script>
// 图像集合
var imageCollection = [
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5ddd9ee4-25d5-4a3c-b2a3-ea1e6aa5fbe1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696388671&t=f261d20a1f812f48b02a4859c61bd511',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F03%2F20160803151703_cB2PL.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696388766&t=9459323306c2a950f452504c2fde63a3',
    'https://c-ssl.dtstatic.com/uploads/item/201705/28/20170528210913_UTn82.thumb.1000_0.png',
    'https://hbimg.b0.upaiyun.com/3ab7c23f306be2b4ae6a21f86010988ce3afa210d6be-6XhtBA_fw658',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8f3425b7-70a3-4efb-85e3-f8774d59052f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696388859&t=1de45e47f53e5a29e01bc6a565feb7b2',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F39c86797-8b17-4549-a029-19a623c10043%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696388859&t=baa06d1243332192be6982c3dc6efe3b',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F86efaaf2-3b1d-47d6-9ffa-4849b06d3de2%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696388860&t=6dbd832d6c152243efd8f1b695e70c76',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F1d8dc53c-f242-4cdd-a8a9-d647eda908f9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696388860&t=4ee50073a8d138b72108fe9e3c5aab55',
    'https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5001ff50b51da81cb38db3d84',
    'https://p4.itc.cn/images01/20200914/fa30c21b5b054e69afb00d0c26e42da0.jpeg',
    'https://bkimg.cdn.bcebos.com/pic/1ad5ad6eddc451da81cb19d329b24566d016092494fe',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014143422_xMyhK.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696388949&t=5c20014cefe964da5f97214c997262b9',
    
    // 添加更多的图像URL
];

// 动态生成瀑布流中的图片
var gallery = document.querySelector('.gallery');
if (gallery) {
    imageCollection.forEach(function(imageUrl) {
    var column = document.createElement('div');
    column.className = 'column';

    var photo = document.createElement('div');
    photo.className = 'photo';

    var image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Photo';

    photo.appendChild(image);
    column.appendChild(photo);
    gallery.appendChild(column);
    });
};
</script>