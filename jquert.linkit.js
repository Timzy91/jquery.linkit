/* Name : LinkIt
 * Author : Shraddha 
 * Version : 0.1.0
 * license : MIT
 */

(function($){
    $.fn.linkIt = function(options){
       var settings =  $.extend({
            href: null,
            text: null,
            target: '_self'
        }, options);
        
        if(settings.href == null){
            console.log('You need an href option');
            return this;
        }
        
        return this.each(function(){
           var Object = $(this);
            
            if(settings.text == null){
                settings.text = Object.text();
            }
            
            Object.wrap('<a target="'+settings.target+'" href = "'+settings.href+'"></a>').text(settings.text);
        });
    };
}(jQuery));