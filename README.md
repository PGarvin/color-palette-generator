# color-palette-generator

There are sites out there that have color palettes, but this quirky project creates color palettes on the fly, randomly. It uses the Math.random() function to generate random colors in both rgba and hex code formats. The number of colors generated depends on the selected value in the dropdown menu. The minimum number is two, and the maximum number is set at five.

Each time the button is clicked or the dropdown is changed, three divs are cleared:
-The recipe div, displaying the colors in rgb and hex format
-The div holding the vertical bars
-The div holding the horizontal bars

The palette function then populates those divs with the updated colors.

There is no rhyme or reason to the colors, which is why some palettes are more striking than others. This can be good if you're looking for "outside-the-box" color pairings that you might not have considered. It can also be good if you're bored and just want to click through all the weird, random possibilities.