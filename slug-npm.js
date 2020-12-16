const slug = require('slug');
//Make strings URL-safe.

//bt doing this don't need to write console.log everytime 
let print = console.log.bind(console, '>')

print(slug('नमस्कार, कैसे हो तुम'));
print(slug('unicode ♥ is ☢'));

//by doing this  this symbol is defined as string radioactive
//slug.reset() will reset all extends.
slug.extend({ '☢': 'radioactive' })
// slug.reset()
print(slug('unicode ♥ is ☢'));

print(slug('one 1 two 2 three 3', { remove: /[0-9]/g }))
