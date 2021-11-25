let uploadBtn = document.getElementById('upload-btn');

uploadBtn.addEventListener('click', ()=>{
    let input = document.getElementById('uploadImages');
    if (input.value.length === 0) {
        alert('Please Upload a file');
    }
    else{
        console.log(input.files[0]);
        let formData = new FormData();

        formData.append('image', input.files[0])

        fetch('/upload', {
            method: 'POST',
            body: formData,
        }).then(res => console.log(res))
        .catch(err => console.log(err));
        
    }
});