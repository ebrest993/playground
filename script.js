const test = 2;

import {Starry} from './node_modules/starry-rating/dist/server.js';

console.log(test);



var starRatingId = 'ExampleRating'; // Html DOM id + star rating element name
var starRatingEl = document.getElementById(starRatingId);
var starRating = new Starry(starRatingEl, {
    name: starRatingId, // Use a name to determine tooltips for only this Starry element
    labels: [
        'Low',
        'Nice to have',
        'Very nice',
        'Perfect',
        'Excellent'
    ],
    onClear: function () {
        $('[data-name="' + starRatingId + '"] [data-tooltip]').tooltip('dispose');
    },
    onRender: function () {
        $('[data-name="' + starRatingId + '"] [data-tooltip]').tooltip({
            trigger: 'hover',
            placement: 'top'
        });
    },
    onRate: function (rating) {
        console.log(rating)
    },
    icons: {
        // File path, uri or base64 string for `src` attribute
        blank: './dist/icons/blank.svg',
        hover: './dist/icons/hover.svg',
        active: './dist/icons/active.svg'
    }
});
    
module.exports = Starry;