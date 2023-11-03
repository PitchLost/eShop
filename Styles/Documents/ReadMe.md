# styles Docs

1. Each Files Contents: 
cart.css contatins all the styling for the cart section of the website. items.css has the styling for the items that can be purchased. 
navigation.css is for the Nav Bar and styles.css is for general styles (such as background smooth scrolling etc etc)

2. Organisation: 
I Have attemped to oragnize the CSS by how they appear on the page (hard with multiple files) Some still needs reworking but for now just leave as is (moving things around can break CSS so careful)

3. Future Upgrades: 
The CSS should be fairly easy to update if needed. Most elements are declared within their relevant CSS file and can easily have their stylings updated when the time comes. index.html
should be modified only if REALLY Needed as the Javascript could get broken if ids are changed or elements are put into different sub-containers or their postion in a container is modified. The most fragile part of the HTML is the cart section since it relys heavily on the parent element of the cart items so until further notice this section should not be edited in anyway unless the javascript is also to be modified with it. 
