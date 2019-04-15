import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let startDb = vscode.debug.onDidStartDebugSession(e => {
        console.log('START', e);
    });

    vscode.debug.onDidTerminateDebugSession(e => {
        console.log('STOP', e);
    });

    vscode.debug.onDidChangeActiveDebugSession(e => {
		if(e === undefined){
			console.log('e é undefined');
			return;
		}

        console.log('CHANGE ACTIVE', e);
    });

    vscode.debug.onDidReceiveDebugSessionCustomEvent(e => {
        console.log('CUSTOM EVENT', e.session.id, e.event, e);
	});	
	
	vscode.debug.onDidChangeBreakpoints(e=>{
		console.log('BREAKPOINT CHANGE', e);
	});
}

export function deactivate() {}
