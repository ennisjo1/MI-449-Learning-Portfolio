
function orange(){
    alert("hello");
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function RandomName(){
    let names = ["jose", "juan", "pedro", "maria", "luis", "julio", "laura", "lucia", "luisa", "luisana"];
    let x = getRandomIntInclusive(0, 9);
    alert( names[ x ] );
}

window.onload = function(){
    const purple = document.getElementById("purple");

    purple.addEventListener("click", (event) => {
        orange();
        RandomName();
    });

}


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hneuegdqofiksjrylcfw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZXVlZ2Rxb2Zpa3NqcnlsY2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MTQ5ODIsImV4cCI6MjA1NzM5MDk4Mn0.APK-aJXdeDoH4SVp_N3G1g3dHuhyIr9SVhvsyjWP1Ek'
const supabase = createClient(supabaseUrl, supabaseKey)


let { data: books, error } = await supabase
  .from('books')
  .select('*')
          
          

for (let book of books){
    let bookList = document.getElementById('books');
    bookList.innerHTML += '<li>${book.title}</li>';
}
  
