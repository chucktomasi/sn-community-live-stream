var span = new GlideRecord('cmn_schedule_span');
span.get('c88a628bc0a8016500d691d1cdc4f177');
gs.info('displayValue=' + span.start_date_time.getDisplayValue());
gs.info('value=' + span.getValue('start_date_time'));