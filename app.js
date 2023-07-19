function submit() {
    let str = document.getElementById("str").value;
    let letter = document.getElementById("letter").value;
    let strLength = str.length;


    let counter = 0;
    for (let i = 0; i < strLength; i++) {
        // console.log(str[i]);
        if (str[i] === letter) {
            counter++;
        }
        document.querySelector("#res").innerText = `${letter} occurs ${counter} times.`;
    }

    document.querySelector('#str').value = '';
    document.querySelector('#letter').value = '';
}