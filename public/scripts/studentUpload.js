let uploadBtn = document.getElementById("upload_btn");

uploadBtn.addEventListener("click", () => {
  let input = document.getElementById("uploadImages");
  if (input.value.length === 0) {
    alert("Please Upload a file");
  } else {
    let imgName = Date.now() + "-" + input.files[0].name;
    // console.log(input.files[0]);
    let newImage = new File([input.files[0]], `${imgName}`);
    // console.log(newImage);
    let formData = new FormData();
    let project_name = document.getElementById("project_name").value;
    let project_description = document.getElementById(
      "project_description"
    ).value;
    let project_image = imgName;
    let project_category = document.getElementById("category").value;
    let project_abstract = document.getElementById("project_abstract").value;
    let project_problem_statement = document.getElementById(
      "project_problem_statement"
    ).value;
    let project_methodology = document.getElementById(
      "project_methodology"
    ).value;
    let project_objective = document.getElementById("project_objective").value;
    let project_results = document.getElementById("project_results").value;
    let project_references =
      document.getElementById("project_references").value;
    let project_achivements = document.getElementById(
      "project_achivements"
    ).value;
    let project_mentor = document.getElementById("project_mentor").value;
    let member_1 = document.getElementById("member_1").value;
    let member_2 = document.getElementById("member_2").value;
    let member_3 = document.getElementById("member_3").value;
    let member_4 = document.getElementById("member_4").value;
    let member_name_1 = document.getElementById("member_name_1").value;
    let member_name_2 = document.getElementById("member_name_2").value;
    let member_name_3 = document.getElementById("member_name_3").value;
    let member_name_4 = document.getElementById("member_name_4").value;
    let project_members = `${member_1},${member_2},${member_3},${member_4}`;
    let project_members_name = `${member_name_1},${member_name_2},${member_name_3},${member_name_4}`;
    
    let project_year = document.getElementById("year").value;
    
    formData.append("image", newImage);
    formData.append("project_name", project_name);
    formData.append("project_description", project_description);
    formData.append("project_image", project_image);
    formData.append("project_category", project_category);
    formData.append("project_abstract", project_abstract);
    formData.append("project_problem_statement", project_problem_statement);
    formData.append("project_methodology", project_methodology);
    formData.append("project_objective", project_objective);
    formData.append("project_results", project_results);
    formData.append("project_references", project_references);
    formData.append("project_achivements", project_achivements);
    formData.append("project_mentor", project_mentor);
    formData.append("project_members", project_members);
    formData.append("project_members_name", project_members_name);
    formData.append("project_year", project_year);
    document.getElementById("uploadImages").value = null;
    fetch("/student/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => document.location.href="/")
      .catch((err) => console.log(err));
  }

});
