var obj = JSON.parse(event.parm1);
new TodoistREST().deleteTask(obj);