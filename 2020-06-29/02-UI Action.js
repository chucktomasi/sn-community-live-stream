// UI Action Script #2
var evaluator = new GlideScopedEvaluator();

var userTasks = new MyUtils().taskCounter(current.user);
evaluator.putVariable('taskCount', userTasks);

evaluator.evaluateScript(current, 'script');
action.setRedirectURL(current);
