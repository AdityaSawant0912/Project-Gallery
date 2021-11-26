let uploadBtn = document.getElementById('upload-btn');

uploadBtn.addEventListener('click', ()=>{
    let input = document.getElementById('uploadImages');
    if (input.value.length === 0) {
        alert('Please Upload a file');
    }
    else{
        let imgName = Date.now() + '-' + input.files[0].name;
        // console.log(input.files[0]);
        let newImage = new File([input.files[0]], `${imgName}`)
        // console.log(newImage);
        let formData = new FormData();

        formData.append('image', newImage)
        document.getElementById('image-name').value = imgName;
        document.getElementById('uploadImages').value = null;
        document.getElementById('upload-btn').disable = true;
        fetch('/upload', {
            method: 'POST',
            body: formData,
        }).then(res => console.log(res))
        .catch(err => console.log(err));
        
    }
});