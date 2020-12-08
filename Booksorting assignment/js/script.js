var items = [
  {all:"all",genre:"Biography",title:"Bossypants" ,author:"Tina Fey"},
  {all:"all",genre:"Biography",title:"Becoming" ,author:"Michelle Obama"},
  {all:"all",genre:"Biography",title:"Steave Jobs" ,author:"Walter Isaccson"},
  {all:"all",genre:"Fiction",title:"Tweet Cute" ,author:"Emma Lord"},
  {all:"all",genre:"Fiction",title:"Flipped",author:"Wendelin Van Drannen"},
  {all:"all",genre:"Fiction",title:"Turtles All The Way Down" ,author:"John Green"},
  {all:"all",genre:"Poetry",title:"Milk And Honey" ,author:"Rupi Kaur"},
  {all:"all",genre:"Poetry",title:"Deeper Than The Ocean",author:"Emma Rose"},
  {all:"all",genre:"Poetry",title:"Pillow Thoughts" ,author:"Courtney Peppernell"},
];


const $ = function (booksort) { return document.getElementById(booksort); };

const titlesort = function () {
  items.sort((a, b) => {
    if(a.title > b.title){
      return 1
    } else {
      return -1
    }
  });
  show(target);
}

const authorsort = function () {
  items.sort((a, b) => {
    if(a.author > b.author){
      return 1
    } else {
      return -1
    }
  });
  show(target);
}

const show = function (id) { 
  $('display').innerHTML = ''; // changes html content to an empty string
  for (let book of items) { 
    if (id != 'All') // if it is not equal all then goes to another genre
      if (id != book.genre)
        continue;
    let r = document.createElement('tr'); //create row
    let d = document.createElement('td'); //create cell
    let t = document.createTextNode(`${book.author}, `); // data to put in
    d.appendChild(t); // appends data in cells
    r.appendChild(d); // appends data in rows
    d = document.createElement('td'); // puts the cell in the row 
    let i = document.createElement('i'); // italic typewriting for titles
    t = document.createTextNode(`${book.title}`);
    i.appendChild(t); // calls the function
    d.appendChild(i); // calls the funtion
    r.appendChild(d); //calls the funtion
    $("display").appendChild(r); // display the row
  }
}

const all = function (e) {
  target = e.target.id; // displays the ones with all by the id, targets id in html and displays the sorted elements
  show(target);
};

function allbtn() {
  $("All").addEventListener("click", all); // gives a funtion to the button and what button does
  $("Fiction").addEventListener("click", all);
  $("Biography").addEventListener("click", all);
  $("Poetry").addEventListener("click", all);
  $("auth").addEventListener("click", authorsort);
  $("title").addEventListener("click", titlesort);

}

var target = 'All';
show(target);
allbtn();
