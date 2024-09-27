let products=[
    "Iphone 16",
    "Iphone 15",
    "Iphone 13",
];


function showAll(){
    let content="";
    for(let i=0;i<products.length;i++){
        content+=`
        <tr>
            <td>${products[i]}</td>
            <td>
                <button>Edit</button>
                <button onclick="deleteById(${i})">Delete</button>
            <td>
        </tr>`
    }
    document.getElementById("content").innerHTML = content;
}

showAll();


function createProducts(){
//     lay du lieu ra
    let name = document.getElementById("name").value;
//     them moi vao mang
    products.push(name);
//     Hien thi lai du lieu
    showAll();
}

function deleteById(id) {
//     xoa theo id
    products.splice(id, 1);
//     hien thi lai du lieu
    showAll();
}
