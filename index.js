const readlineSync=require("readline-sync"),storyMap=require("./storyMap");let u="${username}",g=!1;const checkIfGuilty=e=>void 0===e.guilty||e.guilty===g;function showScene(e){const t=storyMap[e],n=t.substitution?u:"";if(console.log(t.text,n),t.action&&perform(t.action),t.choices){showPrompt(t.choices.filter(checkIfGuilty))}}function showPrompt(e){let t=e.map(e=>e.text);const n=readlineSync.keyInSelect(t,"",{cancel:"Quit",hideEchoBack:!0,mask:""});n<0?(console.log("Thanks for reading!"),process.exit()):showScene(e[n].next)}function perform(e){switch(e){case"enterName":const t="Enter username\n(or press Ctrl-C to exit): ";return u=readlineSync.question(t)||"${username}",showScene("audience");case"steal":return g=!0}}showScene("start");