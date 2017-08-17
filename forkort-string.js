var article = "Lorem ipsum dolor sit amet, wisi faucibus. Leo vehicula, malesuada ut in suspendisse fringilla cras, ligula mauris mauris maecenas, nibh fames.";

function shortArticle(rArticle, rLength) {
    var rArticleLen = rArticle.length;
    if(rArticleLen > rLength) {
        article = rArticle.substr(0, rLength);
        console.log(article + '...');
    } else {
        console.log(rArticle);
    }
}

shortArticle(article, 20);