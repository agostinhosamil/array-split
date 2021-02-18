export function arraySplit (array: any[], group: number = 1): any[] {
  if (!(typeof array === 'object' && array instanceof Array)) {
    throw new TypeError ('arraySplit: parameter 0 musts to be an array')
  }

  const newArray: any[] = []
  group = !isNaN(group) && group >= 1 ? group : 1;

  for (var i = 0; i < array.length; i += group) {
    if (typeof undefined === typeof array[ i ]) {
      continue;
    }

    const currentArray: any[] = []

    for (var n = i; n < group + i; n++) {
      if (typeof undefined !== typeof array[ n ]) {
        currentArray.push( array[ n ] )
      }
    }

    newArray.push( currentArray )
  }

  return newArray
}
