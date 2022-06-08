Fragment Images-alterAddOnChange {
    Action: add
    Priority: high
    FragmentationPoints: addOnChange
    PointBracketsLan: java
    Destinations: Frontend-Todo-create-task-componet
    SourceCode: [ALTERCODE-FRAG]    
        onChange(event:any) {
            this.file = event.target.files[0];
            this.file.path = this.profileForm.value.imageData;
        }
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddUploadImage {
    Action: add
    Priority: high
    FragmentationPoints: adduploadImage
    PointBracketsLan: java
    Destinations: Frontend-Todo-create-task-componet
    SourceCode: [ALTERCODE-FRAG]    
        if(this.file){
            formData.append("file", this.file, this.file.name);
            formData.append('path',this.file.path);
      }
    [/ALTERCODE-FRAG]
}

Fragment Images-alterModifyTaskName {
    Action: replace
    Priority: high
    FragmentationPoints: modifyTaskName
    PointBracketsLan: java
    Destinations: Frontend-Todo-create-task-componet
    SourceCode: [ALTERCODE-FRAG]    
        this.todoService.createTask(formData).subscribe(
    [/ALTERCODE-FRAG]
}