Fragment OrderByTitle-alterToDoController {
    Action: add
    Priority: high
    FragmentationPoints: addMethods
    PointBracketsLan: java
    Destinations: Backend-Todo-todoController
    SourceCode: [ALTERCODE-FRAG]
    exports.listOrderedPending = async function (req, res) {
      const todos = await TodoModel.findAll({
        where: { 'state': 'OPEN' }, order: [['message', req.params.direction]]
      });
      res.send({ "list": todos });
    }

    exports.listOrderedClosed = async function (req, res) {
      const todos = await TodoModel.findAll({
        where: { 'state': 'CLOSE' }, order: [['message', req.params.direction]]
      });
      res.send({ "list": todos });
    } 
    [/ALTERCODE-FRAG]
}