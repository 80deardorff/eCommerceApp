// OBJECT CONSTRUCTOR FOR BUILDING NEW ITEMS
function Item(name, image, description, price, stock) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = (function(){
                        let a = price.toFixed(2);
                        return a;})();
    this.stock = stock;
}

// A COUPLE OF CREATED OBJECTS
let item0 = new Item('19" Competition Style 359 Wheel', 'https://c1552172.ssl.cf0.rackcdn.com/380255_x600.jpg', 'Style 359 wheel from the Competition Package E9x M3. Also fits Non-M models.', 660.55, 76);
let item1 = new Item('aFe Mach Force Exhaust', 'http://www.modbargains.com/zoom_img/_1415189400.jpg', '2.5" catback system. Fully stainless with carbon fiber tips.', 1576.89, 8);
let item2 = new Item('Brembo Competition Brake Kit', 'https://carbahnautoworks.com/wp-content/uploads/brembo-xb105-boltin-caliper-355x32x65a-type-5-with-logo-slotted-med.jpg', 'Full ceramic brake kit. 355mm design for high performance heat dispertion.', 8876.00, 6);
let item3 = new Item('Turner Motorsport Power Pulley Kit', 'https://c1552172.ssl.cf0.rackcdn.com/836626_x600.jpg', 'High performance belt with lightweight pulleys.', 835.60, 10)

//ARRAY OF ALL ITEMS
items = [item0, item1, item2, item3];

//FUNCTION THAT CREATES AND ADDS ELEMENTS NEEDED FOR A NEW ITEM
function displayItem(item) {

    //CREATES ELEMENTS WHITIN THE BODY
    div1 = document.createElement('div');
    img = document.createElement('img');
    div2 = document.createElement('div');
    h5 = document.createElement('h5');
    p = document.createElement('p');
    h6 = document.createElement('h6');
    button = document.createElement('button');
    icon = document.createElement('i');

    // SET ATTRIBUTES TO THE NEW ELEMENTS AS NEEDED
    div1.setAttribute('class', 'item bg-light col-12 col-sm-6 col-md-4');
    button.setAttribute('class', 'btn btn-success');
    button.setAttribute('type', 'button');
    button.setAttribute('name', 'button');
    icon.setAttribute('class', 'fas fa-shopping-cart');

    //APPENDS ALL ELEMENTS TO DOCUMENT CREATING NEW ITEM
    div1.append(img, div2);
    div2.append(h5, p, h6, button);
    button.innerText = 'Add To ';
    button.append(icon);
    $('.row').append(div1);

    //ADD INFO FROM ARGUMENT TO ELEMENTS
    img.src = item.image;
    img.alt = item.name;
    h5.innerText = item.name;
    p.innerText = item.description;
    h6.innerText = 'Price: $' + item.price;
};

//RUNS THE displayItem FUNCTION AND PULLS INFO FROM THE items ARRAY WITH A FOR LOOP
for (let i = 0; i < items.length; i++) {
    displayItem(items[i]);
    console.log('success');
}
