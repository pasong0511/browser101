const items = document.querySelector(".items");             //ul 태그
const input = document.querySelector(".footer__input");     //input 태그 : 입력창
const addBtn = document.querySelector(".footer__button");   //button 태그 : 입력 추가 버튼
const form = document.querySelector(".new__form");

function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;

    if(text === ""){                    //빈 값 들어왔을때는 추가하지 않음
        input.focus(); 
        return ;
    }

    //2. 새로운 item 만들기
    const item = creteItem(text);       //입력받은 텍스트 creteItem() 함수에 전달
    
    //3. item 컨터이너 안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);            //ul태그에 추가

    //4. 새로 추가된 아이템으로 스트크롤링
    item.scrollIntoView({block:'center'});

    //5. 인풋을 초기화한다.
    input.value = "";
    input.focus();      //<-- 없으면 사용자가 다시 클릭해줘야 포커스가 잡힌다.
}

let id = 0;

//ul:.items > li.item__row > (div.item > span.item__name & button.item__delete) & div.item__divider
function creteItem(text) {
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "item__row");
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete">
            <span><i class="fas fa-trash-alt" data-id=${id}></i></span>
        </button>
    </div>
    <div class="item__divider"></div>
    `;

    id++;
    return itemRow;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    onAdd();
});

items.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id='${id}']`);
        toBeDeleted.remove();
    }
});