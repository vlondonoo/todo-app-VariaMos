Fragment Images-alterAddConstants {
    Action: add
    Priority: high
    FragmentationPoints: addConstants
    PointBracketsLan: java
    Destinations: Backend-Todo-todoController
    SourceCode: [ALTERCODE-FRAG]
     const { IMAGE_FOLDER_PATH } = require('../constants');   
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddMethodInstructions {
    Action: add
    Priority: high
    FragmentationPoints: addMethodInstructions
    PointBracketsLan: java
    Destinations: Backend-Todo-todoController
    SourceCode: [ALTERCODE-FRAG]
      if (req.files && req.files.file && req.files.file.name) {
        imageName = `${Date.now()}_${req.files.file.name}`;
        const newpath = `${IMAGE_FOLDER_PATH}/${imageName}`;
        fs.writeFileSync(newpath, req.files.file.data);
      } 
    [/ALTERCODE-FRAG]
}

Fragment Images-alterControllerImage {
    Action: add
    Priority: high
    FragmentationPoints: addDeleteMethodInstructions
    PointBracketsLan: java
    Destinations: Backend-Todo-todoController
    SourceCode: [ALTERCODE-FRAG]
    await TodoModel.findAll({ where: { 'id': id } }).then(data => {
      if (data[0].dataValues.image && data[0].dataValues.image != '') {
        const newpath = `${IMAGE_FOLDER_PATH}/${data[0].dataValues.image}`;
        try {
          fs.unlinkSync(newpath);
        } catch (err) {
          console.error(err);
        }
      }
    });
    [/ALTERCODE-FRAG]
}