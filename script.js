/* Lista där alla produkter som lagts i kundvagnen sparas  */
var items = [];

/* Lista med alla produktbilder (2d) */ 
var images = [["img/mouse1_1.jpg", "img/mouse1_2.jpg"], ["img/mouse2_1.jpg", "img/mouse2_2.jpg"], ["img/mouse3_1.jpg", "img/mouse3_2.jpg", "img/mouse3_3.jpg"], 
              ["img/mouse4_1.jpg", "img/mouse4_2.jpg"], ["img/mouse5_1.jpg", "img/mouse5_2.jpg"], ["img/mouse6_1.jpg", "img/mouse6_2.jpg"]];

/* Lista för alla nuvarande positioner i images[] för varje produkt */ 
var imagepos = [];
for(let i = 0; i < images.length; i++)
{
    imagepos.push(0);
}

/* Funktion för att lägga till produkter i produktlistan (kundvagnen) */ 
function addItem(item)
{
    items.push(item);
}

function shoppingCart()
{
    var cl = document.getElementById('shopping-cart');
    cl.innerHTML = '';
    
    if(cl.style.display == 'block')
    {
        cl.style.display = 'none';
    }

    else
    {
        cl.style.display = 'block';
    }

    /* om produktlistan är tom (d.v.s om användaren inte har lagt någon vara i kundvagnen) så skriv ut att den är tom */ 
    if(items.length == 0)
    {
        cl.innerHTML='Din kundvagn är tom';
    }

    /* om kundvagnen inte är tom (length > 0) så ska alla produkter i items skrivas ut i ordning med hjälp av en for-loop */ 
    else
    {
        for(let i=0;i<items.length;i++)
        {
            cl.innerHTML += items[i];

            if(i+1 != items.length)
            {
                cl.innerHTML += '<br><br>';
            }
        }
    }
}

/* Bildspel för produkter */ 
function slideProduct(index, direction)
{
    /* Om användaren försöker gå för långt fram bland bilderna (out of bounds) gå då till den första bilden i listan (index 0) */
    if(imagepos[index]+direction == images[index].length)
    {
        imagepos[index] = 0;
    }

    /* Om användaren går för långt bak bland bilderna (out of bounds) gå då till den sista bilden i listan */
    else if(imagepos[index]+direction < 0)
    {
        imagepos[index] = images[index].length-1;
    }

    else
    {
        imagepos[index]+=direction; 
    }

    /* Hitta alla <img> taggar och ändra src */ 
    document.getElementsByTagName("img")[index].src = images[index][imagepos[index]];
}
