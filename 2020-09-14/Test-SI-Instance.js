// Test script for the Instance() script include
//
gs.info('instance name=' + new Instance().getName());
gs.info('instance id=' + new Instance().getId());
gs.info('instance url=' + new Instance().getUrl());
gs.info('arg parm=' + new Instance().getInfo('name'));