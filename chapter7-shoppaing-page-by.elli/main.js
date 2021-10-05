const items = document.querySelector(".items");             //ul 태그
const input = document.querySelector(".footer__input");     //input 태그 : 입력창
const addBtn = document.querySelector(".footer__button");   //button 태그 : 입력 추가 버튼

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

//ul:.items > li.item__row > (div.item > span.item__name & button.item__delete) & div.item__divider
function creteItem(text) {
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "item__row");

    const item = document.createElement("div");
    item.setAttribute("class", "item");

    const name = document.createElement("span");
    name.setAttribute("class", "item__name");
    name.innerText = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class","item__delete");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    
    deleteBtn.addEventListener("click", () => {                     //deleteBtn 클릭시 click 이벤트 발생 
        items.removeChild(itemRow);
    });

    const itemDivider = document.createElement("div");
    itemDivider.setAttribute("class", "item__divider");

    item.appendChild(name);                 //itemp에 이름, 버튼 추가
    item.appendChild(deleteBtn);


    itemRow.appendChild(item);              //itemRow에 item과 나눔선 추가
    itemRow.appendChild(itemDivider);

    return itemRow;
}

addBtn.addEventListener("click", () => {
    onAdd();
});

input.addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
        onAdd();
    }
});
