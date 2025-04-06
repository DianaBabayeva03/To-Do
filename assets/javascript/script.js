const form = document.getElementById('taskForm'); // id-si taskForm olan element cagirilir ve form adi verilir.
const taskInput = document.getElementById('inputTask'); // id-si inputTask olan element cagirilir ve taskInput adi verilir.
const taskList = document.getElementById('taskList')// id-si taskList olan element cagirilir ve taskList adi verilir.

// bu yazacagimiz funksiya submit buttonuna click etdikde bash verecek hadiseni eks etdirir
form.addEventListener("submit", function (e) {
    e.preventDefault(); //bu kod vasitesile sehifein avtomatik yenilenmesinin qarshisini ala bilirsiniz. eks halda
    
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("bosh tapshiriq gondermek olmaz");
        return;
    } // demeli, burada taskInputda istifadecinin yazacagi metni goturur trim metodu ile boshlqulari silir, eger input bosh olarsa qarshisina alert chixarir ki, bosh gondermek olmaz

    const li = document.createElement("li"); //li elementi yaradilir
    const checkbox = document.createElement("input"); // input elementi yaradilir
    checkbox.type = "checkbox"; // ve type-i chechkbox sechilir. <input type="checkbox" name="" id=""> --> burada js ile yaradilan kod eslinde budur

    checkbox.addEventListener("change", function(){
        if (checkbox.checked) {
            li.remove();
        }
    }); // bu funksiyada istifadechi checkbox-u sechende hemin li-ni silir. yeni type-i checkbox olan input isharelenibse onu sil demekdir kodun anlami

    const text = document.createTextNode(taskText); // bu kodda inputa daxil edilen metn DOM uchun metne chevrilir
    li.appendChild(checkbox); // li-ye checkbox elave edir
    li.appendChild(text) // inputa yazilan metni elave edir
    taskList.appendChild(li); // html-de yazilan id-si taskList olan ul-nin daxiline li-ni elave edir
    taskInput.value=""; // bu kod ise id-si inputTask olan inputa metn daxil edib submit buttonuna click etdikden sonra hemin inputdan metnin silinmesi uchundur. yeni deyerini bosh stringde cevirir
})