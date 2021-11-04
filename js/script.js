let allStudent = ["БЕМА Вадим Олегович", "БОНДАРЕНКО Богдан Сергійович", "ВАЩУК Олександр Олегович", "ДЕМЕНСЬКИЙ Артур Максимович",
    "ЄФІМЧУК Дмитро Сергійович", "КОЖЕВНІКОВ Ілля Богданович", "КАРПЕНКО Анатолій Віталійович",
    "МІЦУРА Єгор Ігорович", "РАЗНО Олег Сергійович", "ЧЕРНЕНЬКИЙ Микола Михайлович", "ЯКОВЕНКО Ярослав Олегович"
    , "НЕЧАЄВ Нікіта Андрійович", "РИБАК Іван Андрійович", "КРЯЧКО Олексій Юрійович", ]



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

        filterItems.map((item) => {

            let pen = document.createElement('h1')
            pen.className = "lead"
            pen.append(item)
            let hel = document.querySelector('.colu')
            if (item.toLowerCase().includes(val.toLowerCase()))
                hel.append(pen)


            }
        )

    }
}


let list = document.querySelector(".listStud")
allStudent.map((item) =>{
    let stud = document.createElement('h1')
    stud.className = "lead"
    stud.classList.add("searchInp2")
    stud.append(item)
    list.append(stud)
})
let navTog = document.querySelector(".navbar-toggler")

navTog.onclick = () => {
    let collapsed = document.querySelector(".navbar-toggler").getAttribute('aria-expanded')
    let collapsed2 = document.querySelector(".navbar-toggler")
if (collapsed === "true")
{
    document.querySelector(".tab-pane").style.marginTop = "0px"
    document.querySelector(".tab-pane2").style.marginTop = "0px"
}
else {
    document.querySelector(".tab-pane").style.marginTop = "250px"
    document.querySelector(".tab-pane2").style.marginTop = "250px"
}
}
