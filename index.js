console.log('Halo JS')
console.log('Halo Ningen')

let var1 = "value String";
let var2 = 12345;
let var3 = "Saya sedang belajar JS";

console.log(var1)
console.log(`${var1} ${var2}`)
console.log(typeof(var2))

const array = [
    "string",
    false,
    12345,
    { key1: "val1", key2: "val2"},
    function(){
        console.log("ini function");
    },
];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

const obj = {
    key1: "string",
    key2: false,
    key3: 12345,
    key4: ["v1","v2","v3"],
    key5: { key1: "val1", key2: "val2"},
    key6: function(){
        console.log("dis wan is function");
    },
};

console.log(obj.key1);
console.log(obj.key2);
console.log(obj.key3);
console.log(obj.key4);
console.log(obj.key5);

const dataSiswa = [
    {
        name: "yjh",
        class: "LN01",
        yearIn: 2023,
    },
    {
        name: "jhy",
        class: "LN01",
        yearIn: 2023,
    },
    {
        name: "jyh",
        class: "LN01",
        yearIn: 2023,
    }
]

// nested loop
for(let i = 0; i < dataSiswa.length; i++){
    const k = dataSiswa[i];
    for( let j = 0; j < k.length; j++ ){
        console.log(k[j]);
    }
}

let count = 0;
count++;

console.log(count);