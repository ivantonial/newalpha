let fontSizeChanger = (function () { 
    let titleFontSize = 32;
    let paragraphFontSize = 16;
    
    return {
        fontSizeUp: function(){
            titleFontSize+=2;
            paragraphFontSize+=2;
            document.getElementById('title').style.fontSize = titleFontSize + 'px';
            document.getElementById('paragraph').style.fontSize = paragraphFontSize + 'px';

        },
        
        fontSizeDown: function(){
            titleFontSize-=2;
            paragraphFontSize-=2;
            document.getElementById('title').style.fontSize = titleFontSize + 'px';
            document.getElementById('paragraph').style.fontSize = paragraphFontSize + 'px';
        }
    }   
} 
)()