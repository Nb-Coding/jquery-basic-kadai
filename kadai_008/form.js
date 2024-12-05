//ボタンをクリックした際に、テキストボックス内に「クリックしました！」と表示される
$(function() {
    $('.btn').on('click',function() {
        $('.text-box').prop('value','クリックしました！')
    });
});