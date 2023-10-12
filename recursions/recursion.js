// Definition
let counter = 0;
function inception() {
    console.log(counter);
    if (counter >= 3) {
        console.log('Done!');
        return;
    }

    counter++;

    return inception();
}

inception();

