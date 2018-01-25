var data =['JavaScript','Ajax','ASP.NET'];

console.log(data[0]); //結果:JavaScript(1番目の要素を取得)

//array2

var data2=['JavaScript',['jQuery','prototype.js'],'ASP.NET'];

console.log(data[1][0]);//結果:jQuery(2番目の要素の中の１番目の要素を取得)


var ary 1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato']; var ary 2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada']; console. log( ary 1. length); // 結果： 6 console. log( Array. isArray( ary 1)); // 結果： true console. log( ary 1. toString()); // 結果： Sato, Takae, Osada, Hio, Saitoh, Sato console. log( ary 1. indexOf(' Sato')); // 結果： 0 console. log( ary 1. lastIndexOf(' Sato')); // 結果： 5 console. log( ary 1. concat( ary 2)); // 結果：[" Sato", "Takae", "Osada", "Hio", "Saitoh", "Sato", "Yabuki", "Aoki", "Moriyama", "Yamada"]
