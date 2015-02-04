
 Templates can only be used on the client for now
 since template engine "Blaze" uses the DOM.

 They are defined in html form using handlerbars-like
 syntax and have extended capabilities through the global
 UI package.

 The way it works is that any html file located
 in client/ will be pre-compiled and sent to the client
 using the definition you gave in this file.

 You also could theoretically define the template in /private
 and use it with the Blaze package that is also available
 globally. 
