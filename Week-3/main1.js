function add(a,b)
{
return a+b;
}
function memoize(fn)
{
    const cache=new Map();
    return function(...args){
 const key=args.toString();
 if(cache.has(key))
 {
    return cache.get(key);
 }
 cache.set(key,args.reduce(fn));
 return cache.get(key);
    }
}
    const memoizeAdd= memoize(add);

    console.log(memoizeAdd(100,100));
    console.log(memoizeAdd(100));
    console.log(memoizeAdd(100,200));
    console.log(memoizeAdd(100,100));
    



