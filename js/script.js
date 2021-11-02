let allStudent = ["БЕМА Вадим Олегович", "БОНДАРЕНКО Богдан Сергійович", "ВАЩУК Олександр Олегович", "ДЕМЕНСЬКИЙ Артур Максимович",
    "ЄФІМЧУК Дмитро Сергійович", "КОЖЕВНІКОВ Ілля Богданович", "КАРПЕНКО Анатолій Віталійович",
    "МІЦУРА Єгор Ігорович", "РАЗНО Олег Сергійович", "ЧЕРНЕНЬКИЙ Микола Михайлович", "ЯКОВЕНКО Ярослав Олегович"
    , "НЕЧАЄВ Нікіта Андрійович", "РИБАК Іван Андрійович", "КРЯЧКО Олексій Юрійович"]

let div = document.querySelector(".colu")

/*allStudent.map((item, i) => {
        let pen = document.createElement('p')
        pen.innerHTML = item
    pen.className = "p"
        document.querySelector('.hello').append(pen)
    }
)*/
let pens = document.querySelectorAll(".p")
document.querySelector('#searcher').oninput = function () {
    let hel = document.querySelector('.colu')
    console.log("hel", hel)
    hel.innerHTML = '';
    let filterItems = [];
    let val = this.value.trim()
    console.log("val: ", val)
    if (val != "") {
        filterItems = allStudent.filter(i => {
            if (i.toLowerCase().includes(val.toLowerCase())) {
                return i
                console.log(filterItems)
            }

        });
        console.log("filterItems: ", filterItems)
        console.log("filterItems: ", val)

        filterItems.map((item, i) => {

            let pen = document.createElement('h1')
            pen.className = "lead"
            pen.append(item)
            let hel = document.querySelector('.colu')
            if (item.toLowerCase().includes(val.toLowerCase())) {
                hel.append(pen)
            }
            else
                {
                    hel.removeChild(pen)
                }
            }
        )

    }
}
/*
document.querySelector('#searcher').oninput = function () {
    let val = this.value.trim()
    let elem = document.querySelectorAll(".searcher2 li");

    if (val != "") {

        allStudent.forEach(function (item, i ){
let pen = document.createElement('p')
            pen.innerHTML = item
            document.querySelector('.hello').innerHTML = item
    /!*        if (item.toLowerCase().search(val.toLowerCase()) == -1){
                item.classList.add("hide")
                console.log("алал")


            }
            else {
                div.innerHTML = item

            }*!/

        })

    }
    else {
        elem.forEach(function (elemm){
            elemm.classList.remove('hide')
        })
    }
}*/
