export function gigyaSdk(): string {
  return 'gigya-sdk';
}
//
//
// function exportApiModule(api) {
//    //declare const api with api object descriptor
//    export const [api] = Object
//        .entries(api)
//        .map(([name, value])
//            => ({ name, value }));
//
// }

function exportGigyaModule(gigya: any) {
  let json = JSON.stringify(
    { ...gigya },
    (key, value) => {
      if (typeof value === 'function') {
        return '[FUNCTION]' + value;
      }
      return value;
    },
    '    '
  );

  let moduleJavascript = json.replace(
    /"(\[FUNCTION])?((?:\\.|[^\\"])*)"(:)?/g,
    (match, group1, group2, group3) => {
      if (group1) return JSON.parse('"' + group2 + '"');
      if (group3 && /^\w+$/.test(group2)) return group2 + ':';
      return match;
    }
  );
  // moduleJavascript = 'const mod = ' + moduleJavascript + ';';
  // moduleJavascript += `mod.__proto__ = {${gigya.__proto__.toString()}};`;
  moduleJavascript += 'export default ' + moduleJavascript + ';';
  console.log(moduleJavascript);
}
