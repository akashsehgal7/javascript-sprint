let shery = (function(){
    let score = 0;
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        },
     };
})();

shery.getScore();     
shery.setScore(100);
shery.getScore();  