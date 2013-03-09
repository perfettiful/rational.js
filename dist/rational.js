var bigint={create:function(){return[0]},clone:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b},copy:function(a,b){a=[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c];return a},abs:function(a,b){a[0]=Math.abs(b[0]);return a},str:function(a){return a[0].toString()},toInteger:function(a){return out[0]},fromInteger:function(a){return[parseInt(a)]}},BIGINT_ZERO=bigint.fromInteger(0),BIGINT_ONE=bigint.fromInteger(1);var integer={greatest_common_divisor:function(a,b){if(1===b||1===a)return 1;for(var c;0!==b;)c=b,b=a%b,a=c;return a}};integer.gcd=integer.greatest_common_divisor;var polyrat={create:function(){return[]},fromValues:function(a){var b=[],c;for(c in a){b[c]=[];for(var d in a[c])b[c][d]=rat.fromInteger(a[c][d])}return b},str:function(a){return a[0][0][0].toString()}},POLYRAT_ZERO=polyrat.fromValues([[0]]),POLYRAT_IDENTITY=polyrat.fromValues([[1]]);if(!RAT_ARRAY_TYPE)var RAT_ARRAY_TYPE="undefined"!==typeof Int32Array?Int32Array:Array;
var rat={create:function(){var a=new RAT_ARRAY_TYPE(2);a[0]=0;a[1]=1;return a},clone:function(a){var b=new RAT_ARRAY_TYPE(2);b[0]=a[0];b[1]=a[1];return b},fromValues:function(a,b){var c=new RAT_ARRAY_TYPE(2);c[0]=a;c[1]=b;return rat.normalize(c,c)},copy:function(a,b){a[0]=b[0];a[1]=b[1];return a},set:function(a,b,c){a[0]=b;a[1]=c;return rat.normalize(a,a)},abs:function(a,b){a[0]=Math.abs(b[0]);a[1]=b[1];return a},invert:function(a,b){a[0]=b[1];a[1]=b[0];return a},add:function(a,b,c){a[0]=b[0]*c[1]+
c[0]*b[1];a[1]=b[1]*c[1];return rat.normalize(a,a)},subtract:function(a,b,c){a[0]=b[0]*c[1]-c[0]*b[1];a[1]=b[1]*c[1];return rat.normalize(a,a)}};rat.sub=rat.subtract;rat.multiply=function(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];return rat.normalize(a,a)};rat.mul=rat.multiply;rat.divide=function(a,b,c){a[0]=b[0]*c[1];a[1]=b[1]*c[0];return rat.normalize(a,a)};rat.div=rat.divide;rat.equals=function(a,b){return a[0]===b[0]&&a[1]===b[1]};rat.isGreaterThan=function(a,b){return a[0]*b[1]>b[0]*a[1]};
rat.isLessThan=function(a,b){return a[0]*b[1]<b[0]*a[1]};rat.isNegative=function(a){return 0>a[0]};rat.min=function(a,b,c){rat.isLessThan(b,c)?(a[0]=b[0],a[1]=b[1]):(a[0]=c[0],a[1]=c[1]);return a};rat.max=function(a,b,c){rat.isGreaterThan(b,c)?(a[0]=b[0],a[1]=b[1]):(a[0]=c[0],a[1]=c[1]);return a};rat.scalar_multiply=function(a,b,c){a[0]=b[0]*c;a[1]=b[1];return rat.normalize(a,a)};rat.scalar_divide=function(a,b,c){a[0]=b[0];a[1]=b[1]*c;return rat.normalize(a,a)};
rat.normalize=function(a,b){a[0]=b[0];a[1]=b[1];if(0===a[1])return a;0>a[1]&&(a[0]=-a[0],a[1]=-a[1]);var c=integer.greatest_common_divisor(Math.abs(a[0]),a[1]);1<c&&(a[0]/=c,a[1]/=c);return a};rat.opposite=function(a,b){a[0]=-b[0];a[1]=b[1];return a};rat.neg=rat.negative=rat.opposite;rat.power=function(a,b,c){a[0]=Math.pow(b[0],c);a[1]=Math.pow(b[1],c);return a};rat.pow=rat.power;rat.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]};rat.str=function(a){return 1===a[1]?a[0]:a[0]+"/"+a[1]};
rat.toDecimal=function(a){return a[0]/a[1]};rat.dec=rat.toDecimal;rat.toInteger=function(a){return Math.round(rat.toDecimal(a))};rat.round=rat.toInteger;rat.floor=function(a){return Math.floor(rat.toDecimal(a))};rat.ceil=function(a){return Math.ceil(rat.toDecimal(a))};rat.fromInteger=function(a){var b=new RAT_ARRAY_TYPE(2);b[0]=parseInt(a);b[1]=1;return rat.normalize(b,b)};
rat.fromDecimal=function(a){if(0===a%1)return rat.fromInteger(a);var b=new RAT_ARRAY_TYPE(2);b[1]=Math.pow(10,Math.min(a.toString().split(".")[1].length,8));b[0]=parseInt(a*b[1]);return rat.normalize(b,b)};rat.fromRandom=function(){var a=new RAT_ARRAY_TYPE(2);a[0]=Math.pow(2,31)-Math.floor(Math.random()*Math.pow(2,32)+1);a[1]=Math.floor(Math.random()*Math.pow(2,31)+1);return rat.normalize(a,a)};
rat.sin=function(a,b){if(0===b[1])return rat.copy(a,RAT_ZERO);rat.scalar_multiply(a,b,2);var c=rat.create();rat.pow(c,b,2);rat.add(c,c,RAT_ONE);rat.divide(a,a,c);return a};rat.cos=function(a,b){if(0===b[1])return rat.neg(a,RAT_ONE);var c=rat.create();rat.pow(c,b,2);rat.sub(a,RAT_ONE,c);var d=rat.create();rat.add(d,RAT_ONE,c);rat.divide(a,a,d);return a};
rat.tan=function(a,b){rat.scalar_multiply(a,b,2);var c=rat.create();rat.pow(c,b,2);rat.scalar_multiply(c,c,2);rat.add(a,a,c);rat.pow(c,b,4);rat.sub(c,RAT_ONE,c);rat.divide(a,a,c);return a};
rat.toEgyptian=function(a){a=rat.clone(a);rat.abs(a,a);var b=rat.floor(a);b&&rat.sub(a,a,rat.fromInteger(b));if(!a[0])return b.toString();b||(b="");for(var c=1,d=rat.create();1!==a[0];)c++,d=rat.fromValues(1,c),rat.isGreaterThan(a,d)&&(b&&(b+=" + "),b+=rat.str(d),rat.sub(a,a,d));return!a?!b?"0":b:b?b+" + "+rat.str(a):rat.str(a)};
rat.toBabylonian=function(a){var b="",c=rat.toDecimal(a);a=parseInt(c);for(var c=c-a,d=0,e=0;0<a;)(d=a%60)&&(b=d+" * 60^"+e+(b?" + ":"")+b),a=(a-d)/60,e++;for(e=-1;0<c;)c*=60,d=parseInt(c+1E-13),c-=d,-1E-13>c||(d&&(b+=(b?" + ":"")+d+" * 60^"+e),e--);return b?b:"0"};rat.dump=function(a){var b=rat.create();return rat.str(a)+"\ntoBabylonian\t ~ "+rat.toBabylonian(a)+"\ndecimal:\t ~ "+rat.toDecimal(a)+"\nsin:\t = "+rat.sin(b,a)+"\ncos:\t = "+rat.cos(b,a)+"\ntan:\t = "+rat.tan(b,a)+"\n"};
var RAT_ZERO=rat.fromInteger(0),RAT_ONE=rat.fromInteger(1),RAT_INFINITY=rat.fromValues(1,0),RAT_INFINULL=rat.fromValues(0,0);
