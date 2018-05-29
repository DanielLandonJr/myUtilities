export const myUtilities = (() => {
  // public methods
  return {
    guid: (includeDash) => {
      let returnString = '';

      const s4 = () => Math
        .floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

      if (includeDash) {
        returnString = `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`; 
      } else {
        returnString = `${s4() + s4()}${s4()}${s4()}${s4()}${s4() + s4() + s4()}`; 
      }

      return returnString;
    },
    simpleHASH: (item) => {
      // pulled this off github, cant find the repo
      let a = 1
      let c = 0
      let o = '';

      if (item) {
          a = 0;
          /*jshint plusplus:false bitwise:false*/
          for (i = item.length - 1; i >= 0; i--) {
              o = item.charCodeAt(i);
              a = (a<<6&268435455) + o + (o<<14);
              c = a & 266338304;
              a = c!==0?a^c>>21:a;
          }
      }
      return String(a);
    },
    randomHEXColor: () => {
      return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    },
    randomRGBAColor: () => {
      return `
        rgba(
          ${Math.round(Math.random() * 256)}, 
          ${Math.round(Math.random() * 256)}, 
          ${Math.round(Math.random() * 256)}, 
          ${Math.random().toFixed(1)})
      `;
    }
  }
})();