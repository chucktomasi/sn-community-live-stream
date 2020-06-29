// UI Action script #3
var evaluator = new GlideScopedEvaluator();

var userTasks = new MyUtils().taskCounter(current.user);
evaluator.putVariable('taskCount', userTasks);

evaluator.evaluateScript(current, 'script');
evaluator.getVariable('answer');
if (typeof answer == 'undefined') {
    gs.addErrorMessage('answer variable not defined');
} else {
    gs.addInfoMessage('Returned answer=' + answer);
}
action.setRedirectURL(current);