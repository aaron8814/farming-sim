<script lang="ts">

    // let fruit = Apple;
    //let fruitObject = {
    //     name: 'apple',
    //     shape; 'round',
    //     color: 'red',
    // }


const boxOfFruit = [
    "apple",
    "banana",
    "pineapple",
    "mango",
];

const boxOfFruitObjects = [
    {name: 'apple', color: 'red'},
   { name: 'banana', color: 'yellow' },
   { name: 'pineapple', color: 'yellow' },
   { name: 'mango', color: 'orange' },
];

const justApple = boxOfFruit.filter((fruit => {
    return fruit;
}));
const allSortsOfApples = boxOfFruit.filter ((fruit => {
    return fruit;
}));
//home work2
const justAppleObjects = boxOfFruitObjects.filter((fruit => {
    console.log(fruit.name.indexOf('apple'));
    
    console.log(fruit.color.indexOf ('red'));
    
    return fruit;
    // how to get just apple
}));

const turnTHeApplesBlue = justAppleObjects.map(fruit => {
    //returning an object
    return {
        ...fruit,
        // turn object blue
    }
});




</script>



{#each turnTHeApplesBlue as fruit}
    <div> {fruit.name} {fruit.color} </div>
    <!-- blue apple only -->
{/each}