var integer={greatest_common_divisor:function(a,b){if(1===b||1===a)return 1;for(var c;0!==b;)c=b,b=a%b,a=c;return a}};integer.gcd=integer.greatest_common_divisor;integer.fromRandom=function(a){return Math.random()*(1<<a)>>>0};if(!RAT_ARRAY_TYPE)var RAT_ARRAY_TYPE=Array;if(!RAT_INFINITESIMAL_PRECISION)var RAT_INFINITESIMAL_PRECISION=Math.pow(2,56);if(!RAT_MAX_LOOPS)var RAT_MAX_LOOPS=1024;
var rat={create:function(){var a=new RAT_ARRAY_TYPE(2);a[0]=0;a[1]=1;return a},clone:function(a){var b=new RAT_ARRAY_TYPE(2);b[0]=a[0];b[1]=a[1];return b},fromValues:function(a,b){var c=new RAT_ARRAY_TYPE(2);c[0]=a;c[1]=b;return rat.normalize(c,c)},copy:function(a,b){a[0]=b[0];a[1]=b[1];return a},set:function(a,b,c){a[0]=b;a[1]=c;return rat.normalize(a,a)},abs:function(a,b){a[0]=Math.abs(b[0]);a[1]=b[1];return a},invert:function(a,b){a[0]=b[1];a[1]=b[0];return a}};rat.reciprocal=rat.invert;
rat.add=function(a,b,c){b[1]===c[1]?(a[0]=b[0]+c[0],a[1]=b[1]):(a[0]=b[0]*c[1]+c[0]*b[1],a[1]=b[1]*c[1]);return rat.normalize(a,a)};rat.subtract=function(a,b,c){b[1]===c[1]?(a[0]=b[0]-c[0],a[1]=b[1]):(a[0]=b[0]*c[1]-c[0]*b[1],a[1]=b[1]*c[1]);return rat.normalize(a,a)};rat.sub=rat.subtract;rat.multiply=function(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];return rat.normalize(a,a)};rat.mul=rat.multiply;rat.divide=function(a,b,c){a[0]=b[0]*c[1];a[1]=b[1]*c[0];return rat.normalize(a,a)};rat.div=rat.divide;
rat.equals=function(a,b){return a[0]===b[0]&&a[1]===b[1]};rat.approximates=function(a,b){if(rat.equals(a,b))return!0;var c=rat.create();rat.sub(c,a,b);rat.abs(c,c);return rat.isLessThan(c,rat.INFINITESIMAL)};rat.isGreaterThan=function(a,b){return a[0]*b[1]>b[0]*a[1]};rat.isLessThan=function(a,b){return a[0]*b[1]<b[0]*a[1]};rat.isNegative=function(a){return 0>a[0]};rat.min=function(a,b,c){rat.isLessThan(b,c)?(a[0]=b[0],a[1]=b[1]):(a[0]=c[0],a[1]=c[1]);return a};
rat.max=function(a,b,c){rat.isGreaterThan(b,c)?(a[0]=b[0],a[1]=b[1]):(a[0]=c[0],a[1]=c[1]);return a};rat.scalar_multiply=function(a,b,c){a[0]=b[0]*c;a[1]=b[1];return rat.normalize(a,a)};rat.scalar_divide=function(a,b,c){a[0]=b[0];a[1]=b[1]*c;return rat.normalize(a,a)};
rat.normalize=function(a,b){if(isNaN(b[0])||isNaN(b[1]))return rat.clone(rat.INFINULL);if(0<=b[1]){if(a[0]=b[0],a[1]=b[1],0===b[1])return b}else a[0]=-b[0],a[1]=-b[1];var c=integer.greatest_common_divisor(Math.abs(a[0]),a[1]);1<c&&(a[0]/=c,a[1]/=c);return a};rat.opposite=function(a,b){a[0]=-b[0];a[1]=b[1];return a};rat.neg=rat.negative=rat.opposite;
rat.power=function(a,b,c){0<c?(a[0]=Math.pow(b[0],c),a[1]=Math.pow(b[1],c)):0>c?(c=Math.abs(c),a[0]=Math.pow(b[1],c),a[1]=Math.pow(b[0],c)):rat.copy(a,rat.ONE);return a};rat.pow=rat.power;rat.sqrt=function(a,b){return rat.nthRoot(a,b,2)};
rat.nthRoot=function(a,b,c){if(b===rat.ZERO)return rat.copy(a,rat.ZERO);if(b===rat.ONE)return rat.copy(a,rat.ONE);if(b===rat.INFINITY)return rat.copy(a,rat.INFINITY);if(b===rat.INFINULL)return rat.copy(a,rat.INFINULL);var e=rat.isNegative(b);e&&(b[0]=-b[0]);a=rat.copy(a,rat.ONE);for(var d=[1,0,0,1],f=rat.clone(rat.ONE),g=RAT_MAX_LOOPS;!rat.approximates(b,f)&&g--;)rat.isLessThan(b,f)?(d[0]+=d[1],d[2]+=d[3]):(d[1]+=d[0],d[3]+=d[2]),a[0]=d[0]+d[1],a[1]=d[2]+d[3],rat.pow(f,a,c);e&&(b[0]=-b[0],1===c%2&&
rat.neg(a,a));return a};rat.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]};rat.str=function(a){return 1===a[1]?a[0]:a[0]+"/"+a[1]};rat.toDecimal=function(a){return a[0]/a[1]};rat.dec=rat.toDecimal;rat.toInteger=function(a){return Math.round(rat.toDecimal(a))};rat.round=rat.toInteger;rat.floor=function(a){return Math.floor(rat.toDecimal(a))};rat.ceil=function(a){return Math.ceil(rat.toDecimal(a))};rat.fromInteger=function(a){return rat.fromInteger_copy(rat.create(),a)};
rat.fromInteger_copy=function(a,b){a[0]=parseInt(b);a[1]=1;return a};rat.fromIntegerInverse=function(a){return rat.fromInteger_copy(rat.create(),a)};rat.fromIntegerInverse_copy=function(a,b){a[0]=1;a[1]=parseInt(b);return a};rat.fromDecimal=function(a){return rat.fromDecimal_copy(rat.create(),a)};
rat.fromDecimal_copy=function(a,b){b=parseFloat(b);if(0===b)return rat.copy(a,rat.ZERO);if(1===b)return rat.copy(a,rat.ONE);if(Infinity===b)return rat.copy(a,rat.INFINITY);if(isNaN(b))return rat.copy(a,rat.INFINULL);if(0===b%1)return rat.fromInteger_copy(a,b);if(0===1/b%1)return rat.fromIntegerInverse_copy(a,parseInt(1/b));a[0]=1;a[1]=1;var c=0>b;c&&(b=Math.abs(b));for(var e=[1,0,0,1],d=b,f=RAT_MAX_LOOPS;a[0]!==d&&f--;)a[0]>d?(e[0]+=e[1],e[2]+=e[3]):(e[1]+=e[0],e[3]+=e[2]),a[0]=e[0]+e[1],a[1]=e[2]+
e[3],d=b*a[1];c&&rat.neg(a,a);return a};rat.fromRandom=function(a){a[0]=2147483648-Math.floor(4294967296*Math.random()+1);a[1]=Math.floor(4294967296*Math.random()+1);return rat.normalize(a,a)};rat.sin=function(a,b){if(0===b[1])return rat.copy(a,rat.ZERO);rat.scalar_multiply(a,b,2);var c=rat.create();rat.pow(c,b,2);rat.add(c,c,rat.ONE);rat.divide(a,a,c);return a};
rat.cos=function(a,b){if(0===b[1])return rat.neg(a,rat.ONE);var c=rat.create();rat.pow(c,b,2);rat.sub(a,rat.ONE,c);var e=rat.create();rat.add(e,rat.ONE,c);rat.divide(a,a,e);return a};rat.tan=function(a,b){rat.scalar_multiply(a,b,2);var c=rat.create();rat.pow(c,b,2);rat.scalar_multiply(c,c,2);rat.add(a,a,c);rat.pow(c,b,4);rat.sub(c,rat.ONE,c);rat.divide(a,a,c);return a};
rat.toEgyptian=function(a){a=rat.clone(a);rat.abs(a,a);var b=rat.floor(a);b&&rat.sub(a,a,rat.fromInteger(b));if(!a[0])return b.toString();b||(b="");for(var c=1,e=rat.create();1!==a[0];)c++,e=rat.fromValues(1,c),rat.isGreaterThan(a,e)&&(b&&(b+=" + "),b+=rat.str(e),rat.sub(a,a,e));return!a?!b?"0":b:b?b+" + "+rat.str(a):rat.str(a)};
rat.toBabylonian=function(a){var b="",c=rat.toDecimal(a);a=parseInt(c);for(var c=c-a,e=0,d=0;0<a;)(e=a%60)&&(b=e+" * 60^"+d+(b?" + ":"")+b),a=(a-e)/60,d++;for(d=-1;0<c;)c*=60,e=parseInt(c+1E-13),c-=e,-1E-13>c||(e&&(b+=(b?" + ":"")+e+" * 60^"+d),d--);return b?b:"0"};
rat.traceSternBrocot=function(a){var b="";if(a===rat.ZERO||a===rat.ONE||a===rat.INFINITY||a===rat.INFINULL)return b;var c=rat.isNegative(a);c&&(a[0]=-a[0]);for(var e=rat.clone(rat.ONE),d=[1,0,0,1],f=RAT_MAX_LOOPS;!rat.equals(a,e)&&f--;)rat.isLessThan(a,e)?(b+="L",d[0]+=d[1],d[2]+=d[3]):(b+="R",d[1]+=d[0],d[3]+=d[2]),e[0]=d[0]+d[1],e[1]=d[2]+d[3];0>f&&(b+="...");c&&(a[0]=-a[0]);return b};
rat.dumpSternBrocot=function(a){var b="";if(a===rat.ZERO||a===rat.ONE||a===rat.INFINITY||a===rat.INFINULL)return b;var c=rat.isNegative(a);c&&(a[0]=-a[0]);for(var e=rat.clone(rat.ONE),d=[1,0,0,1],f=RAT_MAX_LOOPS;!rat.approximates(a,e)&&f--;)rat.isLessThan(a,e)?(b+="L",d[0]+=d[1],d[2]+=d[3]):(b+="R",d[1]+=d[0],d[3]+=d[2]),e[0]=d[0]+d[1],e[1]=d[2]+d[3],b+=" => "+rat.str(e)+"\n";rat.equals(a,e)||(b+="...");c&&(a[0]=-a[0]);return b};
rat.dump=function(a){rat.create();return"rat\t"+rat.str(a)+"\n~\t"+rat.toDecimal(a)+"\nSB:\t"+rat.traceSternBrocot(a)+"\n"};rat.ZERO=rat.fromInteger(0);rat.ONE=rat.fromInteger(1);rat.NEGONE=rat.fromInteger(-1);rat.INFINITY=rat.fromValues(1,0);rat.INFINULL=rat.fromValues(0,0);rat.INFINITESIMAL=rat.clone([1,rat.INFINITESIMAL_PRECISION]);var RAT_ZERO=rat.ZERO,RAT_ZERO=rat.ONE,RAT_INFINITY=rat.INFINITY,RAT_INFINULL=rat.INFINULL,RAT_INFINITESIMAL=rat.INFINITESIMAL;
