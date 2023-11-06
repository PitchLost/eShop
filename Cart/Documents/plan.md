# cart 

Future implications

I think that by using a array we will be able to make the cart with less hardcode and just store the items in the array. 





When a item is added it should create a new div which will then be appended to cartItems instead of cartRows. At the moment cartRows is 
just a horizontal line instead of having any height to it. This is good for styling a single element to but not multiple. The con with increasing the height on the cartRows is it may add scroll to the page at somepoint. Which we really don't want down the bottom. So Im thinking that by creating a new div each time in appending it to cartItems and not cartRows should make it go below the cartRows div.