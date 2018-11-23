const missions = [
    {
        type: 'Ucz się kodu', 
        limit: 'codziennie', 
        importance: '!!!',
    }, {
        type: 'Wypij kawę',
        limit: 'do 10:00', 
        importance: '!',
    }
];

for (let job of missions) {
    const newEl = $(`
    <tr>
        <td>${job.type}</td>
        <td>${job.limit}</td>
        <td>${job.importance}</td>
      </tr>
`);   
    $('tbody').append(newEl);
}

$(`#add`).on('click', function() {
    const task = $('#task').val();
    const deadline = $('#deadline').val();
    const prior = $('#prior').val();

    const newTask = $(`
        <tr>
            <td>${task}</td>
            <td>${deadline}</td>
            <td>${prior}</td>
          </tr>
    `);

    $('tbody').append(newTask);
    $(`.form`).trigger('reset'); // nie działa!!!!!!!
})


// document.addEventListener("DOMContentLoaded", function() {  

// const addBtn = querySelector('#add')
//  addBtn.addEventListener("click", function() {
//      const task = querySelector('#task').val(); 
//      const deadline = querySelector('#deadline').val();
//      const prior = querySelector('#prior').val(); 
//       }

//    const newTask = $(`
//         <tr>
//             <td>${task}</td>
//             <td>${deadline}</td>
//             <td>${prior}</td>
//         </tr>
//     `);  

//  const table = querySelector("tbody");
//  table.append(newTask);

// }
