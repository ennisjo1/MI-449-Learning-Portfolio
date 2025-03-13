import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dnychhfgjwxvtfgfpqwq.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

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

let { data: 8.5 Lab, error } = await supabase
  .from('8.5 Lab')
  .select('*')

window.onload = function(){
    const purple = document.getElementById("purple");

    purple.addEventListener("click", (event) => {
        orange();
        RandomName();
    });

}

