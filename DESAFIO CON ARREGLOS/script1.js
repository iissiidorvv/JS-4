function alwaysHungry(arr) {
    let isMeal = null;
    for (let i = 0; i <arr.length; i++) {
        if ("comida"===arr[i]) {
            isMeal = "delicioso"
            console.log(isMeal);
        }
    }
    if (isMeal!=="delicioso") {
        console.log("tengo hambre");
    }
}
