/*   This is an advanced qualifier function for the cmdb_ci field
 *   To use it, add the following line to the CI ref qualifier
 *	javascript:loanerCIRefQual()
 */

function loanerCIRefQual() {
	
	gs.info('>>>loanerCIRefQual(): start');
	var answer;
	var req = {};
	
	if (current.item_type) {
		gs.info('>>>FORM');
		req.depot = current.depot;
		req.item_type = current.item_type;
		req.work_start = current.work_start;
		req.work_end = current.work_end;
		
	} else {
		gs.info(">>>CATALOG ITEM");
		req.depot = current.variables.depot.toString();
		req.item_type = current.variables.item_type.toString();
		req.work_start = current.variables.work_start;
		req.work_end = current.variables.work_end;

	}
	
	gs.info('>>>loanerCIRefQual(): ' + JSON.stringify(req, null, 4));
	
	var lu = new LoanerUtils();
	answer = 'sys_idIN' + lu.availableCis(req.item_type, req.depot, req.work_start, req.work_end);
	
	return answer;
}